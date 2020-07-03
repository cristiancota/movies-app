import React from "react";
import PosterMovie from "./PosterMovie.js";
import useFetch from "./useFetch.js";

export default function Movies(props) {
  function handleClick(key) {
    props.history.push("movie/" + key);
  }

  const movies = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=30462510f8221c4dff12dd51874f0158&language=en-US&page=1",
    {}
  );

  if (!movies.response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="container-fluid container-header">
        <h1>Movies App</h1>
        <span role="img" aria-label="popcorn">
          🍿
        </span>
      </div>
      <div className="container">
        <h2>Top Rated Movies</h2>
        <div className="row">
          {movies.response.results.map((current) => {
            return (
              <PosterMovie
                key={current.id}
                movieId={current.id}
                title={current.title}
                poster={current.poster_path}
                rating={current.vote_average}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
      <div className="container-fluid container-footer">
        <p>This is footer</p>
      </div>
    </div>
  );
}
