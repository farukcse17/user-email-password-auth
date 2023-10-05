import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const handelLogin = e =>{
        e.preventDefault();
        console.log("Successfully login");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // Password validation
        if(password.length < 6){
            setLoginError("Password must be at least six(6) digit length");
            return;
        }
        // reset previous login info
        setLoginError('');
        setLoginSuccess('');
        
        // firebase sign in function call
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setLoginSuccess("Login Successful!");
        })
        .catch(error => {
            console.error(error);
            setLoginError(error.message);
        });
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <h3 className='text-3xl text-center relative top-6'>Please Login</h3>
            <form onSubmit={handelLogin} className="card-body">
                <div>
                    {
                        loginSuccess && <p>{loginSuccess}</p>
                    }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div>
                {
                    loginError && <p>{loginError}</p>
                }
            </div>
        </div>
    )
}
export default Login;