import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from "./global";

const movieValidationSchema=yup.object({
  name: yup.string().required(),
  poster:yup.string().required().min(5,'Need a bigger Poster'),
  rating: yup.
  number()
  .required()
  .min(1,'Need a better rating')
  .max(10,'Too much rating'),
  summary: yup.string().required().min(20,'Need a bigger Summmary'),
  trailer:yup.string().required(),
})

export function AddMovie() {
  
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");


  const navigate = useNavigate();
  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer:trailer,
    // };
    // setMovieList([...movieList, newMovie]);
    // 
    //Post ---for Adding movie 
    //1.Method-post
    //2.Body--passing data & type should be JSON
    //3.Headers---Json(we are passing data)
    
    fetch(`${API}/movies`, 
    {method: "POST",
    body: JSON.stringify(newMovie),
    headers: {"Content-Type": "application/json",
  },}).then(() => navigate('/movies'));
  console.log(newMovie);
  };
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
  useFormik({
    initialValues:{
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer:"",
    },
    validationSchema:movieValidationSchema,
    onSubmit:(newMovie)=>{
      console.log("onSubmit",newMovie)
      addMovie(newMovie)
    }
  }) 
  return (
      <form onSubmit={handleSubmit} className='add-movie-form'>
        <TextField
        label="Name" 
        variant="standard" 
        name='name' 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name?errors.name:" "}
        />
    
        <TextField
          label="Poster" 
          variant="standard"
          name='poster' 
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster?errors.poster:" "}
           />

        <TextField
          label="Rating" 
          variant="standard"
          name='rating' 
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating?errors.rating:" "}
           />

        <TextField
          label="Summmary" 
          variant="standard"
          name='summary' 
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary?errors.summary:" "}
           />

        <TextField
          label="Trailer" 
          variant="standard" 
          name='trailer' 
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer?errors.trailer:" "}
           />

       
       
     <Button type="submit" variant="outlined">Add Movie</Button>
      </form>

  
  );
}
