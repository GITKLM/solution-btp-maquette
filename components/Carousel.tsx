"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaTruckDroplet } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { Button } from './ui/button';
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const slides = [
    '/test.jpg',
    '/test.jpg',
    '/test.jpg',
    '/test.jpg',
    '/test.jpg',
    // '/gericht.webp',
    // '/car-hub.webp',
    // '/bank-app.webp',
    // '/car-hub.webp',
  ];

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
      <button onClick={goToPrevSlide} className='opacity-40 hover:opacity-100 absolute left-0 z-10 flex items-center justify-center w-16 h-16 text-5xl text-white'>
        <RiArrowDropLeftLine />
      </button>
      
      <Image
        src={slides[currentSlide]} 
        alt={`Projet n°${currentSlide + 1}`}
        width={1500}
        height={1000}
        className="object-cover opacity-85"
      />
<div className="absolute top-0 left-0 px-10 py-12 mt-2">
<p className='text-sm text-[#76A042]'>Notre expertise</p>
      <h1 className=" leading-snug rounded text-5xl font-bold">
      Nous avons <span className='text-[#76A042]'>la solution</span>
      </h1>
      <p className='max-w-[33rem] pb-2'>Une recherche de fuite ? Une surconsommation d&apos;eau ? Des travaux après sinistre ? Étanchéité, peinture, nettoyage de la toiture ? Nous nous déplaçons rapidement dans l&apos;ouest et le sud de la Réunion. Entreprise agréée par les Assurances</p>
      <Button>Prendre Rendez-vous</Button>
</div>
<div className="absolute top-0 right-0 flex justify-end gap-2 px-4 py-2">
        <div className="flex gap-1 items-center text-4xl  p-4 hover:bg-black hover:bg-opacity-15 rounded">
        <IoIosPhonePortrait />
        {/* <p>0693637095</p> */}
        </div>
        <div className="items-center flex gap-1 text-4xl p-4 hover:bg-black hover:bg-opacity-15 rounded">
        <IoIosMail />
        {/* <p>solution.btp@outlook.fr</p> */}
        </div>
    </div>

<div className='bg-black bg-opacity-5 px-9 py-2 mb-4 absolute bottom-80 flex justify-between gap-4 text-xl font-bold'>
  <div className='flex flex-col items-center gap-3'>
    <GiReceiveMoney className='text-4xl'/>
  <p className='text-center'>agréée par les assurances</p>
  </div>
  <div className='flex flex-col items-center gap-3'>
    <TfiWrite className='text-4xl'/>
  <p className='text-center'>Devis rapide</p>
  </div>
  <div className='flex flex-col items-center gap-3'>
    <GiReceiveMoney className='text-4xl'/>
  <p className='text-center'>agréée par les assurances</p>
  </div>
  <div className='flex flex-col items-center gap-3'>
    <FaTruckDroplet className='text-4xl'/>
  <p className='text-center'>Intervention rapide sud et l&apos;ouest</p>
  </div>
  <div className='flex flex-col items-center gap-3'>
    <FaRegThumbsUp className='text-4xl'/>
  <p className='text-center'> X années de savoir-faire</p>
  </div>
</div>



      <button onClick={goToNextSlide} className='opacity-40 hover:opacity-100 absolute right-0 z-10 flex items-center justify-center w-16 h-16 text-5xl text-white'>
        <RiArrowDropRightLine />
      </button>
    </div>
  );
};

export default Carousel;
