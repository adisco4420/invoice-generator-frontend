import React, { Component } from 'react';
import Graph from '../../../common/graph';
import Tips from './tips';
const accounts = [
    { title: 'income', balance: 2000.00, icon: 'text-primary fa-tags' },
    { title: 'expense', balance: 5000.00, icon: 'text-success fa-credit-card' },
    { title: 'outstaning', balance: 1000.00, icon: 'text-danger fa-eye' }
]
function bgColor(title) {
    switch (title) {
        case 'income':
            return 'bg-success'
        case 'expense':
            return 'bg-danger'
        default:
            return 'bg-primary'
    }
}
class DashHome extends Component {
    state = {  }
    componentDidMount() {
      
    }
    
    render() { 
        const { accountDetail } = this.props
        if(!accountDetail) {
            return (
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <p>no data</p>
                            {/* <span className="fa fa-spinner fa-spin fa-3x"></span> */}
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
                        <div className="row mt-2">
                            {
                                accounts.map((item, index) => {
                                    return <div key={index} className="col-md-4">
                                        <div className="card" style={{ minHeight: '140px' }}>
                                            <div className="card-body mt-3">
                                                <h5>{item.balance}</h5>
                                                <button style={{ padding: '0px 5px' }} className={`btn btn-sm text-light text-lowercase ${bgColor(item.title)}`}>
                                                    {`${item.title} - usd`}
                                                </button>
                                                <div className="float-right"><i className={`fa ${item.icon} fa-2x`}></i></div>
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