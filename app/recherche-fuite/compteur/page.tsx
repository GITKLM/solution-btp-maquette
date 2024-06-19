import Skeleton from '@/components/Skeleton';

const Page = () => {
    return (
        <Skeleton
            title="Recherche de fuite après compteur"
            imageSrc="/fuite/compteur.png"
            imageAlt="Fuite après compteur"
            IconHref="/recherche-fuite"
            buttonText1="Un dégât des eaux ?"
            buttonHref1="/recherche-fuite/degats-des-eaux"
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
