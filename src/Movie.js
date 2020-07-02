import React from "react";

function Movie(props) {
  return (
    <div className="movie-container col-xs-6 col-sm-3 col-xl-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${props.poster}`}
        className="poster"
        alt={`${props.title} poster`}
      />
      <p>{props.title}</p>
    </div>
  );
}

export default Movie;
