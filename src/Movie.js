import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from "./Counter";

export function Movie({ movie,id }) {
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
        <h2 className="movie-name">{movie.name} <IconButton
           color="primary"
           onClick={() => setShow(!show)}
           aria-label="Movie-details">
          {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
      <IconButton
           color="primary"
           onClick={() => navigate(`/movies/${id}`)}
           aria-label="Movie-details">
          <InfoIcon/>
       </IconButton>
      </h2>
       
        <p style={Style} className="movie-rating">🌟{movie.rating}</p>
      </div>
    
    
      
      
      

     {/* Hook + conditional logic */}
      {/* <p  style={paraStyle} className="movie-summary">{movie.summary}</p> */}
      {/* conditional Rendering */}
     
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      {/* <Counter/> */}
    </div>
  );
}


