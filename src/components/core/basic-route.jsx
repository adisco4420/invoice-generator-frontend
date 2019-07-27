import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../auth/sign-up/SignUp';
import SignIn from '../auth/sign-in/SignIn';
import Setup from '../auth/setup/Setup';
import LandingPage from '../landingPage/LandingPage';
import Header from './header/Header';
import Footer from './footer/Footer';
import NotFound from './not-found';

const BasicRoute = ({match}) => {
    return ( 
        <React.Fragment>
            <Header />
            <Route  path='/not-found' component={NotFound} />
            <Route  path='/signup' component={SignUp} />
            <Route  path='/signin' component={SignIn} />
            <Route  path='/setup' component={Setup} />
            <Route exact path={match.path} component={LandingPage} />
            <Footer />
        </React.Fragment>
     );
}
 
export default BasicRoute;