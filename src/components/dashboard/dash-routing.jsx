import React from 'react';
import { Route } from 'react-router-dom';
import DashboardLanding from './landing/DashboardLanding';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashRoute = ({match}) => {
    return ( <React.Fragment>
        <ToastContainer />
            <Route  path={match.path} component={DashboardLanding} />
    </React.Fragment> );
}
 
export default DashRoute;