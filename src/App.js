import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Movies from "./Movies.js";
import MovieDetails from "./MovieDetails.js";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movies App
            <span role="img" aria-label="popcorn">
              🍿
            </span>
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/top/1">
                  Top
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular/1">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upcoming/1">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route
          path="/top/:pageNumber"
          render={(props) => (
            <Movies {...props} apiMethod="top_rated" title="Top Rated Movies" />
          )}
        />
        <Route
          path="/popular/:pageNumber"
          render={(props) => (
            <Movies {...props} apiMethod="popular" title="Popular Movies" />
          )}
        />
        <Route
          path="/upcoming/:pageNumber"
          render={(props) => (
            <Movies {...props} apiMethod="upcoming" title="Upcoming Movies" />
          )}
        />
        <Route path="/movie/:movieId" exact component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}
