import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function EditMovie() {
  const { id } = useParams();
  console.log(id);

const[movie,setMovie]=useState(null);

const getMovies=()=>{
  fetch(`https://62a97087ec36bf40bdb787e6.mockapi.io/movies/${id}`,{
    method:"GET"
  })
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv));
};
useEffect(()=>getMovies(),[]);

  
  return (
  movie ? <EditMovieForm movie={movie} /> : "loading.."  );
}


function EditMovieForm({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer:trailer,
    };
    // setMovieList([...movieList, newMovie]);
    // 
    //Post ---for Adding movie 
    //1.Method-post
    //2.Body--passing data & type should be JSON
    //3.Headers---Json(we are passing data)
    
    fetch(`https://62a97087ec36bf40bdb787e6.mockapi.io/movies/${movie.id}`, 
    {
    method: "PUT",
    body: JSON.stringify(newMovie),
    headers: {"Content-Type": "application/json",
    },
  }).then(() =>navigate("/movies"));
     console.log(newMovie);

  };
  return(
    <div className='add-movie-form'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name" variant="standard" />

      <TextField
      value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster" variant="standard" />

      <TextField
      value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating" variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summmary" variant="standard" />

      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer" variant="standard" />

      <Button onClick={addMovie}
       variant="outlined" color="success">Save</Button>
    </div>



  )
}
