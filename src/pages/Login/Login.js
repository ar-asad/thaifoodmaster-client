import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/4957136.jpg'
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContex);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                form.reset();
                console.log(result.user)
                navigate(from, { replace: true });

            })
            .catch(e => {
                setError(e.message)
            });
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(e => console.log(e.message))
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-20  ">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-4/5' src={img} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-20">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>

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
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='login' />

                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <p className='mb-2'>Or Sign Up with </p>
                        <button onClick={handleGoogleLogIn} className='mr-4 p-3 bg-slate-100 hover:bg-slate-300 rounded-full'><FaGoogle className='text-xl text-blue-500'></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className='mr-4 p-3 bg-slate-100 rounded-full text-blue-500 hover:bg-slate-300'><FaGithub className='text-xl '></FaGithub></button>
                    </div>
                    <p className='text-center'>New to Thaifoodmaster ? <Link className='text-blue-500 font-bold' to='/register'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};


export default Login;