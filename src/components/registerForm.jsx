import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/userService";
import auth from "../services/authService";
class RegisterForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().required().email().label("Email"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().min(5).required().label("Password"),
  };
  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      const jwt = response.headers["x-auth-token"];
      auth.loginWithJwt(jwt);

      window.location = "/"; // 9.12
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
      console.log(ex);
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} action="">
          {this.renderInput("email", "Email")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
