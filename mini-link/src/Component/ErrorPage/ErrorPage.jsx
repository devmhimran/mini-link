import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const ErrorPage = () => {
    return (
        <div className='error__page content__container'>
            <div className="container mx-auto max-w-screen-xl">
            <NavMenu page='home'></NavMenu>
                <div className="content__container">
                   
                    <h1 className='text-[#472D2D] text-8xl font-medium capitalize'>404 Not Found</h1>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;