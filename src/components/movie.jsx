import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../util/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash"; // 5.17

class Movies extends Component {
  state = {
    movies: [], // 5.9 确保movies和genres不是未定义的，防止运行时错误
    genres: [], // 5.9 先空列表，在componentDidMount后再从服务器申请数据
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    // 5.9
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
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
    this.setState({ selectedGenre: genres, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageDate = () => {
    // 5.25
    const {
      pageSize,
      currentPage,
      movies: allmovies,
      selectedGenre,
      sortColumn, // 5.18 传递这个参数到MoviesTable中的含义在于，我们不想用户在其他页面返回时，原先选择的排序消失了
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allmovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allmovies;

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
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const { totalCount, data: movies } = this.getPageDate();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies int the database</p>
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
    );
  }
}

export default Movies;
