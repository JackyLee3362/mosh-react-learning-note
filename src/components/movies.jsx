import React, { Component } from "react";
import { getMovies, deleteMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../util/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash"; // 5.17
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./searchBox";

import { toast } from "react-toastify"; // 8.25

class Movies extends Component {
  state = {
    movies: [], // 5.9 确保movies和genres不是未定义的，防止运行时错误
    genres: [], // 5.9 先空列表，在componentDidMount后再从服务器申请数据
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  async populateGenres() {
    const { data } = await getGenres(); // 8.24
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    this.setState({ genres });
  }
  async populateMovies() {
    // 5.9
    try {
      const { data: movies } = await getMovies(); // 8.25
      this.setState({ movies });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("404"); // 8.28 没有实现返回的功能
    }
  }
  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovies();
  }
  handleDelete = async (movie) => {
    // 乐观更新
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");
      this.setState({ movies: originalMovies });
    }
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genres) => {
    this.setState({ selectedGenre: genres, searchQuery: "", currentPage: 1 });
  };
  handleSearch = (query) => {
    // 7.25
    // 7.25 What's the difference between "" and null.
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageDate = () => {
    // 5.25
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
      sortColumn, // 5.18 传递这个参数到MoviesTable中的含义在于，我们不想用户在其他页面返回时，原先选择的排序消失了
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(
        (movie) => movie.genre._id === selectedGenre._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize); // 5.6
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn, // 5.18 传递这个参数到MoviesTable中的含义在于，我们不想用户在其他页面返回时，原先选择的排序消失了
      searchQuery,
    } = this.state;
    const { user } = this.props;

    // if (count === 0) return <p>There are no movies in the database.</p>;
    const { totalCount, data: movies } = this.getPageDate();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <Link to="/movies/new">
              {user && (
                <button
                  className="btn btn-primary"
                  style={{ marginBottom: 20 }}
                >
                  New Movie
                </button>
              )}
            </Link>
            <p>Showing {totalCount} movies int the database</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
