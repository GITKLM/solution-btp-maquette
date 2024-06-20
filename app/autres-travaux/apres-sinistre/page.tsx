import Skeleton from '@/components/Skeleton';
import { LiaToolsSolid } from "react-icons/lia";

const Page = () => {
    return (
        <Skeleton
            title="Travaux après sinistre"
            imageSrc="/autres-travaux/sinistre.png"
            imageAlt="Travaux après sinistre"
            IconHref="/autres-travaux"
            buttonText2="Ravalement de façade ?"
            buttonHref2="/autres-travaux/ravalement-facade"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
            IconComponent={LiaToolsSolid}
        />
    );
};

export default Page;
