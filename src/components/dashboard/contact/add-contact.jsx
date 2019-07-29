import React from 'react';
import Form from '../../../common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import { addContactSrv } from '../../../services/contact';
import { reInialize } from '../../../utilities/reinialize';


class AddContact extends Form {
  state = { 
    data: { fullName: '', email: '', phoneNumber: null, address: ''},
    errors: {},
    errMsg: null
   }
   schema = {
    fullName: Joi.string().required(), 
    email: Joi.string().email().allow(''), 
    phoneNumber: Joi.number().required(), 
    address: Joi.string().required()
   }
   closeModal = () => {
    document.querySelector('#closeModal').click();
    this.setState({data: reInialize(this.state.data), errMsg: null})
   }
   doSubmit = async () => {
     const {onlistContact} = this.props;
     this.setState({errMsg: null})
     try {
     await addContactSrv(this.state.data);
     toast.success('contact saved')
     this.closeModal()
     this.setState({data: reInialize(this.state.data)})
     onlistContact();
     } catch (error) {
       this.setState({errMsg: error.message})
     }
     
   }
  render() { 
    const { data, errMsg } = this.state;
    return ( 
      <div className="modal fade" id="addContact" tabIndex="-1" role="dialog" aria-labelledby="addContactLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addContactLabel">Add New Contact</h5>
            <button onClick={this.closeModal} type="button" id="closeModal" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {errMsg && <div className="alert alert-danger">{errMsg.message}</div>}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {this.renderInput('fullName', null, 'Full Name', data.fullName )}
                </div>
              <div className="form-group">
              {this.renderInput('email', 'email', 'Email', data.email )}
             </div> 
              <div className="form-group">
              {this.renderInput('phoneNumber', 'number', 'Phone Number', data.phoneNumber )}
              </div>
              <div className="form-group">
              {this.renderTextArea('address', 'textarea', 'Address', data.address )}
              </div>
              <div className="modal-footer">
            <button onClick={this.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            {this.renderButton('Add Contact')}
          </div>
            </form>
          </div>

        </div>
      </div>
    </div>
     );
  }
}
export default AddContact;

