import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Movies from "./Movies.js";
import MovieDetails from "./MovieDetails.js";

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
        <Route
          path="/top"
          exact
          render={(props) => <Movies {...props} apiMethod="top_rated" />}
        />
        <Route
          path="/popular"
          exact
          render={(props) => <Movies {...props} apiMethod="popular" />}
        />
        <Route path="/movie/:movieId" exact component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}
