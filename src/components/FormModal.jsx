import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StudentForm from './StudentForm';
import { createCustomer } from '../service/StudentService';

const FormModal = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var customer, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'create':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (customer) => { createCustomer(customer); }
      customer = {};
      break;
    case 'update':
      buttonColor = 'warning';
      buttonText = type.toString().toUpperCase();
      crudFunction = props.handleUpdate;
      customer = props.customer;
      break;
    default:
  }

  return (
    <>
      {<Button variant={buttonColor} onClick={handleShow}>
        {buttonText}
      </Button>}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{buttonText + ' Customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><StudentForm customer={customer} handleCrud={crudFunction} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;