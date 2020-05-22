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
            <div className='headerFlex'>
                <h1>Netflix</h1>
                <button>Sign In</button>
            </div>
            <div className='headerUnlimited'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <div className='inputEmail'>
                    <input type='email' placeholder='Email address'/>
                    <label>Join the community<span>&#x203a;</span></label>
                </div>
                <h4>Ready to watch? Enter your email to create or restart your membership</h4>
            </div>
        </div>
    )
}


export default Header
