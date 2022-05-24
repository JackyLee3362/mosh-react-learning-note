import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  // 7.13 还是老语法
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  // username = React.createRef();
  componentDidMount() {
    // this.username.current.focus(); // 打开页面后光标所在的位置（输入域获得了焦点）
  }
  doSubmit = () => {
    console.log("submitted.");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} action="">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
