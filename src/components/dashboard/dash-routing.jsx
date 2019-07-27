import React from 'react';
import { Route } from 'react-router-dom';
import DashboardLanding from './landing/DashboardLanding';

const DashRoute = ({match}) => {
    return ( <React.Fragment>
            <Route  path={match.path} component={DashboardLanding} />
    </React.Fragment> );
}
 
export default DashRoute;