"use client";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContactForm from '@/components/contact/ContactForm';
import { ProfileForm } from '@/components/MyForm';

type ContactItem = 
  | { type: 'email', value: string }
  | { type: 'phone', value: string }
  | { type: 'address', value: string }
  | { type: 'social', name: string, url: string };

interface ContactSection {
  title: string;
  items: ContactItem[];
}

export default function AnimationDevis() {
  const contactInfo: ContactSection[] = [
    {
      title: "Nous contacter",
      items: [
        { type: "email", value: "solution.btp@outlook.fr" },
        { type: "phone", value: "0693637095" }
      ]
    },
    {
      title: "Adresse",
      items: [
        { type: "address", value: "4 Avenue du Père René Payet, 97450 Saint-Louis" }
      ]
    },
    {
      title: "Horaires",
      items: [
        { type: "social", name: "Instagram", url: "https://instagram.com" },
        { type: "social", name: "Facebook", url: "https://facebook.com" },
        { type: "social", name: "Twitter", url: "https://twitter.com" }
      ]
    }
  ];

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(".devis__heading",
      { scale: 0.5 },
      { scale: 1, opacity: 1, duration: 1.4 });

    tl.fromTo(".devis__form",
      { x: -100 },
      { x: 0, opacity: 1, duration: 1.3 }, "-=0.8");
    tl.fromTo(".devis__contact",
      { x: 100 },
      { x: 0, opacity: 1, duration: 1.3 }, "-=0.9");
  }, { scope: container });

  return (
    <div className="container mx-auto px-4" ref={container}>
      <h1 className="devis__heading opacity-0 text-balance text-center text-5xl font-medium md:text-7xl pt-10 pb-20 ">Quelle est votre demande ?</h1>
      
      <div className='lg:grid grid-cols-4 block'>
        <ContactForm />


        <div className="col-span-1 py-8 devis__contact opacity-0">
          {contactInfo.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-lg font-bold mb-2 bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent">{section.title}</h2>
              {section.items.map((item, itemIndex) => {
                switch (item.type) {
                  case "email":
                    return (
                      <a key={itemIndex} href={`mailto:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 block transform transition-transform duration-300 ease-in-out hover:scale-105 pl-2">{item.value}</a>
                    );
                  case "phone":
                    return (
                      <a key={itemIndex} href={`tel:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 block transform transition-transform duration-300 ease-in-out hover:scale-105 pl-2">{item.value}</a>
                    );
                  case "address":
                    return (
                      <a key={itemIndex} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`} target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 block transform transition-transform duration-300 ease-in-out hover:scale-105 pl-2">{item.value}</a>
                    );
                  case "social":
                    return (
                      <a key={itemIndex} href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 block transform transition-transform duration-300 ease-in-out hover:scale-105 pl-2">{item.name}</a>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
