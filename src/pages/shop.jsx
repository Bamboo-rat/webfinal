import React from 'react';
import '../assets/css/shop.css';
import anh1 from '../assets/images/anh1.jpg';
import anh2 from '../assets/images/anh2.jpg';
import anh3 from '../assets/images/anh3.jpg';
import anh4 from '../assets/images/anh4.jpg';
import anh5 from '../assets/images/anh5.jpg';
import anh6 from '../assets/images/anh6.jpg';
import anh7 from '../assets/images/anh7.jpg';
import logo from '../assets/images/logo.png';
import Navbar from '../component/navbar';
import TestimonialChild from '../component/testimonial-child';
import Footer from '../component/footer';
import ImageSlider from '../component/Slide';

const services = [
  { img: anh1, title: 'Hair Cut', price: '$10.00' },
  { img: anh2, title: 'Hair Wash', price: '$10.00' },
  { img: anh3, title: 'Hair Color', price: '$10.00' },
  { img: anh4, title: 'Hair Shave', price: '$10.00' },
  { img: anh5, title: 'Hair Straight', price: '$10.00' },
  { img: anh6, title: "Men's Facial", price: '$10.00' },
  { img: anh7, title: 'Shampoo', price: '$10.00' },
  { img: anh7, title: 'Wedding Style', price: '$10.00' }
];

function Shop() {
  return (
    <div>
      <Navbar />
     <ImageSlider/>
      <div className="logo-d">
        <img src={logo} alt="Logo" className="anhlogo" />
        <div className="chu-d">
          <p>Good morning forth gathering doesn't god gathering man and had moveth there dry sixth dominion</p>
          <p>Rule divided behold after had he did not move.</p>
        </div>
      </div>
      
      <div className="shop-container">
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.img} alt={service.title} className="service-image" />
              <div className="service-details">
                <h1>{service.title}</h1>
                <div className="service-price">{service.price}</div>
                <p>Their days lesser and every firmament</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TestimonialChild />
      <Footer />
    </div>
  );
}

export default Shop;
