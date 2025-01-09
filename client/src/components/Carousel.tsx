import React, { useState } from 'react';
import '../stylesheets/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [1, 2, 3, 4, 5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>‹</button>
      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;