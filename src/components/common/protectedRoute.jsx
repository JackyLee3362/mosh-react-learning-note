import React, { Component } from "react";
import auth from "../../services/authService";
import { Route, Navigate } from "react-router-dom";
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  // 9.20 封装保护路由
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()) return <Navigate to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    ></Route>
  );
};

export default ProtectedRoute;

// 9.19 TODO 保护路由
//   render={(props) => {
//     if (!this.state.user) return <Navigate to="/login" />;
//     return <MovieForm {...props} />;
//   }}
