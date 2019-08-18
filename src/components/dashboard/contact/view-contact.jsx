import React, { Component } from "react";
import { viewContactSrv } from "../../../services/contact";
import Loader from "../../../common/loader";
import PageHeader from "../../../common/header";
import CardDetail from "../../../common/card-detail";
import { toast } from 'react-toastify';

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
    return (
      <div className="container">
        {!contact && <Loader />}
        {contact && (
          <React.Fragment>
            <header className="mb-1 text-capitalize">
              <PageHeader title={contact.fullName} />
              <span className="float-right ">
                <button className="btn btn-success btn-sm">
                  <i className="fa fa-edit" /> Edit
                </button>
              </span>
            </header>
            <div className="row">
                <CardDetail data={contact.accounts}/>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ViewContact;
