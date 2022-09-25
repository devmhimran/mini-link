import { Alert } from '@material-tailwind/react';
import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <div className="home__main h-[100.8vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="home__heading w-7/12 mx-auto mb-12">
                        <h1 className='text-[#472D2D] text-8xl font-medium capitalize'>
                            <span className='font-bold'>Shorten</span> Your <br />
                            Important <span className='font-bold'>Links</span>
                        </h1>
                    </div>
                    <div className="mini__link__input w-7/12 mx-auto flex">
                        <input className='basic__input' type="text" name="" id="" placeholder='Enter Your Favorite Link' />
                        <button className='text-2xl bg-[#472D2D] text-[#FEFBE7] px-8 py-2'>Shorten</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;