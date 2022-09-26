import React from 'react';
import { Link } from 'react-router-dom';
import miniLinkLogo from '../../assets/mini-link-logo.png'

const NavMenu = () => {

    return (
        <div className='container mx-auto w-3/6 mb-[-100px]'>
            <div className="navbar__main flex justify-between items-center pt-3">
                <a href="/"><img src={miniLinkLogo} alt="" /></a>
                <Link to='/signin' className='text-2xl font-medium text-[#472D2D]'>Sign in</Link>
            </div>
        </div>
    );
};

export default NavMenu;