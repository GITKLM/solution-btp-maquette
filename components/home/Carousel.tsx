"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Button } from '../ui/button';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    '/test.jpg',
    '/test.jpg',
    '/test.jpg',
    '/test.jpg',
  ];

  const buttons = [
    <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#76A042] opacity-70 hover:opacity-100 text-white py-2 px-4 rounded">Recherche de fuite</button>,
    <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#76A042] opacity-70 hover:opacity-100 text-white py-2 px-4 rounded">Travaux toiture</button>,
    <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#76A042] opacity-70 hover:opacity-100 text-white py-2 px-4 rounded">Travaux après sinistre</button>,
    <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#76A042] opacity-70 hover:opacity-100 text-white py-2 px-4 rounded">Ravalement de façade</button>,
  ]

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 20000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button onClick={goToPrevSlide} className="opacity-40 hover:opacity-100 absolute sm:left-3 left-0 z-10 flex items-center justify-center w-16 h-16 text-5xl text-[#76A042]">
        <RiArrowDropLeftLine />
      </button>

      <div className="">
        <Image
          src={slides[currentSlide]}
          alt={`Projet n°${currentSlide + 1}`}
          width={600}
          height={1000}
          className="rounded object-cover opacity-85"
        />
        {buttons[currentSlide]}
      </div>

      <button onClick={goToNextSlide} className="opacity-40 hover:opacity-100 absolute sm:right-3 right-0 z-10 flex items-center justify-center w-16 h-16 text-5xl text-[#76A042]">
        <RiArrowDropRightLine />
      </button>
    </div>
  );
};

export default Carousel;
