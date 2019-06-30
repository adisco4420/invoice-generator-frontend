import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import env from '../../../env'
import './SignUp.css';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";
import { brandLogo } from '../../../utils';

const TextInput = ({ handler, touched, hasError, meta }) => (
    <div className={`${meta.inputClass || "col-md-12"} mb-2`}>
        <input
            type={meta.type || 'text'}
            className="form-control form-control-md"
            placeholder={`Enter ${meta.label}`}
            {...handler()}
        />
        <span className="text-danger text-monospace" style={{ fontSize: "13px" }}>
            {touched && hasError("required") && `${meta.label} is required`}
            {touched && hasError("email") && `${meta.label} is invalid`}
            {touched && hasError("minLength") && `${meta.label} is invalid`}
        </span>
    </div>
);

class SignUp extends Component {
    state = {
        loading: false,
        errMsg: null,
        testing: true
    }
    storeToken(token) {
        localStorage.setItem('Invoice-Reg-Token', token)
    }

    registerUser = async () => {
        this.setState({ loading: true, errMsg: false })
        try {
            const res = await axios.post(`${env.Invoice_API}/user/register`, this.registerForm.value)
            this.storeToken(res.data.data.token)
            this.props.history.push('/setup')
            // console.log(res.data.data);
        } catch (error) {
            this.setState({ loading: false, errMsg: error.response.data.message })
            console.log(error.response);

        }
    }
    registerForm = FormBuilder.group({
        email: ["", [Validators.required, Validators.email]],
        phoneNumber: ["", [Validators.required, Validators.minLength(11)]],
        password: ["", Validators.required],
    });
    handleSubmit = e => {
        e.preventDefault()
        if (this.registerForm.valid) {
            this.registerUser();
        }
    }
    render() {
        return (
            <React.Fragment>

                <div className="container py-5">
                  <div className="row">
                  <div className="col-md-4 offset-md-4">
                        <div className="formheader bg-blued">
                            <h3> Create a new account</h3>
                            {this.state.loading && <div> <span className="fa fa-spinner fa-spin"></span></div>}
                        </div>
                        {this.state.errMsg && <div className="bg-danger text-center text-light">{this.state.errMsg}</div>}

                        <FieldGroup
                            control={this.registerForm}
                            render={({ get, invalid, submitted, pending }) => (
                                <form onSubmit={this.handleSubmit} className="formlayout">
                                    <div className="row">
                                        <React.Fragment>
                                            {pending && <i className="fa fa-spinner fa-spin" />}
                                        </React.Fragment>
                                        <div className="col-md-12">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <FieldControl
                                            name="email"
                                            render={TextInput}
                                            meta={{ label: "Email Address", type: 'email' }}
                                        />

                                        <FieldControl
                                            name="phoneNumber"
                                            render={TextInput}
                                            meta={{ label: "Phone Number", type: 'number' }}
                                        />

                                        <FieldControl
                                            name="password"
                                            render={TextInput}
                                            meta={{ label: "Password", type: 'password' }}
                                        />
                                    </div>
                                    <button disabled={invalid} style={invalid ? { opacity: '0.8' } : { opacity: '1' }} 
                                    type="submit" className="btn btn-block mt-3 bg-blued">
                                        Register
                                    </button>
                                    <div className="text-center mt-2">Already Registered? <Link to="/signin">Login</Link></div>
                                </form>
                            )}
                        />

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

export default SignUp;