//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React from 'react';
import { Button } from '@material-ui/core';
import Reactotron from 'reactotron-react-js';
import { auth } from '../../config/firebase.config';
import { provider } from '../../config/firebase.config';
import './Login.css';


//-------------------------------------------------------------------------------
// Component Section
//-------------------------------------------------------------------------------
function Login() {
    Reactotron.log('User tried to log');
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => {
            Reactotron.error(`Authentication Error: ${error}`);
        });
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt=""/>
            </div>

            <Button onClick={signIn}>
                Login
            </Button>
        </div>
    )
}


//-------------------------------------------------------------------------------
// Exports Section
//-------------------------------------------------------------------------------
export default Login
