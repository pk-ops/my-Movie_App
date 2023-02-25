
import React, { useState } from "react";
import "./App.css";
import { API } from "./global";
function Signup(props) {
const [mode,setMode]=useState("dark")
   const Style= {
    color: mode==='dark'?'black':'white',
    marginBottom:"0px"
   }

   const [registerInput,setRegisterInput]=useState({
        username:"",
        email:"",
        password:""
   })

   const handleInput=(e)=>{
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
   }

   const registerSubmit=(e)=>{
        e.preventDefault();

        const data={
            username:registerInput.username,
            email:registerInput.email,
            password:registerInput.password
        }
        // console.log(data)
        fetch(`${API}/users/signup`,{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        }).then((res)=>{
            if(res.status=='200'){
                alert("registration Completed")
            }
        })
        // .then((dda)=>{ alert("Registration Successful")
        // })

   }

    return (

        <div className="auth">
            <div className="auth-container">
                <div className="sign-up">
                   
                    <div className="sign-container form">
                    <h1 style={Style}>User's Registration</h1>
                        <form onSubmit={registerSubmit}>
                        <div className="input-field">
                            <p style={Style}>UserName</p>
                            <input 
                                name="username"
                                type="text"
                                onChange={handleInput}
                                value={registerInput.username}
                               
                            />
                        </div>


                        <div className="input-field">
                            <p style={Style}>Email</p>
                            <input 
                                name="email"
                                type="text"
                                onChange={handleInput}
                                value={registerInput.email} 
                            />
                        </div>

                        <div className="input-field">
                            <p style={Style}>Password </p>
                            <input 
                                name="password"
                                type="password"
                                onChange={handleInput}
                                value={registerInput.password} 
                                
                            />
                        </div>

                        <button
                            style={{
                                marginTop: "20px",
                                width:"100px",
                                backgroundColor:"blue"
                            }}
                            className="btn signup_button btn-primary"
                        >Register
                        </button>
                        </form>
                      
                        
                     
                       
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Signup;
