import React, { Component } from 'react';
import Graph from '../../../common/graph';
import Tips from './tips';
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
                            {/* <p>no data</p> */}
                            <p><span className="fa fa-spinner fa-spin fa-3x"></span></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return ( 
                <div>
                <div className="px-4">
                    <div>
                        <span className="ml-3" style={{ fontSize: '25px' }}>Dashboard</span>
                        <span className="float-right mr-4">
                            <button className="btn btn-primary btn-sm mr-2"><i className="fa fa-plus-circle"></i> Add Contact</button>
                            <button className="btn btn-success btn-sm"><i className="fa fa-plus-circle"></i> Add Invoice</button>
                        </span>
                    </div>
                    <div className="container">
                       {!accountDetail.firstName && <div className="row" >
                            <div className="col-12">
                                <div className="alert alert-info text-center">
                                    Account Setup is Required <button onClick={this.gotoSetup} className="btn btn-sm btn-primary">Setup</button>
                                </div>
                            </div>
                        </div>}
                        <div className="row mt-2">
                            {
                                accountDetail.accounts.map((item, index) => {
                                    return <div key={index} className="col-md-4">
                                        <div className="card" style={{ minHeight: '140px' }}>
                                            <div className="card-body mt-3">
                                                <h5>{item.balance + '.00'}</h5>
                                                <button style={{ padding: '0px 5px' }} className={`btn btn-sm text-light text-lowercase ${this.getActIconBgcolor(item.title).bgColor}`}>
                                                    {`${item.title} - usd`}
                                                </button>
                                                <div className="float-right"><i className={`fa ${this.getActIconBgcolor(item.title).icon} fa-2x`}></i></div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
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
            </div>
    
             );
        }

    }
}
 
export default DashHome;