import Image from 'next/image';
import React from 'react';
import LogoSansTitre from '../LogoSansTitre';
import { Button } from '../ui/button';
import Bounded from '../Bounded';
import Link from 'next/link';

type HrefType = string | undefined;

interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  href?: HrefType;
}

const rechercheFuiteCard: Card[] = [
  {
    title: 'Détection après compteur',
    subtitle: "Une surconsommation, des factures trop élevées ?",
    description: "Une surconsommation, des factures trop élevées ?",
    image: '/fuite/fuite-compteur.jpg',
    alt: "Détection après compteur",
    href: "/recherche-fuite/compteur",
  },
  {
    title: 'Enquête dégats des eaux',
    subtitle: "De chez vous ou de chez votre voisin ? Nous déterminons les causes cachées",
    description: "Une surconsommation, des factures trop élevées ?",
    image: '/fuite/fuite-degats.png',
    alt: "dégats des eaux",
    href: "/recherche-fuite/degats-des-eaux",
  },
  {
    title: 'Fuite toit-terrasse',
    subtitle: "Notre spécialité, nous détectons les fuites par utilisation de fumigène",
    description: "Une surconsommation, des factures trop élevées ?",
    image: '/fuite/fuite-toit.png',
    alt: "Fuite toit-terrasse",
    href: "/recherche-fuite/toit-terrasse",
  },
];


export default function RechercheFuiteCards() {
  return (
    <>
      <h3 className='text-balance text-center text-5xl font-medium md:text-7xl'>Notre expertise en recherche de fuite</h3>
      {rechercheFuiteCard.map((card, index) => (
        <Bounded
          key={index}
          className="relative"
        >
          <div className={`grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className='flex flex-col'>
              <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
                <LogoSansTitre
                  width={40}
                  height={40}
                />
              </div>
              <div className="mt-6 text-2xl font-normal">
                <p className='font-bold'>{card.title}</p>
              </div>
              <div className="mt-4 max-w-x prose prose-invert">
                <h3 className='font-bold text-md'>{card.subtitle}</h3>
                <p className='mb-2'>{card.description}</p>
              </div>
              <div className='text-center py-6'>
                {card.href ? (
                  <Link href={card.href}>
                    <Button>Plus d&apos;information</Button>
                  </Link>
                ) : (
                  <Button disabled>Plus d&apos;information</Button>
                )}
              </div>
            </div>

            <Image
              src={card.image}
              alt={card.alt}
              className={`opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 ${index % 2 !== 0 ? 'lg:order-1 lg:translate-x-[15%]' : 'lg:-order-1 lg:translate-x-[-15%]'} rounded-lg`}
              width={690}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Bounded>
      ))}
    </>
  );
}
