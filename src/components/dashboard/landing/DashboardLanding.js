import React from 'react';
import './dshlanding.css';
import SideBar from '../core/SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import DashHeader from '../core/DashHeader';
import DashHome from '../dashHome/DashHome';
import http from '../../../services/http';
import env from '../../../env'
import Contact from '../contact/contact';
import ViewContact from '../contact/view-contact';
class DashboardLanding extends React.Component {
    state = {
        accountDetail: null
    }
    componentDidMount() {
        this.getProfile()
    }
  async getProfile() {
        try {
            const { data } = await http.get(`${env.Invoice_API}/user/profile`);
            this.setState({accountDetail: data.data})
        } catch (error) {
            console.log(error);
            
        }
    }
    render() {
        const { accountDetail } = this.state;
        return(
            <div className="wrapper">
            <SideBar />
            <div id="content">
            <DashHeader accountDetail={accountDetail} />
            <BrowserRouter>
            <div>
            <Route exact path='/dashboard/contact' render={(props) => <Contact {...props} />} />  
            <Route exact path='/dashboard/contact/:id' render={(props) => <ViewContact {...props} />} />            
            <Route exact path='/dashboard' render={(props) => <DashHome {...props} accountDetail={accountDetail}/>} />
            </div>
          </BrowserRouter>
          </div>
        </div>
        )
    }
}
export default DashboardLanding;