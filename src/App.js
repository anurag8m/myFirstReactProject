import React, { Component } from "react";
import $ from "jquery";
import Popper from "popper.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./components/home.component.js";
import AboutPage from "./components/about.component.js";
import ContactPage from "./components/contact.component.js";
import LoginPage from "./components/login.component.js";
import RegisterPage from "./components/register.component.js";
import ProfilePage from "./components/profile.component.js";
import Header from "./components/header.component.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </Router>
    );
  }
}

export default App;