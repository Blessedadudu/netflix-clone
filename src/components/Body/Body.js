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
                        <img alt="" className="card" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"/>
                        <video class="our-story-card-video" autoPlay="true" playsinline muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                    </div>
            </section>
        </div>
    )
}

export default Body;