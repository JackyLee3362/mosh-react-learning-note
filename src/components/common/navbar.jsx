import React, { Component } from "react";
import { Link, useNavigate, Navigate, NavLink } from "react-router-dom";

// 4.13 Stateless Functional Component
const NavBar = (props) => {
  const navigate = useNavigate();
  //4.12 snippets:sfc,注意需要传入参数props
  // 4.13 析构函数，传入的(props)也可以写为({ totalCounts })，这样下面就不用写props.了
  return (
    <React.Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Vidly{" "}
            <span className="badge badge-pill bg-secondary m-3">
              {props.totalCounts}
            </span>
          </Link>
          <span
            className="navbar-brand clickable nav-item nav-link"
            onClick={() => navigate("/movies")}
          >
            Movies
          </span>
          <span className="navbar-brand clickable nav-item nav-link">
            <Link to="/customers">Customer</Link>
          </span>
          <span className="navbar-brand clickable nav-item nav-link">
            <NavLink to="/rentals">Rentals</NavLink>
          </span>
          <span className="navbar-brand clickable nav-item nav-link">
            <NavLink to="/login">Login</NavLink>
          </span>
          <span className="navbar-brand clickable nav-item nav-link">
            <NavLink to="/register">Register</NavLink>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
