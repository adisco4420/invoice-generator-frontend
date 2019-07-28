import React, { Component } from 'react';
import { BrowserRouter, Switch, Route , Redirect} from 'react-router-dom';


import './App.css'
import BasicRoute from './components/core/basic-route';
import DashRoute from './components/dashboard/dash-routing';
import ProtectedRoute from './services/protected-route';



class App extends Component {
 render() {
    return (

          <BrowserRouter>
            <Switch>
            <ProtectedRoute path="/dashboard" component={DashRoute} />
            {/* <Route  path="/dashboard" render={(props) => <DashRoute {...props} />} /> */}
            <Route  path="/" render={(props) => <BasicRoute {...props} />} />
            <Redirect  from="/" exact to="/" />
            <Redirect  to="/not-found" />
            </Switch>
          </BrowserRouter>
     
    );
  }
}



export default App;
