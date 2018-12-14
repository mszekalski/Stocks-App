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
    return <div />;
  }
}

export default withRouter(SessionForm);
