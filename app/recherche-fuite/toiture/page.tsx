import Skeleton from '@/components/Skeleton';
import { MdOutlineWaterDrop } from 'react-icons/md';

const Page = () => {
    return (
        <Skeleton
            title="Recherche de fuite en hauteur"
            imageSrc="/fuite/toit.jpg"
            imageAlt="Fuite sur les toits"
            IconHref="/recherche-fuite"
            buttonText1="Un dégât des eaux ?"
            buttonHref1="/recherche-fuite/degats-des-eaux"
            buttonText2="Un problème de compteur ?"
            buttonHref2="/recherche-fuite/compteur"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
            IconComponent={MdOutlineWaterDrop}
        />
    );
};

export default Page;
