import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";
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
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = () => {
    console.log("submitted.");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} action="">
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
