import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import img from '../../assets/images/login/4957136.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const { createUser, googleSignIn, updateUserProfile, githubSignIn } = useContext(AuthContex);

    let navigate = useNavigate();

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        if (event.target.value.length < 6) {
            setPasswordError('The password is less than 6 characters');
        } else {
            setPasswordError(null);
        }
    }

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                handleUpdateProfileUser(name, photoURL)
                navigate('/')
            })
            .catch(e => console.error(e));
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(e => console.log(e.message))
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(e => console.log(e.message))
    }

    const handleUpdateProfileUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {
                // console.log(result.user)
            })
            .catch(e => console.error(e))
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-20  ">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl py-20">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
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
                            <input onChange={handlePasswordChange} type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {passwordError && <p className='text-red-500 font-semibold mt-2'>{passwordError}</p>}
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='SignUp' />
                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <p className='mb-2'>Or Sign Up with </p>
                        <button onClick={handleGoogleSignIn} className='mr-4 p-3 bg-slate-100 hover:bg-slate-300 rounded-full'><FaGoogle className='text-xl text-blue-500'></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className='mr-4 p-3 bg-slate-100 hover:bg-slate-300 rounded-full  text-blue-500'><FaGithub className='text-xl '></FaGithub></button>
                    </div>
                    <p className='text-center'>Already have an account ? <Link className='text-blue-500 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;