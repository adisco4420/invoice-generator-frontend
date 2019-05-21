import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from './components/auth/sign-up/SignUp';
import SignIn from './components/auth/sign-in/SignIn';
import Setup from './components/auth/setup/Setup';
import LandingPage from './components/landingPage/LandingPage';



class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/setup' component={Setup} />
             
            </div>


          </BrowserRouter>
     
    );
  }
}



export default App;
