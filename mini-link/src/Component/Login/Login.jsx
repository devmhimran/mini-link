import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import NavMenu from '../NavMenu/NavMenu';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <NavMenu></NavMenu>
            <div className="login__main content__container">
                <div className='container w-3/12 border-2 border border-[#472D2D] p-6'>
                    <h2 className='text-center mb-6 text-3xl font-semibold'>Sign in</h2>
                    <form onSubmit={handleLogin}>
                        <div className="login__input my-3">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="email" name="email" id="email" />
                        </div>
                        <div className="login__input my-3">
                            <label htmlFor="password" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="password" name="password" id="password" />
                            <small className='text-[#1363DF] font-medium'>Forget Password?</small>
                        </div>
                        <div className="login__input my-3">
                            <button className='text-lg w-full bg-[#472D2D] text-[#FEFBE7] py-3 font-semibold'>Sign in</button>
                        </div>
                        <div className="register__container text-center mt-8">
                            <p className='text-lg'>Need an account? <Link to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;