import Skeleton from '@/components/Skeleton';

const Page = () => {
    return (
        <Skeleton
            title="Recherche de fuite après dégât des eaux"
            imageSrc="/fuite/degat-des-eaux.png"
            imageAlt="Fuite après compteur"
            IconHref="/recherche-fuite"
            buttonText1="Un problème de compteur ?"
            buttonHref1="/recherche-fuite/compteur"
            buttonText2="Fuite sur toiture-terrasse ?"
            buttonHref2="/recherche-fuite/toiture"
            h31="Si vous rencontrer une de ces difficultés:"
            paragraph1="Surconsommation d'eau, compteur qui tourne en permanence, de l'eau sur votre sol en extérieur"
            h32="Nous pouvons vous aider"
            paragraph2="Nous détectons et agissons rapidement contre toute cause de fuite"
        />
    );
};

export default Page;
