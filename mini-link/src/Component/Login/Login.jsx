import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const Login = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <div className="login__main h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className='container w-3/12 border-2 border border-[#472D2D] p-6'>
                    <form>
                        <div className="login__input">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="text" name="email" id="email" />
                        </div>
                        <div className="login__input">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="text" name="email" id="email" />
                        </div>
                        <div className="login__input">
                            <button>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;