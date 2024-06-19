import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Bounded from "../Bounded";



function SectionWithImageAndText({ title, gradientText, imageSrc, altText, text, linkHref, reverseLayout }: { 
  title: string; 
  gradientText: string; 
  imageSrc: string; 
  altText: string; 
  text: string[]; 
  linkHref: string; 
  reverseLayout?: boolean 
}) {

  return (
    <div className="mt-10 grid gap-16">
      <div className={`relative flex flex-col md:flex-row gap-10 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-4xl font-bold">
            {title} <span className="bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent">{gradientText}</span>
          </h3>
          <div className="max-w-md">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link 
          href={linkHref} 
          aria-label="Aller à la page Nos Offres"
          className="after:absolute after:inset-0 hover:underline flex gap-4 items-center">
            En savoir plus
            <RiArrowRightSLine size={22} />
          </Link>
        </div>
        <Image
          className={clsx("rounded-xl lg:col-span-2")}
          src={imageSrc}
          alt={altText}
          height={334}
          width={500}
        />
      </div>
    </div>
  );
}

export default function Expertise() {
    return (
      <Bounded className="bg-test">
        <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          Notre Savoir-faire
        </h2>
  
        <div className="mx-auto mt-6 max-w-md font-semibold text-balance text-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent">
          <p>efficacité, rapidité et durabilité</p>
        </div>
  
        <SectionWithImageAndText
          title="Recherche de"
          gradientText="fuite"
          imageSrc="/expertise-recherche-fuite.jpg"
          altText="De beaux designs affichés sur un ordinateur"
          text={[
            "Problème de compteur",
            "Dégâts des eaux",
            "Notre spécialité: toiture-terrasse",
          ]}
          linkHref="/recherche-de-fuite"
          reverseLayout={false}
        />
  
        <SectionWithImageAndText
          title="Travaux de"
          gradientText="toiture"
          imageSrc="/expertise-toit.jpg"
          altText="quelqu'un tape sur un clavier d'ordinateur"
          text={[
            "Etanchéité",
            "Peinture",
            "Nettoyage"
          ]}
          linkHref="/toiture"
          reverseLayout={true}
        />
  
        <SectionWithImageAndText
          title="Travaux"
          gradientText="divers"
          imageSrc="/expertise-travaux.png"
          altText="quelqu'un développe sur un clavier d'ordinateur"
          text={[
            "Travaux après sinistre",
            "Ravalement de façade"
          ]}
          linkHref="/autres-travaux"
          reverseLayout={false}
        />
      </Bounded>
    );
  }
  