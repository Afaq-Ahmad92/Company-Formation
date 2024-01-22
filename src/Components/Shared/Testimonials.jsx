import React from 'react'
import "../Styles/Testimonials.css" 
const Testimonials = () => {
    const TestimonialsCards=[
        {
            Image:"../../Assets/Images/Logo.png",
            Title:"Highly Experienced Advisors",
            Details:"We are a team of 70+ professionals who can speak and interact in 16 different languages.",
            Number:"01"
        },
        {
            Image:"../Assets/Images/Testimonial2.png",
            Title:"Reliable And Quick Services",
            Details:"Visa approval, PRO services, business setups, trade services - we impart reliable service and assistance to clients.",
            Number:"02"
        },
        {
            Image:"../Assets/Images/Testimonial3.png",
            Title:"Driven By Results",
            Details:"We always strive to understand our clients’ business needs - and give them results that exceed their expectations.",
            Number:"03"
        },
        {
            Image:"../Assets/Images/Testimonial4.png",
            Title:"Excellent Customer Service",
            Details:"Our customer services are always ready to help our clients, maintaining mutual trust and good relationships.",
            Number:"04"
        }
    ]
  return (
        <div className='TestimonialsMain'>
            {
                TestimonialsCards.map((val,id)=>{
                    return(
                        <div key={id} className='Card flexCol'>
                                <div className='CardTop flexRow'>
                                    <img src={val.Image} alt='Testimonial' />
                                    <h1>{val.Number}</h1>
                                </div>
                                <div className='CardMid flexRow'>
                                    <h1>{val.Title}</h1>
                                </div>
                                <div className='CardBottom flexRow'>
                                <p>{val.Details}</p>
                                </div>
                               
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Testimonials