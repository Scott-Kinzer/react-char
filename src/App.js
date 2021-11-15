import React, { Component } from 'react';
import { Auth } from './components/pages/Auth/Auth';
import "./App.css";
import { Provider } from 'react-redux'
import {store} from './redux/store'
import { LoginFormContainer } from './components/LoginForm/LoginFormContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

class App extends Component {
  render () {
    return (

      <Provider store={store}>   
               
         <BrowserRouter>
                <Auth></Auth>
          </BrowserRouter>,
      </Provider>

     );
  }
}

export default App;
