import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import CommonContext from './context/commonContext';
import { API } from "./global";

function Login(props) {
    
    const [mode,setMode]=useState("dark")
   const Style= {
    color: mode==='dark'?'black':'white',
    marginBottom:"5px"
   }

    const [registerInput,setRegisterInput]=useState({
        email:'',
        password: '',
    })

    const {isLoggedIn, SetIsLoggedIn } = useContext(CommonContext);

    // const [errors, setErrors] = useState();

    const navigate=useNavigate();

    const handleInput=(e)=>{
        setRegisterInput({...registerInput,[e.target.name]:e.target.value})
    }

    const registerSubmit=(e)=>{

        e.preventDefault();
        try{
            const data={
                email:registerInput.email,
                password:registerInput.password
            }
    
            fetch(`${API}/users/login`,{
                method:"POST",
                crossDomain:true,
    
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                body:JSON.stringify(data),
            }).then((res)=>res.json()).then((data)=>{
                    console.log(data)
                    // alert('Login Successful')
                    localStorage.setItem("x-auth-token",data.token)
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("username", data.username);
                    SetIsLoggedIn(true);
                    navigate("/")
       
            })
        }catch(err){
            
            console.error(err)
            // alert('Invalid Credentials')
        }
        }
        

 // if(data.status=='200'){
            
            //     alert("Login Succcesful")
            // }else{
            //     alert("Invalid credentials")
            // }

    return (
    isLoggedIn?navigate("/"):
        <div className='auth__login'>
            <div className='auth-container__login'>
                <div className='login__body'>
                    <div className='login-container form'>
                        <h1 style={Style}>User's Login</h1>
                        <form onSubmit={registerSubmit}>
                            <div className='input-fields__login'>
                                <p style={Style}>Email</p>
                                <input
                                    name='email'
                                    type="text"
                                    onChange={handleInput}
                                    value={registerInput.email}
                                    placeholder="Enter email address"
                                    style={{padding:"3px"}}
                                />
                            </div>

                            <div className='input-fields__login'>
                                <p style={Style}>Password</p>
                                <input
                                    name='password'
                                    type="password"
                                    onChange={handleInput}
                                    value={registerInput.password}
                                    placeholder="Enter Password"
                                    style={{padding:"3px"}}
                                />
                            </div>

                            <button   style={{
                                marginTop: "30px",
                                width:"100px",
                                backgroundColor:"blue"
                            }} className='login_button'>Login</button>
                        </form>
                    </div>
                </div>
                <div className='auth-login__footer'>
                    <p style={Style}>Don’t have an account?<a href='/signup'> Sign up</a></p>
                </div>

            </div>            
        </div>
    );
}

export default Login;