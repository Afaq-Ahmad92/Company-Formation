import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Styles/Slider.css"; // Import your custom CSS file for styling
import Slider1 from "../Assets/Images/Slider-1.jpg";
import Slider2 from "../Assets/Images/Slider-2.jpg";
import Slider3 from "../Assets/Images/Slider-3.jpg";
import { useNavigate } from 'react-router-dom';


const Slider = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the contact page
    navigate('/contact');
  };
  return (
    <>
    <div className="MainSlider">
      <Carousel controls={false} indicators={false} className="custom-carousel">
        <Carousel.Item interval={2000}>
          <div className="custom-carousel-item">
            <div className="custom-carousel-caption ">
              <h1 className="flexRow" >
                simplify your business setup in dubai amd unlock limitless opportunities
              </h1>
              <h5 className="flexRow" >
                setup your business seamlessly in Dubai's thriving economy and witness, the abundance of bussiness possiblities. 
              </h5>
              <button onClick={handleClick}>Get in Touch</button>
            </div>
            <img
              src={Slider1}
              alt="First slide"
              className="custom-carousel-image"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="custom-carousel-item">
            <div className="custom-carousel-caption">
            <h1 className="flexRow">
                Do You have Dream of Establishing A Flourishing Bussiness In
                Dubai?
              </h1>
              <h5 className="flexRow"  >
                We will transform your business dreams into reality with secure,
                prompt and professional company formation services in Dubai.
              </h5>
              <button onClick={handleClick}>Get in Touch</button>
            </div>
            <img
              src={Slider2}
              alt="First slide"
              className="custom-carousel-image"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="custom-carousel-item">
            <div className="custom-carousel-caption">
            <h1 className="flexRow" >
                Experience a smooth and hassle- Free company setup in Dubai
              </h1>
              <h5 className="flexRow" >
               navigate the legal and judical UAE laws effortless and quickly with our passionate and experienced company formation experts. efficient operationof your business in dubai.
              </h5>
              <button onClick={handleClick}>Get in Touch</button>
            </div>
            <img
              src={Slider3}
              alt="First slide"
              className="custom-carousel-image"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

    </>
  );
};

export default Slider;
