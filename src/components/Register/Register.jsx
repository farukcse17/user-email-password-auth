import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';

const Register = () => {
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const handelRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        if(password.length < 6){
            setRegError("Password must be 6 character needed!");
            return;
        }

        setRegError('');
        setSuccess('');
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            // const result = result.user;
            console.log(result.user);
            setSuccess("Data registration successful!");
        })
        .catch((error) =>{
            console.error(error);
            setRegError(error.message);
        })
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <h3 className='text-3xl text-center relative top-6'>Please Register</h3>
            {
              success && <h3 className='text-[green] text-center relative top-8'>{success}</h3>  
            }
            
            <form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div>
                {
                    regError && <p className="text-[red] text-center pb-5">{regError}</p>
                }
            </div>
        </div>
    )
}
export default Register;