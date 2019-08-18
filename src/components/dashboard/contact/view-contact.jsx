import React, { Component } from 'react';
import { viewContactSrv } from '../../../services/contact';
import Loader from '../../../common/loader';

class ViewContact extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
       const {id} = this.props.match.params;
        this.fetchContact(id);
    }
   async fetchContact(id) {
        try {
            const {data} = await viewContactSrv(id)
            this.setState({contact: data.data})
        } catch (error) {
            console.log(error);
        }
    }
    
    render() { 
        const { contact } = this.state;
        return ( 
            <div className="container">
               {!contact && <Loader />}
                {contact && <div className="row">
                    <div className="col-md-12">
                        <header>
                            <h5 className="d-inline">{contact.fullName}</h5>
                            <button className="btn btn-info text-right">Edit</button>
                        </header>
                    </div>
                </div>}
            </div>
         );
    }
}
 
export default ViewContact;