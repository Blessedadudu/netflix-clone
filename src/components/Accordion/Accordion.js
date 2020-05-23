import React from 'react';
import './Accordion.scss';



class Accordion extends React.Component {
    constructor () {
        super ();
          this.state = {
            accordion: false,
            accordion2: false, 
            accordion3: false,
            accordion4: false, 
            accordion5: false,
        }


    let  { a }  = this.state;
    console.log(a)


    }


    handleAccordion = (text) => {
        const b = this.state
        let { ...a } = text
        this.setState({
            ...b,
            ...a,
        }, console.log( a, this.state))
  
    }


   

    render () {
        return (
            <div className='accordion'>
                <h1>Frequently Asked Questions</h1>
                <div className='mainAccordion'>
                    Accordion
                    <div className='accordionText'>
                        <div className='accordionHeading' onClick={() => this.handleAccordion({ accordion: !this.state.accordion })}>
                            <h1>What is Netflix</h1>
                            <h3>XXXSSDSDFD</h3>
                        </div>
                        <h2 className={ this.state.accordion ? 'showText show' : 'showText' }>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br/> <br/>
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h2>
                    </div>
                    <div className='accordionText' onClick={() => this.handleAccordion({ accordion2: !this.state.accordion2 })}>
                        <div className='accordionHeading'>
                            <h1>How much does Netflix cost?</h1>
                            <h3>XXXSSDSDFD</h3>
                        </div>
                        
                        <h2 className={ this.state.accordion2 ? 'showText show' : 'showText' }>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.</h2>
                    </div>
                    <div className='accordionText'>
                        <div className='accordionHeading' onClick={() => this.handleAccordion({ accordion3: !this.state.accordion3 })}>
                            <h1>Where can I watch?</h1>
                            <h3>XXXSSDSDFD</h3>
                        </div>
                        <h2 className={ this.state.accordion3 ? 'showText show' : 'showText' }>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h2>
                    </div>
                    <div className='accordionText'>
                        <div className='accordionHeading' onClick={() => this.handleAccordion({ accordion4: !this.state.accordion4 })}>
                            <h1>How can I cancel</h1>
                            <h3>XXXSSDSDFD</h3>
                        </div>
                        <h2 className={ this.state.accordion4 ? 'showText show' : 'showText' }>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h2>
                    </div>
                    <div className='accordionText'>
                        <div className='accordionHeading' onClick={() => this.handleAccordion({ accordion5: !this.state.accordion5 })}>
                            <h1>What can I watch on Netflix?</h1>
                            <h3>XXXSSDSDFD</h3>
                        </div>
                        <h2 className={ this.state.accordion5 ? 'showText show' : 'showText' }>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h2>
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
