import React from 'react';

const AddContact = () => {
    return (
        <div class="modal fade" id="addContact" tabindex="-1" role="dialog" aria-labelledby="addContactLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addContactLabel">Add New Contact</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="full-name" class="col-form-label">Full Name *:</label>
                  <input type="text" placeholder="full name (required)" class="form-control" id="full-name" />
                </div>
                <div class="form-group">
                  <label for="email" class="col-form-label">Email *:</label>
                  <input type="email" placeholder="email (required)" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div> );
}
 
export default AddContact;