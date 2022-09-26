import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import NavMenu from '../NavMenu/NavMenu';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div className="email__container">
            <NavMenu></NavMenu>
            <div className='content__container email__verification'>
                <div className="email__verification__content border p-8 border-dashed border-[#472D2D]">
                    <p className='text-2xl text-center'>Your email is not verified
                        <br />
                        please verify your email
                    </p>
                    <div className='text-center mt-6'>
                        <button className='text-xl bg-[#472D2D] text-[#FEFBE7] px-8 py-2' onClick={async () => {
                            await sendEmailVerification();
                            toast.success('Sent Email');
                        }}>Resend</button>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>;
    }
    return children;
};

export default RequireAuth;