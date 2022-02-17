import React, { Component } from 'react';
import './form.css';

class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.customer.id,
            username: props.customer.customerUsername,
            password: props.customer.customerPassword,
            firstName: props.customer.firstName,
            lastName: props.customer.lastName
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-style">
                    {this.state.id && <h3>{'Changes for ' + this.state.firstName + ' ' + this.state.lastName}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >First Name:</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Last Name:</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Username:</label>
                            <input type="text" name="customerUsername" className="form-control" id="customerUsername" value={this.state.customerUsername} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input type="password" name="customerPassword" className="form-control" id="customerPassword" value={this.state.customerPassword} onChange={this.handleChange} required />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default StudentForm;