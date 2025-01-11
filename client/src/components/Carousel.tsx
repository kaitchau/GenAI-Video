import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [1, 2, 3, 4, 5];
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((index) => (index + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const slides = carouselRef.current.children as HTMLCollectionOf<HTMLDivElement>;
      const totalSlides = items.length;
      const slideWidth = 300; // Adjust based on actual slide width
      const depth = 400; // Adjust depth for 3D effect
      const angle = 45; // Adjust angle for 3D effect for non-current (next, prev) slides

      Array.from(slides).forEach((slide, i) => {
        // Calculate relative position for each slide using math is a good idea?
        const offset = ((i - currentIndex + totalSlides) % totalSlides) - Math.floor(totalSlides / 2);
        
        // Animate with GSAP
        gsap.to(slide, {
          x: offset * slideWidth,
          z: Math.abs(offset) === 0 ? 0 : -depth, // Center slide stays in front
          // scale: offset === 0 ? 1 : 0.95,
          opacity: offset === 0 ? 1 : 0.5,
          rotateY: offset === 0 ? 0 : offset * angle, // Add slight rotation for 3D effect
          filter: offset === 0 ? 'none' : 'blur(2px)',
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-700 hover:text-gray-900 z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative flex items-center justify-center h-64 overflow-hidden"
        style={{
          perspective: '1000px', 
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center w-60 h-40 bg-gray-200 text-3xl font-bold border border-gray-300 rounded-md shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-700 hover:text-gray-900 z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};


export default Carousel;