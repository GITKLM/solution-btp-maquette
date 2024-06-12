import Image from 'next/image';
import React from 'react';
import { FaDroplet } from "react-icons/fa6";
import LogoSansTitre from '../LogoSansTitre';
import { Button } from '../ui/button';
import Bounded from '../Bounded';

const rechercheFuiteCard = [
  {
    title: 'Détection après compteur',
    description: "Vous avez des factures d'eau trop élevées ?",
    image: '/test.jpg',
    alt: "test",
  },
  {
    title: 'Enquête dégats des eaux',
    description: "De chez vous ou de chez votre voisin ? Nous déterminons les causes cachées",
    image: '/test.jpg',
    alt: "test",
  },
  {
    title: 'Fuite toit-terrasse',
    description: "Notre spécialité, nous détectons les fuites par utilisation de fumigène",
    image: '/test.jpg',
    alt: "test",
  },
];

export default function RechercheFuiteCards() {
  return (
    <>
      <h3 className='text-balance text-center text-7xl mb-20 font-bold md:text-5xl'>Notre expertise en recherche de fuite</h3>
      <Bounded
    className="relative"

    >

    <div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

     <div className='flex flex-col'>
      <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
      <LogoSansTitre />
      </div>
      <div className="mt-6 text-2xl font-normal">
      <p>Modalités de subvention</p>
      </div>
      <div className="mt-4 max-w-x prose prose-invert">
        <h3 className='font-bold text-md'>Pour les entreprises de moins de 10 salariés :</h3>
      <p className='mb-2'>80 % des dépenses éligibles et 3 200 euros de subvention maximum</p>
        <h3 className='font-bold text-md'>Pour les entreprises de 10 à 19 salariés :</h3>
      <p>50 % des dépenses éligibles et 2 000 euros de subvention maximum.</p>
      </div>
<div className='text-center py-6'>
      <Button/>

</div>
      </div> 

      <Image
  src="/test.jpg"
  alt="test"
  className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%] rounded-lg"
  width={690}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
        </div>

    </Bounded>
    <Bounded
    className="relative"

    >

    <div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

     <div className='flex flex-col'>
      <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
      <LogoSansTitre />
      </div>
      <div className="mt-6 text-2xl font-normal">
      <p>Modalités de subvention</p>
      </div>
      <div className="mt-4 max-w-x prose prose-invert">
        <h3 className='font-bold text-md'>Pour les entreprises de moins de 10 salariés :</h3>
      <p className='mb-2'>80 % des dépenses éligibles et 3 200 euros de subvention maximum</p>
        <h3 className='font-bold text-md'>Pour les entreprises de 10 à 19 salariés :</h3>
      <p>50 % des dépenses éligibles et 2 000 euros de subvention maximum.</p>
      </div>
<div className='text-center py-6'>
      <Button/>

</div>
      </div> 

      <Image
  src="/test.jpg"
  alt="test"
  className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0  lg:translate-x-[15%] rounded-lg"
  width={690}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
        </div>

    </Bounded>
    <Bounded
    className="relative"

    >

    <div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

     <div className='flex flex-col'>
      <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
      <LogoSansTitre />
      </div>
      <div className="mt-6 text-2xl font-normal">
      <p>Modalités de subvention</p>
      </div>
      <div className="mt-4 max-w-x prose prose-invert">
        <h3 className='font-bold text-md'>Pour les entreprises de moins de 10 salariés :</h3>
      <p className='mb-2'>80 % des dépenses éligibles et 3 200 euros de subvention maximum</p>
        <h3 className='font-bold text-md'>Pour les entreprises de 10 à 19 salariés :</h3>
      <p>50 % des dépenses éligibles et 2 000 euros de subvention maximum.</p>
      </div>
<div className='text-center py-6'>
      <Button/>

</div>
      </div> 

      <Image
  src="/test.jpg"
  alt="test"
  className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%] rounded-lg"
  width={690}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
        </div>

    </Bounded>
    

    </>
  );
}
