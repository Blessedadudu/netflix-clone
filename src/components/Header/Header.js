import React from 'react';
import netflixheader from '../../assets/netflixheader.jpg';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'> 
            {/* <h1>Welcome to the header</h1> */}
            <picture>
                {/* <source media="(max-width: 500px)" srcSet={carousel1B}/>
                <source media="(max-width: 1080px)" srcSet={carousel1A}/> */}
                <img src={netflixheader} alt='caroimage'/>
            </picture>
            <div className='imageOverlay'></div>
            <div>
                <h1>Netflix</h1>
                <button>Sign In</button>
            </div>
        </div>
    )
}


export default Header
