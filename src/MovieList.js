import { Movie } from './Movie';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';

export function MovieList() {
    const [movieList,setMovieList]=useState([]);;
   

    const getMovies=()=>{
      fetch("https://62a97087ec36bf40bdb787e6.mockapi.io/movies")
      .then((data)=>data.json())
      .then((mvs)=>setMovieList(mvs));
    };
    useEffect(()=>getMovies(),[]);

    const deleteMovie=(id)=>{
      fetch(`https://62a97087ec36bf40bdb787e6.mockapi.io/movies/${id}`,{
              method:'DELETE'
            }).then(()=>getMovies())
      };
  return (
    <div>

      <div className="movie-List">
        {movieList.map((mv) =>
         (<Movie key={mv.id} movie={mv} id={mv.id} 
          deleteButton={<Button variant="outlined" onClick={()=>deleteMovie(mv.id)}>delete</Button>} />)  
        )}
      
      </div>
    </div>
  );
}
