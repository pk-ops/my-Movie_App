import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(id);
  const movie = movieList[id];
  const Style = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%"
        height="650"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-detail-container'>
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={Style} className="movie-rating">🌟{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        {/* <button onClick={()=>navigate(-1)}></button> */}
        <Button onClick={() => navigate(-1)} variant="outlined" startIcon={<ArrowBackIosIcon/>}>Back</Button>
      </div>
    </div>
  );
}
