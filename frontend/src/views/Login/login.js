import React , { Component}  from 'react';

import Register from "../Registration/registration";
import { useSelector, useDispatch } from 'react-redux'
import { setMobileNumber, setPassword, setUserType } from '../redux/reducers/login';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Login(props) {
    const [errorMsg, setErrorMsg] = React.useState();
    const loginData = useSelector((state) => state.login.loginData);
    const registeredData = useSelector((state)=>state.signUp.registrationData);
    const dispatch = useDispatch();

    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/about");
    }

    function validateForm(){
        if( loginData.mobileNumber &&  !validateEmail(loginData.mobileNumber.payload)){
            setErrorMsg('Enter a valid Email');
            return false;
        }
        else if(loginData.password && loginData.password.payload.length < 8){
            setErrorMsg('Enter a valid password');
            return false;
        }else{
            axios.post(`http://${window.location.hostname}:3001/login`, {mobileNumber: loginData.mobileNumber.payload, password: loginData.password.payload, role: loginData.userType.payload}).then(res=>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('role', res.data.data.role);
                props.history.push('/');
            }).catch(err=>{
                setErrorMsg('Invalid username & Password combination');
            })
        }
    }

    function validateEmail(email) {
        console.log(email);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    return (
        <div id="RegisterPage">
           
            <br/>
            <h4>Welcome</h4>
            <p>Sign in with your email address or mobile number.</p>
            <p class="error">{errorMsg}</p>
            <div>
            <input type="email" placeholder="Enter email" onChange={(e)=>dispatch(setMobileNumber(e.target.value))}/><br/>
            <input type="password" placeholder="Enter Password" onChange={(e)=>dispatch(setPassword(e.target.value))}/>
            <br/>
            </div>
            <div>
            <button class='btn btn-primary w-100' onClick={()=>history.push('/dashboard')}>Login</button>
                <div class="d-flex justify-content-center mt-3">
                <h6>New User?</h6> <a class="link" onClick={()=>history.push('/registration')}>Create an account</a>
                </div>
            </div>
        </div>
    )
}