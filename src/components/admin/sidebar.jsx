import React, { Component } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  // 6.13
  return (
    <ul>
      <li>
        <Link to="/admin/posts">posts</Link>
      </li>
      <li>
        <Link to="/admin/users">users</Link>
      </li>
    </ul>
  );
};

export default SideBar;
