// App.js
import React, { Component} from 'react';
import Root from './Root';
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter, useParams } from 'react-router-dom'
import Home from './components/Home';
import KaijuList from './pages/kaijuList';
import KaijuPage from './pages/kaijuContainer'
import Signup from './components/signup/Signup';
import Login from './components/login/Login'
import About from './components/About'
import { ToastContainer } from "react-toastify";
import axios from "axios";
import requireAuth from "./Utils/RequireAuth";
import './App.css'

axios.defaults.baseURL = "http://127.0.0.1:8000/";


class App extends Component {
  render() {
    return (
      <div>
        <Root>
        <BrowserRouter>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path='/kaijus/:id' component={KaijuPage} />
            <Route path="/kaijus" component={requireAuth(KaijuList)} />
            <Route exact path="/" component={Home} />
          </Switch>
          </BrowserRouter>
          </Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </div>
    );
  }
}

export default App
