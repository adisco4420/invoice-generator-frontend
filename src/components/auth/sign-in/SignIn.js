import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import env from '../../../env';
import './SignIn.css';
import { brandLogo } from '../../../utils';

class SignIn extends Component {
    storeToken(token) {
        localStorage.setItem('currentUserInvoiceNG', token)
    }
    loginUser = async () => {
        this.setState({loading: true, errMsg: false, sucMsg: false})
        try {
            const body = {email: this.state.email, password: this.state.password}
            const res = await axios.post(`${env.Invoice_API}/user/login`, body);
            this.setState({loading: false, sucMsg: true})
            this.storeToken(res.data.data.token)
        } catch (error) {
            this.setState({loading: false, errMsg: error.response.data.message})
        }
    }
    state = {
        email: null,
        password: null,
        loading: false,
        errMsg: false,
        sucMsg: false
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleSubmit= (e) => {
        e.preventDefault()
        this.loginUser();
    }
    render() {
        return (
            <React.Fragment>
                <div className="container py-5">
                    <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="formheader bg-blued">
                            <h3> Welcome Back</h3>
                            {this.state.loading && <i className="fa fa-spinner fa-spin"></i>}
                        </div>
                       
                            {this.state.errMsg && <div className="bg-danger text-center text-light">
                             {this.state.errMsg || 'error occured'}</div>}
                            {this.state.sucMsg && <div className="bg-success text-center text-light">
                            {'success login'}
                            </div>}
 
                        <form className="formlayout" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="email"  className="form-control" 
                                name="email" placeholder="Email Address" required email="true"/>
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={this.handleChange}  required 
                                className="form-control" name="password" placeholder="Password" />
                            </div>
                            <button disabled={this.state.loading} type="submit" className="btn btn-block bg-blued mt-3"> Login</button>
                            <div className="text-center mt-2">You don't have an account? <Link to="/signup">Register</Link></div>
                        </form>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <img style={brandLogo.style} alt="icon" src={brandLogo.link}/> 
                            <h3 className='text-center text-blue'>InvoiceNG</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;