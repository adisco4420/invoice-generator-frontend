import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from './components/auth/sign-up/SignUp';
import SignIn from './components/auth/sign-in/SignIn';
import Setup from './components/auth/setup/Setup';
import LandingPage from './components/landingPage/LandingPage';
import Header from './components/core/header/Header';
import './App.css'
import Footer from './components/core/footer/Footer';
import DashboardLanding from './components/dashboard/landing/DashboardLanding';


class App extends Component {
  state = {
    route: null
  }
  componentWillMount() {
    const route = window.location.pathname;
    this.setState({route})
  }

  showHeader(route) {
    if (route === '/' || route === '/signup' || route === '/signin' ||route === '/setup') {
      return true
    } else {
      return false
    }
  }
  render() {
    return (

          <BrowserRouter>
            <div>
            {this.showHeader(this.state.route) && <Header />}
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/setup' component={Setup} />
            <Route exact path='/dashboard' component={DashboardLanding} />
            {this.showHeader(this.state.route) && <Footer />} 
            </div>


          </BrowserRouter>
     
    );
  }
}



export default App;
