import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const imgLink = 'https://cdn0.iconfinder.com/data/icons/e-commerce-and-shopping-2/512/contract_document_agreement_paper_sign_list_signature_treaty_business_securities_certificate_text_page_term_pact_sheet_flat_design_icon-512.png';

function Header() {
    return (
        <React.Fragment>
            <div className="top-nav"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-great">
                <Link to="/" className="navbar-brand" >
                <img alt="icon" className="icon" src={imgLink}/> <span className="title">Invoice</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mr-3">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Features <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Blog</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="signin" className="nav-link">Sign In</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/signup" className=" btn btn-primary sign-up-btn" >Sign Up Free</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </React.Fragment>
    )
}
export default Header;