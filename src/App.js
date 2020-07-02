import React from "react";
import "./App.css";
import Movie from "./Movie.js";
import useFetch from "./useFetch.js";

export default function App() {
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
        <p>🍿</p>
      </div>
      <div className="container">
        <h2>Popular Movies</h2>
        <div className="row">
          {movies.response.results.map((current) => {
            return (
              <Movie
                key={current.id}
                title={current.title}
                poster={current.poster_path}
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
