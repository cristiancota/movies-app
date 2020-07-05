import React, { useEffect, useState } from "react";
import PosterMovie from "./PosterMovie.js";
import Pagination from "react-js-pagination";
import { useHistory } from "react-router-dom";

export default function Movies(props) {
  const currentPage = parseInt(props.match.params.pageNumber);
  const [movies, setMovies] = useState(null);
  const [activePage, setActivePage] = useState(null);
  const history = useHistory();
  const url = `https://api.themoviedb.org/3/movie/${props.apiMethod}?api_key=30462510f8221c4dff12dd51874f0158&language=en-US&page=${currentPage}`;

  function handleClick(key) {
    history.push("/movie/" + key);
  }

  useEffect(() => {
    const fetchMovie = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setMovies(result);
        });
    };
    fetchMovie();
    setActivePage(parseInt(currentPage));
  }, [url, currentPage]);

  function handlePageChange(pageNumber) {
    props.history.push(props.match.path.replace(":pageNumber", pageNumber));
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="container">
        <h2>{props.title}</h2>
        <div className="row">
          {movies.results.map((current) => {
            return (
              <PosterMovie
                key={current.id}
                movieId={current.id}
                title={current.title}
                poster={current.poster_path}
                rating={current.vote_average.toFixed(1)}
                handleClick={handleClick}
              />
            );
          })}
        </div>
        <div className="pagination-container">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={20}
            totalItemsCount={10000}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
      <div className="container-fluid container-footer">
        <p>This is footer</p>
      </div>
    </div>
  );
}
