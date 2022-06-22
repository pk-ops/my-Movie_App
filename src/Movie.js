import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Counters} from "./Counter";
import {Delete} from "./Delete";



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export function Movie({ movie,id,deleteButton,editButton }) {
  const Style = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  const paraStyle = {
    display: show ? "block" : "none"
  };
  const navigate = useNavigate();
  return (
   <Card className="movie-container" style={{height:"min-content"}}>
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} 
        <IconButton
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
      </CardContent>
      
     <CardActions>
     <Counters />
     
     {deleteButton}
     {editButton}
     </CardActions>

   </Card>
  );
}


