import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
class Form extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    const options = { abortEarly: false }; // 更美观
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    // 7.14
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    // 7.15
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required. (property)";
    //   // ...
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required. (property)";
    //   // ...
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 阻止点击按钮后重新加载

    // 尽量不要使用下面的方法，在React中最好不要操作全局DOM，最好使用Ref
    // const username = document.getElementById('username').value;
    // const username = this.username.current.value; //6.4

    // 6.9
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} }); // 7.11 如果不设置，validate的返回值是null，下面Input无法读取errors.username的值
    // console.log("setState", errors);
    if (errors) {
      console.log(errors);
      return;
    }

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
