import React from 'react';
import './Accordion.scss';



class Accordion extends React.Component {
    

    render () {
        return (
            <div className='accordion'>
                <h1>Frequently Asked Questions</h1>
                <div className='mainAccordion'>
                    Accordion
                    <div className='accordionText'>
                        <div className='accordionHeading'>
                            <h1>What is Netflix</h1>
                            <h3>X</h3>
                        </div>
                        <h2>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br/> <br/>
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h2>
                    </div>
                    

                </div>



                <div className='inputEmail'>
                    <input type='email' placeholder='Email address'/>
                    <label>Join the community<span>&#x203a;</span></label>
                </div>
                <h4>Ready to watch? Enter your email to create or restart your membership</h4>
            </div>
        )
    }
   
}

export default Accordion
