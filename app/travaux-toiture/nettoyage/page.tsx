import Skeleton from '@/components/Skeleton';
import { MdOutlineRoofing } from 'react-icons/md';

const Page = () => {
    return (
        <Skeleton
            title="Travaux de nettoyage de votre toiture"
            imageSrc="/toiture/nettoyage.png"
            imageAlt="Travaux de nettoyage du toit"
            IconHref="/travaux-toiture"
            buttonText1="Etenchéité de toiture ?"
            buttonHref1="/travaux-toiture/etencheite"
            buttonText2="Peinture du toit ?"
            buttonHref2="/travaux-toiture/peinture"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
            IconComponent={MdOutlineRoofing}
        />
    );
};

export default Page;
