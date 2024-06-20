import Skeleton from '@/components/Skeleton';
import { LiaToolsSolid } from "react-icons/lia";

const Page = () => {
    return (
        <Skeleton
        title="Travaux de ravalement de façade"
        imageSrc="/autres-travaux/ravalement.png"
        imageAlt="Travaux de ravalement de façade"
            IconHref="/autres-travaux"
                     buttonText2="Travaux après sinistre ?"
            buttonHref2="/autres-travaux/apres-sinistre"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
            IconComponent={LiaToolsSolid}
        />
    );
};

export default Page;
