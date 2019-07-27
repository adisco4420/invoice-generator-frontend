import React from 'react';
import { Chart } from "react-charts";
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

function DashHome() {
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
                            <div className="card">
                                <div
                                    style={{
                                        width: "100%",
                                        height: "500px"
                                    }}
                                >
                                    <Chart
                                        data={[
                                            {
                                                label: "Series 1",
                                                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                                            },
                                            {
                                                label: "Series 2",
                                                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                                            }
                                        ]}
                                        series={{ type: 'bar' }}
                                        axes={[
                                            { primary: true, type: "linear", position: "bottom" },
                                            { type: "linear", position: "left" }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>NGN 0.00</h5>
                                            <p>This Month Revenue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                                        <b>Get Started</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                                        <b>Tips &amp; Guide</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                    <img src="https://www.zoho.com/invoice/self-employed/send-estimates.svg" alt="send invoice"/>
                                                    <button className="btn btn-primary btn-md"> Send Invoice</button>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="row mt-4">
                                                    <div className="col-md-12">
                                                        <h6>To get the best of your business financial activities, 
                                                            below are the three (3) common tasks you need to perform to get started:</h6>
                                                        <ul>
                                                            <li>Set-up your business profile.</li>
                                                            <li>Add a Client or Customer.</li>
                                                            <li>Create &amp; Send your first invoice.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashHome;