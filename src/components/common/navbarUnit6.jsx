import React, { Component } from "react";
// 6.x
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Products from "../products";
import ProductDetails from "../productDetail";
import Posts from "../post";
import NotFound from "../notFound";
import Dashboard from "../admin/dashboard";
import Users from "../admin/users"; // 6.13
import Postsadmin from "../admin/posts"; // 6.13
const NavBarUnit6 = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/admin">admin</Link>
        </li>
        <li>
          <Link to="/posts/2018/06">Posts</Link>
        </li>
        <li>
          <Link to="/products/:id">product:id</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products sortBy="newest" />}></Route>
        <Route path="/posts/:year/:month" element={<Posts />}></Route>
        <Route path="/admin" element={<Dashboard sortBy="newest" />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="posts" element={<Postsadmin />}></Route>
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/redirect" element={<Navigate to="/" replace />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </React.Fragment>
  );
};
const Home = (props) => {
  return (
    <p>
      {}
      hello, I am Home router, this is link to
      <Link to="/products"> products</Link>
    </p>
  );
};

export default NavBarUnit6;
