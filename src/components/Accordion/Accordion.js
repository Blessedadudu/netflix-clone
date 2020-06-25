import React, { useState} from 'react';
import './Accordion.scss';



const Accordion = () => {

    const [accordion, setAccordion] = useState([
        {
          question: 'What is Netflix?',
          answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
          answer2: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
          open: false
        },
        {
          question: 'How much does Netflix cost?',
          answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.',
          open: false
        },
        {
          question: 'Where can I watch?',
          answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
          open: false
        },
        {
            question: 'How do I cancel?',
            answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            open: false
        },
        {
            question: 'What can I watch on Netflix?',
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            open: false
        },
        
        
    ]);


    const toggleAccordion = index => {
        setAccordion(accordion.map((items, i) => {
          if (i === index) {
            items.open = !items.open;
          } else {
            items.open = false;
          } 
          console.log(items.open)
          return items;
         
        }))
    
        
    }

    return ( 
        <div className='accordion'>
            <h1 className='heading'>Frequently Asked Questions</h1>
            <div className='mainAccordion'>
                <div>
                    {accordion.map((items, index) => (
                        <div key={index} className='accordionText'>
                            <div className='accordionHeading' onClick={() => toggleAccordion(index)} >
                                <h1>{items.question}</h1>
                                <div  className='toggle'>
                                    <label for="navi-toggle" className='check' >
                                        <span className={`icon ${items.open && 'icon2' }`}>&nbsp;</span>
                                    </label>
                                </div>
                            </div>
                            <h2 className={ `showText ${items.open && 'show' }`}>{items.answer}<br/><br/>{items.answer2}</h2>

                           
                        </div>
                    ))}
                    
                </div>

            </div>



            <div className='inputEmail'>
                <input type='email' placeholder='Email address'/>
                <label>Try 30 days free<span>&#x203a;</span></label>
            </div>
            <h4 className='ready'>Ready to watch? Enter your email to create or restart your membership.</h4>
        </div>
    )
   
}

export default Accordion
