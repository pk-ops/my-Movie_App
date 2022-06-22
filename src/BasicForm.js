import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup"

const formValidationSchema=yup.object({
  email: yup.string().min(5,"Need ").required(),
  password: yup.string().min(8).max(12).required(),
});

export function BasicForm() {
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik({
    initialValues:{email:"prathamesh",password:"bbb"},
    validationSchema:formValidationSchema,
    onSubmit:(value)=>{
      console.log("onSubmit",value)
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <h1>Basic-form</h1>
      <input
      name='email'
      type='email'
       placeholder='Enter Email' 
       value={values.email}
       onChange={handleChange}
       onBlur={handleBlur}
       
       />
       {touched.email && errors.email?errors.email:" "}
      <input 
      name='password'
      type='password' 
      placeholder='Enter Password' 
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      
      />
      { touched.password && errors.password?errors.password:" "}
      <button type='submit'>Submit</button>
    </form>
  );

}
