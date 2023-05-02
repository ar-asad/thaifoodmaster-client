import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import img from '../../assets/images/login/4957136.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
    // const { createUser, googleSignIn, updateUserProfile, verifyEmail } = useContext(AuthContex);

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // createUser(email, password)
        //     .then(result => {
        //         console.log(result.user)
        //         form.reset()
        //         handleUpdateProfileUser(name, photoURL)
        //         // handleEmailVarification();
        //         // toast.success('Please verify your email address');


        //     })
        //     .catch(e => console.error(e));
    };

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(result => console.log(result.user))
        //     .catch(e => console.log(e.message))
    }

    const handleUpdateProfileUser = (name, photoURL) => {
        // const profile = {
        //     displayName: name,
        //     photoURL: photoURL
        // }
        // updateUserProfile(profile)
        //     .then(result => { })
        //     .catch(e => console.error(e))
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
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
                        <button onClick={handleGoogleSignIn} className='mr-4 p-3 bg-slate-100 rounded-full'><FaGoogle className='text-xl text-orange-500'></FaGoogle></button>
                        <button className='mr-4 p-3 bg-slate-100 rounded-full'><FaGithub className='text-xl '></FaGithub></button>
                    </div>
                    <p className='text-center'>Already have an account ? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;