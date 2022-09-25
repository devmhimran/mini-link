import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const Login = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <div className="login__main content__container">
                <div className='container w-3/12 border-2 border border-[#472D2D] p-6'>
                    <h2 className='text-center mb-6 text-3xl font-semibold'>Sign in</h2>
                    <form>
                        <div className="login__input my-3">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="text" name="email" id="email" />
                        </div>
                        <div className="login__input my-3">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="text" name="email" id="email" />
                            <small className='text-[#1363DF] font-medium'>Forget Password?</small>
                        </div>
                        <div className="login__input my-3">
                            <button className='text-lg w-full bg-[#472D2D] text-[#FEFBE7] py-3 font-semibold'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;