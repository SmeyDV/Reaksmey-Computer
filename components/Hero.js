"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    "/picture/1.jpg",
    "/picture/2.jpg",
    "/picture/3.jpg",
    "/picture/4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Increased delay to 5 seconds
    return () => clearInterval(interval); 
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-7xl items-center overflow-hidden rounded-2xl">
        {/* Slides */}
        <div className="relative h-96 md:h-[600px]">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-gray-700"
        >
          &#10095; {/* Right Arrow */}
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
