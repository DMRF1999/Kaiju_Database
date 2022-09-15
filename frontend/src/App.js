// App.js
import React, { Component} from 'react';
import Root from './Root';
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/Home';
import KaijuList from './pages/kaijuList';
import KaijuView from './pages/kaijuView'
import Signup from './components/signup/Signup';
import Login from './components/login/Login'
import { ToastContainer } from "react-toastify";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";



class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/kaijus" component={KaijuList} />
            <Route exact path="/" component={Home} />
            <Route path='/kaijus/:id' component={KaijuView} />
          </Switch>
        </Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </div>
    );
  }
}

export default App
