import React, { Component } from "react";

// 4.13 Stateless Functional Component
const NavBar = (props) => {
  //4.12 snippets:sfc,注意需要传入参数props
  // 4.13 析构函数，传入的(props)也可以写为({ totalCounts })，这样下面就不用写props.了
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary m-3">
            {props.totalCounts}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
