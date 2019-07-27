import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './landingPage.css';
import { Link } from 'react-router-dom'
const centerImgLink = 'https://www.intelledox.com/wp-content/uploads/2018/04/Thre-young-people-using-laptop-in-office-Large.jpg';

class LandingPage extends React.Component {

    render() {
        return (
            <React.Fragment>            
                <div className="body-great py-5 middle-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-5">
                            <div className="text-top">
                                <h1>Get paid faster and <br /> improve cash flow</h1>
                            </div>
                            <div className="mt-5">
                                <h4 className="text-muted">Professional Online Invoicing &amp;  Billing Software
                                    for Small Business Owners &amp; Freelancers</h4>
                            </div>
                            <div className="mt-5">
                                <Link to="/signup" className="btn bg-blue">Send Invoice Now</Link>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img className="img-thumbnail" width="100%" src={centerImgLink} alt="imagewithpeople" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="bg-blued">
                    <div className="container">
                        <div className="row text-center py-4">
                            <div className="col-md-4">
                            <i className="fa fa-clock fa-3x"></i>
                                <h5>Save more time</h5>
                                <p>Make getting paid a breeze. Our solution helps
                                    you save time on chasing payments and helps
                                   you get paid faster.</p>
                            </div>
                            <div className="col-md-4">
                            <i className="fa  fa-history fa-3x"></i>
                                <h5>Get more productive</h5>
                                <p>Set up automatic payment reminders to gently remind 
                                    clients when a payment is coming up, due, or late.</p>
                            </div>
                            <div className="col-md-4">
                            <i className="fa  fa-th-large fa-3x"></i>
                                <h5>Grow your revenue</h5>
                                <p>Easily grow your revenue. With Invoice, staying on 
                                    top of your business financing has never been easier.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );
    }
}


export default LandingPage;