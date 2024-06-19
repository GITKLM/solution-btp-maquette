import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

import LogoSansTitre from '../LogoSansTitre'
import Bounded from '../Bounded'
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import Link from 'next/link'

export default function Contact() {
  return (
    <Bounded
    className="relative bg-[#76A042]/10"

    >

<div className="grid mt-16 items-center rounded-xl border border-blue-50 bg-gradient-to-b from-[#76A042]/25 to-[#76A042]/35 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

 <div className='flex flex-col'>

<div className='flex items-center gap-4'>
<div className="w-fit rounded-lg bg-gray-500/10 p-4 text-xl lg:text-3xl">
  <LogoSansTitre 
  width={60}
  height={60}
  />
  </div>
  <p className='text-4xl font-bold'>Solution BTP</p>
</div>
  <div className="mt-6 text-2xl font-normal">
  </div>
  <div className="mt-4 max-w-x prose prose-invert text-2xl">
<IoIosPhonePortrait />
      <p className='mb-2 pt-2 p-4'>06 93 63 70 95</p>
    <IoIosMail />
      <p className='mb-2 pt-2 p-4'>solution.btp@outlook.fr</p>
      <FaHome />
      <p className='mb-2 pt-2 p-4'>

4 Avenue du Père René Payet 97450 Saint-Louis 
</p>    
      <h3 className='font-bold mt-8'>Nos horaires</h3>
    <div className='text-2xl justify-center items-center'>
    <p className='mt-4'>lun - ven</p>
        <p className='mb-2 p-4'>07:00 à 19:00</p>
        <p className=''>sam - dim</p>
        <p className='mb-2 p-4'>fermé</p> 
      </div> 
        </div>
<div className='sm:text-center py-6'>
<Link
href="/contact"
className=''
>
<Button>Rendez-vous en ligne</Button>
</Link>

</div>
  </div> 

  <Image
src="/contact.png"
alt="Une personne sur un toit face à une énorme fuite d'eau"
className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0  lg:translate-x-[15%] rounded-lg"
width={690}
height={500}
sizes="(max-width: 768px) 100vw, 50vw"
/>

    </div>
    </Bounded>


  )
}
