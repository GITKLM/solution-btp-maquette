import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoSansTitre from '@/components/LogoSansTitre';
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWaterDrop } from "react-icons/md";

export default function page() {
  return (
            <>

          <Bounded
    className="relative"

    >

<h3 className='text-balance text-center text-7xl mb-20 font-bold md:text-5xl'>Recherche de fuite après compteur</h3>
    <div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

     <div className='flex flex-col'>
<div className='flex gap-2 items-center mb-4'>
        <Link
          href="/"
          className='pointer max-w-6 text-lg'
          ><IoHomeOutline />
        </Link>
          <span className='text-[#76A042] font-semibold'>/</span>
          <Link
          href="/recherche-fuite"
          className='pointer max-w-6 text-lg'
          >
           <MdOutlineWaterDrop />
        </Link>


</div>
      <div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
      <LogoSansTitre 
      width={60}
      height={60}
      />
      </div>
      <div className="mt-6 text-2xl font-normal">
      <p>Modalités de subvention</p>
      </div>
      <div className="mt-4 max-w-x prose prose-invert">
        <h3 className='font-bold text-md'>Pour les entreprises de moins de 10 salariés :</h3>
      <p className='mb-2'>80 % des dépenses éligibles et 3 200 euros de subvention maximum</p>
        <h3 className='font-bold text-md'>Pour les entreprises de 10 à 19 salariés :</h3>
      <p>50 % des dépenses éligibles et 2 000 euros de subvention maximum.</p>
      </div>
<div className='text-center py-6'>
<Button>Contactez-nous</Button>


</div>
      </div> 

      <Image
  src="/test.jpg"
  alt="test"
  className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0  lg:translate-x-[15%] rounded-lg"
  width={690}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

        </div>
    </Bounded>
    <div className='flex flex-row justify-around'>
 <div> <p>Un dégât des eaux ?</p></div>
 <div> <p>Fuite sur toiture-terrasse ?</p></div>
</div>
            </>
    
  )
}
