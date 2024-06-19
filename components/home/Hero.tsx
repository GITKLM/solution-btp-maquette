import { Button } from '../ui/button';
import Bounded from '../Bounded';
import Carousel from './Carousel';
import { GiReceiveMoney } from "react-icons/gi";
import { FaTruckDroplet, FaRegThumbsUp } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import { ImHappy } from "react-icons/im";
import Link from 'next/link';

const ContactIcons = () => (
  <div className="flex gap-2 px-4 py-2">
    <div className="flex gap-1 items-center text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
      <Link
      href={`tel:0693637095`} 
      target="_blank" 
      rel="noopener noreferrer"
      >
      <IoIosPhonePortrait />
      </Link>
    </div>

    <div className="items-center flex gap-1 text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
      <Link
      href={`mailto:solution.btp@outlook.fr`} 
      target="_blank" 
      rel="noopener noreferrer"
      >
      <IoIosMail />
      </Link>
    </div>
  </div>
);

interface FeatureProps {
  Icon: React.ElementType;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ Icon, text }) => (
  <div className="flex flex-col items-center gap-3">
    <Icon className="text-4xl" />
    <p className="text-center">{text}</p>
  </div>
);

export default function Hero() {
  return (
    <Bounded className="bg-[#76A042]/10">
      <div className="flex flex-col lg:flex-row gap-10 pb-2 mt-16">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#76A042]">Notre expertise</p>
          <h1 className="text-7xl font-bold">
            Nous avons <span className="bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent">la solution</span>
          </h1>
          <p className="max-w-[33rem] pb-2">
            Une recherche de fuite ? Une surconsommation d&apos;eau ? Des travaux après sinistre ? Étanchéité, peinture, nettoyage de la toiture ? Nous nous déplaçons rapidement dans l&apos;ouest et le sud de la Réunion. Entreprise agréée par les Assurances
          </p>
          <div className="flex items-center">
            <Button>
              <Link href="/contact" className="">Prendre Rendez-vous</Link>
            </Button>
            <ContactIcons />
          </div>
        </div>
        <Carousel />
      </div>
      <div className="px-2 py-2 mt-4 flex justify-between gap-6 text-xs md:text-lg font-bold">
        <Feature Icon={GiReceiveMoney} text="Agréée par les assurances" />
        <Feature Icon={TfiWrite} text="Devis rapide" />
        <Feature Icon={ImHappy} text="Client satisfait" />
        <Feature Icon={FaTruckDroplet} text="Intervention express" />
        <Feature Icon={FaRegThumbsUp} text="Garantie décennale" />
      </div>
    </Bounded>
  );
}
