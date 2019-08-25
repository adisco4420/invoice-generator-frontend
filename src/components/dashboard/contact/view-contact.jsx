import React, { Component } from "react";
import { viewContactSrv } from "../../../services/contact";
import Loader from "../../../common/loader";
import PageHeader from "../../../common/header";
import CardDetail from "../../../common/card-detail";
import { toast } from 'react-toastify';
import EditContact from "./edit-contact";

class ViewContact extends Component {
  state = {
    contact: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchContact(id);
  }
  async fetchContact(id) {
    try {
      const { data } = await viewContactSrv(id);
      this.setState({ contact: data.data });
    } catch (error) {
      toast.error(error.message.message);
      setTimeout(() => {
        this.props.history.push('/dashboard/contact')
      }, 2000);
    }
  }

  render() {
    const { contact } = this.state;
    // const data = { fullName: contact.fullName, email: contact.email, address: contact.address, phoneNumber: contact.phoneNumber}
    return (
      <div className="container">
        {!contact && <Loader />}
        {contact && (
          <React.Fragment>
            <header className="mb-1 text-capitalize">
              <PageHeader title={contact.fullName} />
              <span className="float-right ">
                <button className="btn btn-success btn-sm" data-toggle="modal" data-target="#editContact">
                  <i className="fa fa-edit" /> Edit Contact
                </button>
              </span>
            </header>
            <div className="row">
                <CardDetail data={contact.accounts}/>
            </div>
            <EditContact id={contact._id}
              data={{fullName: contact.fullName, email: contact.email, address: contact.address, phoneNumber: contact.phoneNumber}}/>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ViewContact;
