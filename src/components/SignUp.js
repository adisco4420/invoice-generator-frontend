import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class SignUp extends Component{
    render(){
        return(
    <React.Fragment>

        <div className="container">
            <div className="layout">
                <div className="formheader">
                    <h3> Create a new account</h3>
                </div>

                <form className="formlayout">
  <div className="form-group">
   <input type="email" required class="form-control" name="email" placeholder="Email Address"/>
  </div>
  <div class="form-group">
   <input type="number" class="form-control" required name="phoneNumber" placeholder="Phone Number"/>
  </div>

  <div class="form-group">
   <input type="password" class="form-control" required name="password"  placeholder="Password"/>
  </div>

  <button type="submit" class="btn-lg button"> Sign Up</button>
            <div className= "login">
  <a href="#"> Already have an account? Login </a>
 </div>
</form>
                    







            </div>


        </div>









    </React.Fragment>
        );
    }
}

export default SignUp;