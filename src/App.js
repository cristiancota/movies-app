import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie.js";

class App extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=30462510f8221c4dff12dd51874f0158&language=en-US&page=1"
    ).then(async (response) => {
      const movies = await response.json();
      this.setState({ movies: movies.results });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.movies.map((current) => {
            return <Movie key={current.id } title={current.title} poster={current.poster_path} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
