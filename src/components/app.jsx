import React, { Component } from "react";
import NavBar from "./common/navbar"; // 4.11
import Counters from "./counters"; // 4.11
import Movies from "./movie";
import Pagination from "./common/pagination";
import { getGenres } from "../services/fakeGenreService";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Movies />
      </React.Fragment>
    );
  }
}

export default App;
