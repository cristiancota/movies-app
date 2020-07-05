import React, { useEffect, useState } from "react";

function MovieDetails(props) {
  const url = `https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=30462510f8221c4dff12dd51874f0158&language=en-US&page=1`;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setMovie(result);
        });
    };
    fetchMovie();
  }, [url]);

  if (!movie) return null;

  return (
    <div className="movie-details-container container">
      <div className="movie-details">
        <div className="row">
          <div className="col-2 offset-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid"
              alt={`${movie.title} poster`}
            />
          </div>
          <div className="col-6">
            <h3>{movie.title}</h3>
            <p>
              <strong>Overview:</strong>
            </p>
            <p>{movie.overview}</p>
            <p>
              <strong>Release Date:</strong>
            </p>
            <p>{movie.release_date}</p>
            <p>
              <strong>Vote Average:</strong>
            </p>
            <p>{movie.vote_average}</p>
            <p>
              <strong>{movie.genres.length > 1 ? 'Genres' : 'Genre'}:</strong>
            </p>
            <ul>
              {movie.genres.map((genre) => {
                return <li>{genre.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
