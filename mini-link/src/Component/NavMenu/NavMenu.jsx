import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import miniLinkLogo from '../../assets/mini-link-logo.png'
import auth from '../firebase.init';

const NavMenu = ({page}) => {
    const [user] = useAuthState(auth);
    return (
        <div className='container mx-auto w-3/6 mb-[-100px]'>
            <div className="navbar__main flex justify-between items-center pt-3">
                <a href="/"><img src={miniLinkLogo} alt="" /></a>
                {
                    page === 'dashboard' ? 
                        user ? <Link onClick={() => signOut(auth)} className='text-2xl font-medium text-[#472D2D]'>Sign out</Link> : 
                        <Link to='/signin' className='text-2xl font-medium text-[#472D2D]'>Sign in</Link>
                     : <Link to='/dashboard' className='text-2xl font-medium text-[#472D2D]'>Dashboard</Link>
                }
            </div>
        </div>
    );
};

export default NavMenu;