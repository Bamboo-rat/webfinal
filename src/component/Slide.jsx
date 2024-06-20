import React, { useState, useEffect } from 'react';
import '../assets/css/slide.css';
import anh1 from "../assets/images/hi5.png"
import anh2 from "../assets/images/hi1.png"
import anh3 from "../assets/images/hi2.png"
import anh4 from "../assets/images/hi3.png"
import anh5 from "../assets/images/hi4.png"
import anh6 from "../assets/images/hi6.png"

const images = [
anh1,
anh2,
anh3,
anh4,
anh5,
anh6
];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 1000);
  
      return () => clearInterval(interval); 
    }, [currentIndex]);
  
    return (
      <div className="slider-container">
        <div className="slider">
          <div className="slider-inner" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
            <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </div>
    );
  }

export default ImageSlider;
