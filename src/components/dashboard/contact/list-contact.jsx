import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../common/header';
import { getDate } from '../../../utilities/basic';
const ListContact = ({contacts, onDelete}) => {
    return (
      <React.Fragment>
      <PageHeader title="Contacts" />
      {/* <span className="float-right ">
          <button data-toggle="modal" data-target="#addContact" className="btn btn-primary btn-sm mr-2"><i className="fa fa-plus-circle"></i> Add Contact</button>
          <button  className="btn btn-success btn-sm"><i className="fa fa-plus-circle"></i> Add Invoice</button>
      </span> */}
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Full Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Date</th>
        <th scope="col">Actions</th>        
      </tr>
    </thead>
    <tbody>
        {contacts.map((contact, index) => {
            return (<tr key={contact._id}>
                <th scope="row">{index+1}</th>
                <td>{contact.fullName}</td>
                <td>{contact.email || 'null'}</td>
                <td>{contact.phoneNumber || 'null'}</td>
                <td>{getDate(contact.createdAt) || 'null'}</td>
                <td>
                    <Link to={`contact/${contact._id}`}><span className="fa fa-eye mr-3" title="open"></span></Link>
                    <button onClick={() => onDelete(contact._id)} className="btn btn-danger btn-sm" title="delete">
                    <span  className="fa fa-trash "></span>
                    </button>
                    
                </td>
              </tr>)
        }) }

    </tbody>
  </table> 
  </React.Fragment>);
}
 
export default ListContact;