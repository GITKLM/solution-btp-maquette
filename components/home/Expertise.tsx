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
    <div className="mt-20 grid gap-16">
      <div className={`relative flex flex-col md:flex-row gap-10 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-4xl font-bold">
            {title} <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">{gradientText}</span>
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
          Notre expertise
        </h2>
  
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300 md">
          <p>efficacité, rapidité et durabilité</p>
        </div>
  
        <SectionWithImageAndText
          title="Recherche de fuite"
          gradientText="Fonctionnel"
          imageSrc="/test2.jpg"
          altText="De beaux designs affichés sur un ordinateur"
          text={[
            "Version Mobile efficace",
            "Meilleure expérience utilisateur",
            "S'adapte à tous vos besoins",
          ]}
          linkHref="/offres"
          reverseLayout={false}
        />
  
        <SectionWithImageAndText
          title="Meilleur"
          gradientText="Référencement"
          imageSrc="/test2.jpg"
          altText="quelqu'un tape sur un clavier d'ordinateur"
          text={[
            "Planifier une stratégie SEO efficace",
            "Augmenter la visibilité en ligne",
            "sans frais supplémentaire"
          ]}
          linkHref="/offres"
          reverseLayout={true}
        />
  
        <SectionWithImageAndText
          title="Outils web"
          gradientText="performants"
          imageSrc="/test2.jpg"
          altText="quelqu'un développe sur un clavier d'ordinateur"
          text={[
            "Des sites plus rapides",
            "Des objets plus durables",
            "Des interfaces dynamiques"
          ]}
          linkHref="/offres"
          reverseLayout={false}
        />
      </Bounded>
    );
  }
  