import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreateMovieForm from "./createMovieForm";
import { getMovie } from "../services/fakeMovieService";
const MovieForm = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      {/* <h1> Movie Form {params.id}</h1> */}
      <CreateMovieForm id={id} />
    </React.Fragment>
  );
};

export default MovieForm;
