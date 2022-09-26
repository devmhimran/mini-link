import { Result } from 'postcss';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast, Toaster } from 'react-hot-toast';
import NavMenu from '../NavMenu/NavMenu';

const Home = () => {
    const [shortenLink, setShortenLink] = useState('');
    const [copied, setCopied] = useState(false);
    console.log(shortenLink);
    const handleLink = (e) => {
        e.preventDefault();
        const link = e.target.inputLink.value;

        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(des => setShortenLink(des))

        console.log(shortenLink);
    }
    const handleCopy = (e) => {
        e.preventDefault();
        toast.success('Copied Done!')
    }
    return (
        <div className='home__container'>
            <NavMenu page='home'></NavMenu>
            <div className="home__main content__container">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="home__heading w-7/12 mx-auto mb-12">
                        <h1 className='text-[#472D2D] text-8xl font-medium capitalize'>
                            <span className='font-bold'>Shorten</span> Your <br />
                            Important <span className='font-bold'>Links</span>
                        </h1>
                    </div>
                    {
                        shortenLink ?
                            <>
                                <form onSubmit={handleCopy}>
                                    <div className="mini__link__input w-7/12 mx-auto flex">
                                        <input className='basic__input copy__link' type="text" name="inputLink" placeholder='Enter Your Favorite Link' value={shortenLink.result.short_link3} required />
                                        <CopyToClipboard text={shortenLink.result.short_link3}>
                                            <button className='text-xl bg-[#472D2D] text-[#FEFBE7] px-8 py-2'>Copy</button>
                                        </CopyToClipboard>

                                    </div>
                                </form>
                            </>
                            :
                            <>
                                <form onSubmit={handleLink}>
                                    <div className="mini__link__input w-7/12 mx-auto flex">
                                        <input className='basic__input' type="text" name="inputLink" placeholder='Enter Your Favorite Link' required />
                                        <button className='text-xl bg-[#472D2D] text-[#FEFBE7] px-8 py-2'>Shorten</button>
                                    </div>
                                </form>
                            </>
                    }
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Home;