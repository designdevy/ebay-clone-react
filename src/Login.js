import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/350px-Amazon_logo.svg.png"
                    alt="Logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)
                    }/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        p => setPassword(p.target.value)
                    }/>
                    
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signinButton">Sign In</button>
                </form>
                
                <p>By signing-in you agree to the CLONE conditions aof Use & Sale. Please see our privacy notice.</p>
                
                <button
                    onClick={register}
                    type="submit"
                    className="login__registerButton">Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login;