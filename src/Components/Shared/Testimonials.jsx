import React from 'react'
import "../Styles/Testimonials.css" 
import Testimonial1 from "../../Assets/Images/Testimonial1.png";
import Testimonial2 from "../../Assets/Images/Testimonial2.png";
import Testimonial3 from "../../Assets/Images/Testimonial3.png";
import Testimonial4 from "../../Assets/Images/Testimonial4.png";
import Accordians from "../Accordians"
const Testimonials = () => {
    const TestimonialsCards=[
        {
            Image: Testimonial1,
            Title: "Highly Experienced Advisors",
            Details: "We are a team of 70+ professionals who can speak and interact in 16 different languages.",
            Number: "01"
        },
        {
            Image: Testimonial2,
            Title: "Highly Experienced Advisors",
            Details: "We are a team of 70+ professionals who can speak and interact in 16 different languages.",
            Number: "02"
        },
        {
            Image: Testimonial3,
            Title: "Highly Experienced Advisors",
            Details: "We are a team of 70+ professionals who can speak and interact in 16 different languages.",
            Number: "03"
        },
        {
            Image: Testimonial4,
            Title: "Highly Experienced Advisors",
            Details: "We are a team of 70+ professionals who can speak and interact in 16 different languages.",
            Number: "04"
        }
    ];

    return (
        <div className='TestimonialsMain'>
            {
                TestimonialsCards.map((val, id) => {
                    return (
                        <div key={id} className='Card flexCol'>
                            <div className='CardTop '>
                                <img className='Image'
                                    src={val.Image}  
                                    alt='Testimonial'
                                />
                                <h1 className='flexRow'>{val.Number}</h1>
                            </div>
                            <div className='CardMid'>
                                <h1>{val.Title}</h1>
                            </div>
                            <div className='CardBottom'>
                                <p>{val.Details}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Testimonials;