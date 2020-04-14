import React from "react";
import "./App.css";
import LogIn from "./LogIn"
import LogIn1 from "./LogIn1"
import 'bootstrap/dist/css/bootstrap.css' ;
import logo from './mainpic.png'
import Chat from './Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="space"></div>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/login1">
            <LogIn1 />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login(){
  return(
    <div>
      <LogIn />
    </div>
  );

}

function Login1(){
  return(
    <div>
      <LogIn1 />
    </div>
  );

}



function Navbar(){
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <button type="button" className="navbar-toggler text-cente" data-toggle="collapse" data-target="#collapse_target">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav">
          <li className ="nav-item">
            <a className="nav-link" href="/LogIn">Log In</a>
          </li>
          <li className ="nav-item">
            <a className="nav-link" href="/Home">Home</a>
          </li>
          <li className ="nav-item">
            <a className="nav-link" href="/LogIn" >Log Out</a>
          </li>



        </ul>
      </div>
    </nav>
  );

}

function Home(App) {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <LogIn1 />
  </div>
  );
}



function UserProfile(Username){
  return(
    <div className="container">
      <h2 className="text-center">Welcome Back {Username.name} !</h2>
    </div>
  );
}
