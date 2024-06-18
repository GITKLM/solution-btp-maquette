import Image from 'next/image';
import Bounded from '../Bounded';


const items = [
    {
        title: 'Colorant à la Fluorescéine ',
        description: "Vous avez des factures d'eau trop élevées ?",
        image: '/test.jpg',
        alt: "test",
    },
    {
        title: 'Caméra thermique',
        description: "De chez vous ou de chez votre voisin ? Nous déterminons les causes cachées",
        image: '/test.jpg',
        alt: "test",
    },
    {
        title: 'Traçage du réseaux',
        description: "Notre spécialité, nous détectons les fuites par utilisation de fumigène",
        image: '/test.jpg',
        alt: "test",
    },
    {
        title: 'Machine électro-acoustique',
        description: "Notre spécialité, nous détectons les fuites par utilisation de fumigène",
        image: '/test.jpg',
        alt: "test",
    },
];

export default function Technologie() {
    return (
 <Bounded className=''>
       <h4 className="text-balance text-center text-5xl font-medium md:text-7xl pb-4">Notre équipement</h4>
     <p>Technologie de pointe</p>
    
     <div className="mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
         {items.map((item, index) => (
             <div
                 className={`row-span-3 grid grid-rows-subgrid gap-4 rounded-lg glass-container bg-[#76A042]/10 p-4 ${
                     (index % 4 === 1 || index % 4 === 2) ? 'md:col-span-2' : 'md:col-span-1'
                 }`}
                 key={item.title}
             >
                 <h3 className="text-2xl">
                     {item.title}
                 </h3>
                 <div className=" text-balance">
                     <p className='w-full'>{item.description}</p>
                 </div>
                 <Image 
                     src={item.image}
                     alt={item.alt}
                     className="max-h-36 w-auto" 
                     width={200}
                     height={100}
                 />
             </div>
         ))}
     </div>
 </Bounded>




    );
}
