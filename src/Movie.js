import React from "react";
// import './Movie.css'

function Movie(props) {
  return (
    <div className="movie-container col-2">
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} className="poster"/>
      <p>{props.title}</p>
    </div>
  );
}

export default Movie;
