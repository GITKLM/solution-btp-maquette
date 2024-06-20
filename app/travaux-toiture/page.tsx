import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import Link from 'next/link';
import ToitureCards from '@/components/cards/ToitureCards';

export default function page() {
  return (
            <>
    <Bounded className='bg-[#76A042] bg-opacity-10'>
    <div className="flex flex-col lg:flex-row gap-10 pb-2">
    
          <div className="flex flex-col gap-2">
          <Link
          href="/"
          className='pointer max-w-6 text-lg'
          ><IoHomeOutline /></Link>
        <p className="text-sm text-[#76A042]">Notre solution</p>
        <h1 className="text-6xl font-bold">
          Besoin de <span className="text-[#76A042]">rénover </span>votre toiture ?
        </h1>
        <p className="max-w-[33rem] pb-2">
        Une surconsommation d&apos;eau ? Des traces d&apos;infiltration au plafond ? peinture qui cloque ? Dégats des eaux ? Solution BTP enquête et résout tout vos problème de fuite. Nous nous déplaçons rapidement dans l&apos;ouest et le sud de la Réunion. Entreprise agréée par les Assurances
        </p>
        <div className='flex items-center'>
        <Button>
              <Link href="/contact" className="">Prendre Rendez-vous</Link>
            </Button>
        <div className="flex gap-2 px-4 py-2">
          <div className="flex gap-1 items-center text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
          <Link
              href={`tel:0693637095`} 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <IoIosPhonePortrait />
          </Link>
          </div>
          <div className="items-center flex gap-1 text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
          <Link
              href={`mailto:solution.btp@outlook.fr`} 
              target="_blank" 
              rel="noopener noreferrer"
         >
            <IoIosMail />
         </Link>
          </div>
        </div>
        </div>
    
     
      </div>
    
      <Image
          src="/toiture/toit.png"
          alt={`Professionnel qui travail sur un toit`}
          width={1100}
          height={400}
          className="rounded-2xl object-cover opacity-85"
        />
    </div>

    <div className='flex flex-col lg:flex-row items-center gap-6 pt-8'>
    <h2 className='text-2xl md:text-3xl font-bold'>Notre  <span className="text-[#76A042]">expertise </span> toiture pour vous : </h2>
    <div className='flex gap-8 px-0 lg:px-20'>    
<Link
href="/travaux-toiture/etencheite"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>Etenchéité</Button>
</Link>
<Link
href="/travaux-toiture/peinture"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>Peinture</Button>
</Link>
<Link
href="/travaux-toiture/nettoyage"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>Nettoyage</Button>
</Link>
    </div>
    </div>
    

    </Bounded>
   <Bounded>
    <ToitureCards />
    </Bounded>
            </>
    
  )
}
