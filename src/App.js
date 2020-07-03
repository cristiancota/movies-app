import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Movies from "./Movies.js"; // TODO merge Movie and PopularMovies to a single component
import PopularMovies from "./PopularMovies.js";
import Movie from "./Movie.js";

export default function App() {
  return (
    <BrowserRouter>
      {/* TODO create nav component */}
      <div>
        <ul>
          <li>
            <Link to="/top">Top</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/top" exact component={Movies} />
        <Route path="/popular" exact component={PopularMovies} />
        <Route path="/movie/:movieId" exact component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
