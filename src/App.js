import React, { Component } from "react";
import NavBar from "./components/common/navbar"; // 4.11
import Counters from "./components/counters"; // 4.11
import Movies from "./components/movies";
import Pagination from "./components/common/pagination";
import { getGenres } from "./services/fakeGenreService";
import NavBarUnit6 from "./components/common/navbarUnit6";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";

class App extends Component {
  state = {};
  Home() {
    return <p>home</p>;
  }
  render() {
    return (
      <React.Fragment>
        {/* <NavBarUnit6></NavBarUnit6>  去掉就是Unit6*/}
        <NavBar totalCounts="TODO" />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieForm />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Movies /> */}
      </React.Fragment>
    );
  }
}

export default App;
