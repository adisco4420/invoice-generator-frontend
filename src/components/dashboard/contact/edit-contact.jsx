import React from 'react';
import Form from '../../../common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import { updateContactSrv } from '../../../services/contact';
import { reInialize } from '../../../utilities/reinialize';


class EditContact extends Form {
    state = { 
        data: { fullName: '', email: '', phoneNumber: null, address: ''},
        errors: {},
        errMsg: null
       }
    componentDidMount() {
      this.setState({data: this.props.data})
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
       console.log('do');
       
     this.setState({errMsg: null})
     try {
     await updateContactSrv(this.props.id, this.state.data);
     toast.success('contact updated')
     this.closeModal()
     this.setState({data: reInialize(this.state.data)})
     } catch (error) {
       this.setState({errMsg: error.message})
     }
     
   }
  render() { 
    const { data, errMsg } = this.state;
    return ( 
      <div className="modal fade" id="editContact" tabIndex="-1" role="dialog" aria-labelledby="editContactLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addContactLabel">Edit Contact</h5>
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
            {this.renderButton('Edit Contact')}
          </div>
            </form>
          </div>

        </div>
      </div>
    </div>
     );
  }
}
export default EditContact;

