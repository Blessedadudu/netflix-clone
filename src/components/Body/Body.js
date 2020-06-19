import React from 'react';
import './Body.scss'

const Body = () => {
    return ( 
        <div className='body'>

            {/* <h3>Welcome to body</h3> */}
            <section className='section1'>
                    <div className='enjoy'>
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='imageRel'>
                        {/* <h1>omage</h1> */}
                        <img alt="" className="card1" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
                        <video className="our-story-card-video" autoPlay playsInline muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                    </div>
            </section>
            <section className='section1 section22'>
                    <div className='imageRel section2'>
                        {/* <h1>omage</h1> */}
                        <img alt="" className="card" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img"/>
                        
                       <div className='strangerCard'>
                           <div>
                                <img alt="" className="card" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" data-uia="our-story-card-img"/>
                           </div>
                            <div>
                                <h4>Stranger Things</h4>
                                <p>Downloading...</p>
                            </div>
                            <div>
                                 <img alt=""  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" data-uia="our-story-card-img"/>
                            </div>
                       </div>
                    </div>
                    <div className='enjoy'>
                        <h1>Download your shows to watch offline.</h1>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
            </section>
            <section className='section1 section3'>
                    <div className='enjoy'>
                        <h1>Watch everywhere.</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    </div>
                    <div className='imageRel'>
                        {/* <h1>omage</h1> */}
                        <img alt="" className="card" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
                        <video className="our-story-card-video" autoPlay playsInline muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/></video>
                    </div>
            </section>
        </div>
    )
}

export default Body;