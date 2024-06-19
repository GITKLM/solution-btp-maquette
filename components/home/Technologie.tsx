import Image from 'next/image';
import Bounded from '../Bounded';

const items = [
    {
        title: 'Colorant à la Fluorescéine',
        description: "Vous avez des factures d'eau trop élevées ?",
        image: '/technologie-colorant.jpg',
        alt: "Colorant à la Fluorescéine",
    },
    {
        title: 'Caméra thermique',
        description: "De chez vous ou de chez votre voisin ? Nous déterminons les causes cachées",
        image: '/technologie-thermique.png',
        alt: "Caméra thermique",
    },
    {
        title: 'Traçage du réseaux',
        description: "nous cartographions rapidement l’ensemble de votre réseau de canalisations",
        image: '/technologie-cartographie.png',
        alt: "Traçage du réseaux",
    },
    {
        title: 'Machine électro-acoustique',
        description: "Localise l'emplacement des fuites avec précision",
        image: '/technologie-detecteur.png',
        alt: "Machine électro-acoustique'",
    },
];

export default function Technologie() {
    return (
        <Bounded className=''>
            <h4 className="text-balance text-center text-5xl font-medium md:text-7xl pb-4">Notre équipement</h4>
            <p className='mx-auto mt-6 max-w-md font-semibold text-balance text-center bg-gradient-to-b from-[#76A042] to-[#76A042]/60 bg-clip-text not-italic text-transparent'>Technologie de pointe</p>
            
            <div className="mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                {items.map((item, index) => (
                    <div
                        className={`row-span-3 grid grid-rows-subgrid gap-4 rounded-lg glass-container bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 p-4 ${
                            (index % 4 === 1 || index % 4 === 2) ? 'md:col-span-2' : 'md:col-span-1'
                        }`}
                        key={item.title}
                    >
                        <h3 className="text-2xl font-bold">
                            {item.title}
                        </h3>
                        <div className="text-balance">
                            <p className='w-full'>{item.description}</p>
                        </div>
                        <div className="flex justify-center items-center max-h-60">
                            <Image 
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover rounded-md" 
                                width={400}
                                height={20}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Bounded>
    );
}
