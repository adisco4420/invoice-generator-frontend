import React from 'react';
function DashHeader() {
    return (
        <nav className="navbar dashnav navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fa fa-align-left"></i>
                </button>
                <div className="dropdown" style={{ marginRight: '2%', cursor: 'pointer' }}>
                    <span id="dropdownMenuButton" data-toggle="dropdown">
                        <i className="fa fa-user-circle fa-2x"></i><span> Alabi Sodiq</span>
                    </span>
                    <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item" ><i className="fa fa-sign-out-alt"></i> Logout</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default DashHeader;