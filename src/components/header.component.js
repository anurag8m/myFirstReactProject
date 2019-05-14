import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Header extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("usertoken");
        this.props.history.push("/login");
    }
    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Link to="/login">Login</Link>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Link to="/register">Register</Link>
                    </a>
                </li>
            </ul>
        );

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Link to="/profile">User</Link>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
          </a>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
        </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link">
                                <Link to="/">Home</Link>{" "}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="/about">About</Link>
                            </a>
                        </li>

                        {/* <!--<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    <Link to="/login">Login</Link>
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="/contact">Contact</Link>
                            </a>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);