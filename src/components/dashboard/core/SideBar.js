import React from 'react'
import { brandLogo } from '../../../utils';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
            <Link to="/"><h4><img style={{ width: '15%' }} alt="icon" src={brandLogo.link} /> Invoice NG</h4></Link>
            </div>

            <ul className="sidebar-list">
                <li>
                    <Link to="/dashboard"><i className="fa fa-tachometer-alt mr-3"></i>  Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard"><i className="fas fa-receipt mr-3"></i>  Invoices</Link>
                </li>
                <li>
                    <Link to="/dashboard"><i className="fa fa-box mr-3"></i>  Expenses</Link>
                </li>
                <li>
                    <Link to="/dashboard"><i className="fa fa-users mr-3"></i>  Contacts</Link>
                </li>
                <li>
                    <Link to="/dashboard"><i className="fa  fa-cog mr-3"></i>  Settings</Link>
                </li>
            </ul>

        </nav>

    )
}
export default SideBar