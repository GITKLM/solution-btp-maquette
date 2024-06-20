import Skeleton from '@/components/Skeleton';
import { MdOutlineRoofing } from 'react-icons/md';

const Page = () => {
    return (
        <Skeleton
            title="Travaux de peinture de votre toit"
            imageSrc="/toiture/peinture.png"
            imageAlt="Travaux de peinture du toit"
            IconHref="/travaux-toiture"
            buttonText1="nettoyage de toiture ?"
            buttonHref1="/travaux-toiture/nettoyage"
            buttonText2="Etenchéité de toiture ?"
            buttonHref2="/travaux-toiture/etencheite"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
            IconComponent={MdOutlineRoofing}
        />
    );
};

export default Page;
