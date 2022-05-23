import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
