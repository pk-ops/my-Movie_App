import { useState } from "react";
import { navigate, useNavigate } from 'react-router-dom';

export function Movie({ movie }) {
  const Style = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const paraStyle = {
    display: show ? "block" : "none"
  };

  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={Style} className="movie-rating">🌟{movie.rating}</p>
      </div>

      <button onClick={() => setShow(!show)}>Toggle Button</button>
      {/* Hook + conditional logic */}
      {/* <p  style={paraStyle} className="movie-summary">{movie.summary}</p> */}
      <button onClick={() => navigate(`/movies/${id}`)}>Info</button>

      {/* conditional Rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}

    </div>
  );
}
