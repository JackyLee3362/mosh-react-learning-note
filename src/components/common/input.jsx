import React, { Component } from "react";

const Input = (props) => {
  // const { name, label, value, error, type, onChange } = props;
  const { name, label, error, ...rest } = props; // 下面input中有value={value}这样的语句
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
