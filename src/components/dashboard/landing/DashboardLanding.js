import React from 'react';
import './dshlanding.css';
import SideBar from '../core/SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import DashHeader from '../core/DashHeader';
import DashHome from '../dashHome/DashHome';

class DashboardLanding extends React.Component {
    componentDidMount() {

    }
    render() {
        return(
            <div className="wrapper">
            <SideBar />
            <div id="content">
            <DashHeader />
            <BrowserRouter>
            <div>
            <Route exact path='/dashboard' component={DashHome} />
            </div>
          </BrowserRouter>
          </div>
        </div>
        )
    }
}
export default DashboardLanding;