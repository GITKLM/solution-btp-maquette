import React from 'react'
import { Button } from '../ui/button'
import Bounded from '../Bounded'
import Carousel from './Carousel'
import { GiReceiveMoney } from "react-icons/gi";
import { FaTruckDroplet } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import { ImHappy } from "react-icons/im";

export default function Hero() {
  return (
        <>
<Bounded className='bg-[#76A042] bg-opacity-10'>
<div className="flex flex-col lg:flex-row gap-10 pb-2">

      <div className="flex flex-col gap-2">
    <p className="text-sm text-[#76A042]">Notre expertise</p>
    <h1 className="text-7xl font-bold">
      Nous avons <span className="text-[#76A042]">la solution</span>
    </h1>
    <p className="max-w-[33rem] pb-2">
      Une recherche de fuite ? Une surconsommation d&apos;eau ? Des travaux après sinistre ? Étanchéité, peinture, nettoyage de la toiture ? Nous nous déplaçons rapidement dans l&apos;ouest et le sud de la Réunion. Entreprise agréée par les Assurances
    </p>
    <div className='flex items-center'>
    <Button>Prendre Rendez-vous</Button>
    <div className="flex gap-2 px-4 py-2">
      <div className="flex gap-1 items-center text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
        <IoIosPhonePortrait />
      </div>
      <div className="items-center flex gap-1 text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
        <IoIosMail />
      </div>
    </div>
    </div>

 
  </div>

  <Carousel />
</div>

<div className="px-2 py-2 mt-4 flex justify-between gap-6 text-xs md:text-lg font-bold">
      <div className="flex flex-col items-center gap-3">
        <GiReceiveMoney className="text-4xl" />
        <p className="text-center">Agréée par les assurances</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <TfiWrite className="text-4xl" />
        <p className="text-center">Devis rapide</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <ImHappy className="text-4xl" />
        <p className="text-center">Client satisfait</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <FaTruckDroplet className="text-4xl" />
        <p className="text-center">Intervention rapide sud et l&apos;ouest</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <FaRegThumbsUp className="text-4xl" />
        <p className="text-center">X années de savoir-faire</p>
      </div>
    </div>
</Bounded>

        </>
  )
}
