import React, { useState} from 'react';
import './Accordion.scss';



const Accordion = () => {

    const [accordion, setAccordion] = useState([
        {
          question: 'What is Netflix',
          answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
          open: true
        },
        {
          question: 'Who is the most awesome person?',
          answer: 'You. The Viewer.',
          open: false
        },
        {
          question: 'How many questions does it take to make a successful FAQ Page?',
          answer: 'This many.',
          open: false
        }
    ]);


    const toggleAccordion = index => {
        setAccordion(accordion.map((accordion, i) => {
          if (i === index) {
            accordion.open = !accordion.open
          } else {
            accordion.open = false;
          }
    
          return accordion;
        }))
    }
    return (
        <div className='accordion'>
            <h1>Frequently Asked Questions</h1>
            <div className='mainAccordion'>
                Accordion
                <div >
                    {accordion.map((items, index) => (
                        <div onClick={() => toggleAccordion(index)} className='accordionText'>
                            <div  className='accordionHeading'>
                                <h1>{items.question}</h1>
                                <h3>XXX</h3>
                            </div>
                            <h2 className={ 'showText show' }>{items.answer}</h2>
                            
                        </div>
                    ))}

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

export default Accordion
