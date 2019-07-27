import React from 'react';

const AddContact = () => {
    return (
        <div className="modal fade" id="addContact" tabIndex="-1" role="dialog" aria-labelledby="addContactLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addContactLabel">Add New Contact</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="full-name" className="col-form-label">Full Name *:</label>
                  <input type="text" placeholder="full name (required)" className="form-control" id="full-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-form-label">Email *:</label>
                  <input type="email" placeholder="email (required)" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div> );
}
 
export default AddContact;