import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/4957136.jpg'

const Login = () => {
    // const { signIn, googleSignIn } = useContext(AuthContex);


    const handleLogin = event => {
        //     event.preventDefault()
        //     const form = event.target;
        //     const email = form.email.value;
        //     const password = form.password.value;
        //     console.log(email, password);

        //     signIn(email, password)
        //         .then(result => {
        //             form.reset(); 
        //             console.log(result.user)
        //         })
        //         .catch(e => console.error(e));
    }

    const handleGoogleLogIn = () => {
        // googleSignIn()
        //     .then(result => console.log(result.user))
        //     .catch(e => console.log(e.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20  ">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-20">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>

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
                            <input type="submit" className="btn btn-primary" value='login' />

                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <p className='mb-2'>Or Sign Up with </p>
                        <button onClick={handleGoogleLogIn} className='mr-4 p-3 bg-slate-100 rounded-full'><FaGoogle className='text-xl text-orange-500'></FaGoogle></button>
                        <button className='mr-4 p-3 bg-slate-100 rounded-full'><FaGithub className='text-xl '></FaGithub></button>
                    </div>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-500 font-bold' to='/register'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};


export default Login;