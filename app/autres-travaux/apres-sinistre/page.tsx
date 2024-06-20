import Skeleton from '@/components/Skeleton';
import { CiHome } from "react-icons/ci";

const Page = () => {
    return (
        <Skeleton
            title="Travaux après sinistre"
            imageSrc="/autres-travaux/sinistre.png"
            imageAlt="Travaux après sinistre"
            IconComponent={CiHome}
            buttonText2="Ravalement de façade ?"
            buttonHref2="/autres-travaux/ravalement-facade"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
        />
    );
};

export default Page;
