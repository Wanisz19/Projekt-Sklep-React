import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import './Login.css'
import Logo from './photos/website.jpg'
import { useState } from 'react'
import {auth, db} from "./firebase"

function Login() {
const history = useHistory()    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const signIn = e => { 
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then(auth => {
        history.push('/')
    }).catch(error => alert(error.message))
}

const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
        if(auth){
            history.push('/')
        }
    }).catch(error => alert(error.message))
}


    return (
        <div className="login">
            <Link to="/" alt="logo">
                <img className="login_logo" src={Logo}>      
                </img>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password'
                    value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type='submit' onClick={signIn} className="signInButton">Sign In</button>
                </form>

                

                <button onClick={register}
                className="registerButton"> Create your account</button>
            </div>
        </div>
    )
}

export default Login
