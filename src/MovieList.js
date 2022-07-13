import { Movie } from './Movie';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import InfoIcon from '@mui/icons-material/Info';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from './global';

export function MovieList() {
    const [movieList,setMovieList]=useState([]);;
   

    const getMovies=()=>{
      fetch(`${API}/movies`)
      .then((data)=>data.json())
      .then((mvs)=>setMovieList(mvs));
    };
    useEffect(()=>getMovies(),[]);

    const deleteMovie=(id)=>{
      fetch(`${API}/movies/${id}`,{
              method:'DELETE'
            }).then(()=>getMovies())
      };

const navigate=useNavigate();
  return (
    <div>

      <div className="movie-List">
       
        {
          movieList.map((mv) =>
         (<Movie key={mv.id} movie={mv} id={mv.id} 
          
            deleteButton= {
              <IconButton
              style={{marginLeft:"auto"}}
                color="error"
                onClick={()=>deleteMovie(mv.id)}
                aria-label="Movie-details">
                <DeleteIcon/>
             </IconButton>
            }

           editButton={
            <IconButton
           
                color="primary"
                onClick={()=>
                navigate(`/movies/edit/${mv.id}`)}
                aria-label="Movie-details">
                <EditIcon/>
             </IconButton>
            } />
           ) 
            
        )}
      
      </div>
    </div>
  );
}
