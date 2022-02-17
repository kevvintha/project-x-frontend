import { useState, useEffect } from 'react';
import axios from 'axios';

const baseurl = 'http://localhost:8080';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = `${baseurl}/api/customers`;
  const getById = `${baseurl}/api/customers/` + param;
  const search = `${baseurl}/api/customers/search/` + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    case 'search': url = search;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + data[0]);
        }
      } catch (error) {
        setData(false);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createCustomer(customer) {
  return axios.post(`${baseurl}/api/add/customer`, customer);
}

export function updateCustomer(customer) {
  console.log('in the upate service');
  return axios.put(`${baseurl}/api/update/customer`, customer);
}

export function deleteCustomer(id) {
  return axios.delete(`${baseurl}/api/customer/delete/` + id);
}




