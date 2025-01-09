import React, { useState } from 'react';
import '../stylesheets/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [1, 2, 3, 4, 5];

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);
  };
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  return (
    <div className="relative w-4/5 mx-auto overflow-hidden">
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={prevSlide}>‹</button>
      <div className="flex justify-center items-center relative">
        {items.map((item, index) => {
          let className = 'w-1/3 flex-shrink-0 transition-transform duration-500';
          if (index === currentIndex) {
            className += ' transform scale-100 opacity-100 z-20';
          // } else if (index === prevIndex) {
          //   className += ' transform -translate-x-full rotate-y-45 scale-75 opacity-50 blur-sm z-10';
          } else if (index === nextIndex) {
            className += ' transform translate-x-full -rotate-y-315 scale-75 opacity-50 blur-sm z-10';
          } else {
            className += ' hidden';
          }
          return (
            <div
              key={index}
              className={className}
            >
              <div className="flex justify-center items-center h-64 bg-gray-300">{item}</div>
            </div>
          );
        })}
      </div>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;