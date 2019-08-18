import React, { Component } from 'react';
import Graph from '../../../common/graph';
import Tips from './tips';
import AddContact from '../contact/add-contact';
import PageHeader from '../../../common/header';
import CardDetail from '../../../common/card-detail';
class DashHome extends Component {
    state = {  }
    componentDidMount() {
      
    }
    gotoSetup() {
        window.location = '/setup'
    }
    getActIconBgcolor(title) {
        switch (title) {
            case 'income':
                return {bgColor: 'bg-success', icon: 'text-primary fa-tags'}
            case 'expense':
                return {bgColor: 'bg-danger', icon: 'text-primary fa-credit-card'}
            default:
                return {bgColor: 'bg-primary', icon: 'text-primary fa-eye'}
        }
    }
    
    render() { 
        const { accountDetail } = this.props
        if(!accountDetail) {
            return (
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <p><span className="fa fa-spinner fa-spin fa-3x"></span></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return ( 
                <div>
                <div className="">
                    <div>
                        <PageHeader title="Dashboard" />
                        <span className="float-right ">
                            <button data-toggle="modal" data-target="#addContact" className="btn btn-primary btn-sm mr-2"><i className="fa fa-plus-circle"></i> Add Contact</button>
                            <button  className="btn btn-success btn-sm"><i className="fa fa-plus-circle"></i> Add Invoice</button>
                        </span>
                    </div>
                    <div className="">
                       {!accountDetail.firstName && <div className="row" >
                            <div className="col-12">
                                <div className="alert alert-info text-center">
                                    Account Setup is Required <button onClick={this.gotoSetup} className="btn btn-sm btn-primary">Setup</button>
                                </div>
                            </div>
                        </div>}
                        <div className="row mt-2">
                            <CardDetail data={accountDetail.accounts} />
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-8">
                                <Graph />>
                            </div>
                            <div className="col-md-4">
                                <Tips />
                            </div>
                        </div>
                    </div>
                </div>
                <AddContact />
            </div>
    
             );
        }

    }
}
 
export default DashHome;