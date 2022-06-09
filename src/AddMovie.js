import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };
  return (
    <>
      <div className='add-movie-form'>
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name" variant="standard" />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster" variant="standard" />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating" variant="standard" />

        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summmary" variant="standard" />
        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>

    </>
  );
}
