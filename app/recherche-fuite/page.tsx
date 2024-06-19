import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import Link from 'next/link';
import RechercheFuiteCards from '@/components/recherche-fuite/RechercheFuiteCards';

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
          Vous <span className="text-[#76A042]">recherchez </span> une fuite ?
        </h1>
        <p className="max-w-[33rem] pb-2">
        Une surconsommation d&apos;eau ? Des traces d&apos;infiltration au plafond ? peinture qui cloque ? Dégats des eaux ? Solution BTP enquête et résout tout vos problème de fuite. Nous nous déplaçons rapidement dans l&apos;ouest et le sud de la Réunion. Entreprise agréée par les Assurances
        </p>
        <div className='flex items-center'>
        <Button>Prendre Rendez-vous</Button>
        <div className="flex gap-2 px-4 py-2">
          <div className="flex gap-1 items-center text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
            <IoIosPhonePortrait />
          </div>
          <div className="items-center flex gap-1 text-4xl p-1 hover:bg-[#76A042] hover:bg-opacity-25 rounded">
            <IoIosMail />
          </div>
        </div>
        </div>
    
     
      </div>
    
      <Image
          src="/test.jpg"
          alt={`Image de test`}
          width={600}
          height={1000}
          className="rounded-2xl object-cover opacity-85"
        />
    </div>

    <div className='flex flex-col lg:flex-row items-center gap-6 pt-8'>
    <h2 className='text-2xl md:text-3xl font-bold'>Quel <span className="text-[#76A042]">type</span> de fuite rencontrez-vous ?</h2>
    <div className='flex gap-8 px-0 lg:px-20'>    
<Link
href="/recherche-fuite/compteur"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>Après compteur</Button>
</Link>
<Link
href="/recherche-fuite/degats-des-eaux"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>dégâts des eaux</Button>
</Link>
<Link
href="/recherche-fuite/toiture"
>
<Button className='bg-[#76A042] hover:bg-[#76A042] hover:bg-opacity-90 text-[#10263E]'>Toiture</Button>
</Link>
    </div>
    </div>
    

    </Bounded>
    <Bounded>
    <RechercheFuiteCards />
    </Bounded>
            </>
    
  )
}
