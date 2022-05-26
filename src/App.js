import React, { Component } from "react";
import NavBar from "./components/common/navbar"; // 4.11
import Counters from "./components/counters"; // 4.11
import Movies from "./components/movies";
import Pagination from "./components/common/pagination";
// 6.x
import NavBarUnit6 from "./components/common/navbarUnit6";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
// 7.x
import LoginForm from "./components/loginForm";

import "./App.css";
import RegisterForm from "./components/registerForm";
import CreateMovieForm from "./components/createMovieForm";

import { ToastContainer } from "react-toastify"; // 8.23
import "react-toastify/dist/ReactToastify.css"; //8.23

import Logout from "./components/logout"; // 9.13
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <NavBarUnit6></NavBarUnit6>  去掉就是Unit6*/}
        <NavBar totalCounts="TODO" user={this.state.user} />
        <Routes>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route
            path="/movies"
            element={<Movies {...this.props} user={this.state.user} />}
          ></Route>
          {/*9.20 <ProtectedRoute path="/movies:id" component={MovieForm} /> */}
          <Route path="/movies/:id" element={<MovieForm />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/" element={<Navigate to="/movies" replace />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Movies /> */}
      </React.Fragment>
    );
  }
}

export default App;
