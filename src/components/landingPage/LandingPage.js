import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './landingPage.css';
import image2 from './assets/image2.jpg';
import { Link } from 'react-router-dom'
const centerImgLink = 'https://www.intelledox.com/wp-content/uploads/2018/04/Thre-young-people-using-laptop-in-office-Large.jpg';

class LandingPage extends React.Component {

    render() {
        return (
            <div className="body-great py-5 middle-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5 ">
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
        );
    }
}


export default LandingPage;