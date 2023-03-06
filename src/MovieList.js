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
import CommonContext from './context/commonContext';
import { useContext } from 'react';

export function MovieList() {
    const [movieList,setMovieList]=useState([]);
    const {isLoggedIn}=useContext(CommonContext); 

    const getMovies=()=>{
      if(!isLoggedIn){
      navigate("/login");
      }
      else{
        try{
          fetch(`${API}/movies`,{
            headers:{ "x-auth-token" : localStorage.getItem('x-auth-token')}
          })
        .then((data)=>data.json())
        .then((mvs)=>setMovieList(mvs));
        // 
  
        }catch(err){
          console.error(err)
        }
      }
    
      
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
         (<Movie key={mv._id} movie={mv} id={mv._id} 
          
            deleteButton= {
              <IconButton
              style={{marginLeft:"auto"}}
                color="error"
                onClick={()=>deleteMovie(mv._id)}
                aria-label="Movie-details">
                <DeleteIcon/>
             </IconButton>
            }

           editButton={
            <IconButton
           
                color="primary"
                onClick={()=>
                navigate(`/movies/edit/${mv._id}`)}
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
