import React, { Component } from 'react';
import FormModal from './FormModal';
import './Card.css';

class Card extends Component {

    // Returns sub functions that make up Card Components
    render() {

        return (
            <div className="card bg-secondary text-white rounded col-lg-2 col-12 col-md-12 d-flex align-content-center" id={'card' + this.props.info.id}>
                <Header firstName={this.props.info.firstName} lastName={this.props.info.lastName} id={this.props.info.id} />
                <Body customerUsername={this.props.info.customerUsername} />
                <Footer cardID={'card' + this.props.info.id} customer = {this.props.info} customerid={this.props.info.id} handleDelete={this.props.handleDelete} 
                handleUpdate={this.props.handleUpdate} />
            </div>

        );
    }
}

function Header(props) {
    return (
        <div className="card-header">
            <h3><b>{props.firstName + ' ' + props.lastName + ' ID: ' + props.id}</b></h3>
        </div>
    );
}

function Body(props) {
    return (
        <div className="card-body">
            <div className="container">
                <p><b>Username: {props.customerUsername}</b></p>
            </div>
        </div>
    );
}

// Foot calls props functions that lift state up for deletion and updte buttons on the card
function Footer(props) {
    return (
        <div className="card-footer btn-group">
            <button className="btn btn-danger" onClick={props.handleDelete.bind(this, props.customerid)}>DELETE</button>
            <FormModal type='update' customer={props.customer} handleUpdate={props.handleUpdate}/>
        </div>
    );
}
export default Card;