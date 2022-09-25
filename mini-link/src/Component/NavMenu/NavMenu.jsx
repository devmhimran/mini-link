import React from 'react';
import { Link } from 'react-router-dom';
import miniLinkLogo from '../../assets/mini-link-logo.png'

const NavMenu = () => {

    return (
        <div className='container mx-auto w-3/6 mb-[-100px]'>
            <div className="navbar__main flex justify-between items-center pt-3">
                <Link to='/'><img src={miniLinkLogo} alt="" /></Link>
                <Link to='/signin' className='text-2xl font-medium'>Sign in</Link>
            </div>
        </div>
    );
};

export default NavMenu;