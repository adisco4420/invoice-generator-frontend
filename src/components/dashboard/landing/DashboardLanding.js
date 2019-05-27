import React from 'react';
import './dshlanding.css';
import SideBar from '../core/SideBar';
import DashHeader from '../core/DashHeader';
class DashboardLanding extends React.Component {
    componentDidMount() {

    }
    render() {
        return(
            <div className="wrapper">

            <SideBar />
            <div id="content">
            <DashHeader />
                <h2>Collapsible Sidebar Using Bootstrap 4</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        )
    }
}
export default DashboardLanding;