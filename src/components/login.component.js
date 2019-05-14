import React, { Component } from "react";
import FooterPage from "./footer.component.js";
import { login } from "./UserFunctions";
import LoadingSpinner from './loadingspinner.component.js';

const emailRegex = RegExp(/^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            loading: false,
            formErrors: {
                email: "",
                password: ""
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const { name, value } = e.target;
        // console.log("name :", name);
        // console.log("value :", value);
        this.setState({ [e.target.name]: e.target.value });
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : "Invalid Email Address";
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 character required' : "";
                break;
            default: break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    onSubmit(e) {
        if (formValid(this.state.formErrors)) {
            this.setState({
                loading: true,
            })
            e.preventDefault();
            const user = {
                email: this.state.email,
                password: this.state.password
            };

            login(user).then(res => {
                if (res) {
                    this.props.history.push("/profile");
                }
            });
        }
        else {
            e.preventDefault();
            console.error('FORM ERROR - DISPLAY ERROR MESSAGE');
        }
    }

    render() {
        const { loading } = this.state;
        const { formErrors } = this.state;
        return (
            <div>
                <h2 className="bg-2 about-title">Login</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-sm-3 col-md-6">
                            <div className="well well-sm">
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <span className="glyphicon glyphicon-envelope" />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className={formErrors.email.length > 0 ? 'error form-control' : 'form-control'}
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter email"
                                                        required="required"
                                                        value={this.state.email}
                                                        onChange={this.onChange}
                                                    />
                                                    {formErrors.email.length > 0 && (
                                                        <span className="errorMessage">{formErrors.email}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <span className="glyphicon glyphicon-envelope" />
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className={formErrors.password.length > 0 ? 'error form-control' : 'form-control'}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter password"
                                                        required="required"
                                                        value={this.state.password}
                                                        onChange={this.onChange}
                                                    />
                                                    {formErrors.password.length > 0 && (
                                                        <span className="errorMessage">{formErrors.password}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                className="btn btn-primary pull-right"
                                                id="btnContactUs"
                                            >
                                                {loading ? <LoadingSpinner /> : "Login"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterPage />
            </div>
        );
    }
}