import React from 'react';
import "./Login.css";
import logo from "../assets/login.png";
import {auth, provider} from "../Firebase";
import { Button } from '@material-ui/core';
import {login} from "../features/userSlice";
import {useDispatch} from "react-redux";

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
               dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
               }))

               console.log(login);
           })
           .catch((error) =>  alert(error.message))
    }

    return (
        <div className="login">
                <div className="login__container">
                    <img src={logo} alt="Logo"/>
                    <Button variant="contained" color="secondary" onClick={signIn}>Sign In</Button>
                </div>
        </div>
    )
}

export default Login;
