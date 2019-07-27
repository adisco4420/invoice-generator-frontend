import React from 'react';

const Tips = () => {
    return ( 
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
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                <b>Get Started</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <b>Tips &amp; Guide</b>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <img src="https://www.zoho.com/invoice/self-employed/send-estimates.svg" alt="send invoice"/>
                            <button className="btn btn-primary btn-md"> Send Invoice</button>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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

     );
}
 
export default Tips;