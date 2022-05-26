import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveMovie, getMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { Navigate, useParams } from "react-router-dom";
class CreateMovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };
  async componentDidMount() {
    const { data } = await getGenres();
    this.setState({ genres: data });
    const movieId = this.props.id;
    if (movieId === "new") return;

    const { data: movie } = await getMovie(movieId);
    // if(!movie) return this.props.history.replace("/not-found") // 7.23 程序会死循环？

    this.setState({ data: this.mapToViewModel({ data: movie }) });
  }
  mapToViewModel({ data: movie }) {
    const genre = this.state.genres.find((g) => g._id === movie.genre._id);
    // 视图模型
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);
    console.log("doSubmit: submitted.");
    // return <Navigate to="/movies" />; // 7.23 跳转未实现
  };

  render() {
    return (
      <div>
        <h1>Movie Form {this.props.id}</h1>
        <form onSubmit={this.handleSubmit} action="">
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CreateMovieForm;
