import React, { Component } from "react";
import FooterPage from "./footer.component.js";
import jwt_decode from "jwt-decode";

export default class ProfilePage extends Component {
    constructor() {
        super();

        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        };
    }
    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        });
    }
    render() {
        return (
            <div>
                <h2 className="bg-2 about-title">Profile</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-sm-2 col-md-8">
                            <div className="well well-sm">
                                <table className="table col-md-6 mx-auto">
                                    <tbody>
                                        <tr>
                                            <td>First name</td>
                                            <td>{this.state.first_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Last name</td>
                                            <td>{this.state.last_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{this.state.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterPage />
            </div>
        );
    }
}