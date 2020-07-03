import React from "react";
import "./App.css";

function PosterMovie(props) {
  return (
    <div className="col-xs-6 col-sm-3 col-xl-2">
      <div className="movie-container" onClick={() => props.handleClick(props.movieId)}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          className="poster"
          alt={`${props.title} poster`}
        />
        <span>{props.rating}</span>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default PosterMovie;
