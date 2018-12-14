import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import Typed from "typed.js";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {this.renderTitle()}
          {this.renderErrors()}
          <h1 className="login-title">
            Enter a <b>username</b> and <b>password</b>
          </h1>
          <input
            placeholder="Username"
            className="session-input session-username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />

          <input
            className="session-input session-password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
          />

          <input type="submit" value={text} className="session-button" />
      
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
