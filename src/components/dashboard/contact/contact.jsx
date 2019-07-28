import React, { Component } from 'react';
import AddContact from './add-contact';
import { listContactSrv } from '../../../services/contact';
import ListContact from './list-contact';

class Contact extends Component {
    state = {
        contacts: null
    }
    fetchContact = async () => {
        const { data } = await listContactSrv();
        this.setState({contacts: data.data})
    }
    componentDidMount() {
        this.fetchContact()
    }
    

    render() { 
        const { contacts } = this.state;
        return ( 
        <div className="container">
            {!contacts ? <div className="row">
                <div className="col-12 text-center">
                    <div><span className="fa fa-spinner fa-spin fa-4x mt-3"></span></div>
                </div>     
            </div> : 
            <div className="row">
            {!contacts.length ? 
                <div className="col-md-12  text-center">
                <img width="40%" src="https://dashboard.invoice.ng/dboard/img/welcome.png" alt="imag"/>
                <h5 className="mt-3">Stay more organised with your business contacts.</h5>
            </div> : 
            <ListContact contacts={contacts}/>}
            <div className="col-12 text-center">
            <button data-toggle="modal" data-target="#addContact" className="btn btn-primary"><i className="fa fa-plus-circle"></i> Add Contact</button>
            </div>
        </div>
        
        }

            <AddContact onlistContact={this.fetchContact} />            
        </div> );
    }
}
 
export default Contact;