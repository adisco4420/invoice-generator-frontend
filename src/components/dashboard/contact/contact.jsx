import React, { Component } from 'react';
import AddContact from './add-contact';

class Contact extends Component {

    render() { 
        return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12  text-center">
                    <img width="40%" src="https://dashboard.invoice.ng/dboard/img/welcome.png" alt="imag"/>
                    <h5 className="mt-3">Stay more organised with your business contacts.</h5>
                    <button data-toggle="modal" data-target="#addContact" className="btn btn-primary"><i className="fa fa-plus-circle"></i> Add Contact</button>
                </div>
            </div>
            <AddContact />            
        </div> );
    }
}
 
export default Contact;