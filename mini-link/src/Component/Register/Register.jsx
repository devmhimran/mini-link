import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
      const [errorMsg, setErrorMsg] = useState('');
      console.log(user)
    const handleRegister = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        

        if(password === confirmPassword){

           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName: name });
        }else{
            const errorMessage = <><small className='text-red-500'>Wrong password try again</small></>
            setErrorMsg(errorMessage)
        }

        

    }
    return (
        <div>
            <NavMenu></NavMenu>
            <div className='register__main content__container'>
                <div className='container md:w-6/12 lg:w-3/12 border-2 border border-[#472D2D] bg-[#FEFBE7] p-6'>
                    <h2 className='text-center mb-6 text-3xl font-semibold'>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <div className="register__input my-3">
                            <label htmlFor="name" className='capitalize text-lg'>Enter your Name</label>
                            <input className='basic__input' type="text" name="name" id="name" />
                        </div>
                        <div className="register__input my-3">
                            <label htmlFor="email" className='capitalize text-lg'>Enter your Email</label>
                            <input className='basic__input' type="email" name="email" id="email" />
                        </div>
                        <div className="register__input my-3">
                            <label htmlFor="password" className='capitalize text-lg'>Enter your Password</label>
                            <input className='basic__input' type="password" name="password" id="password" />
                        </div>
                        <div className="register__input my-3">
                            <label htmlFor="confirmPassword" className='capitalize text-lg'>Confirm Password</label>
                            <input className='basic__input' type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <div className="error__message">
                            {errorMsg}
                        </div>
                        <div className="register__input my-3">
                            <button className='text-lg w-full bg-[#472D2D] text-[#FEFBE7] py-3 font-semibold'>Sign up</button>
                        </div>
                        <div className="register__container text-center mt-8">
                            <p className='text-lg'>Already have account? <Link to='/signin'>Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;