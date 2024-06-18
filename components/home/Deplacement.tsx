import { useMemo } from 'react';
import Bounded from '../Bounded'
import dynamic from 'next/dynamic';


export default function Deplacement() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
), [])

  return (
    <Bounded className='bg-[#76A042]/10'>
        <h4 className="text-balance text-center text-5xl font-medium md:text-7xl pb-4">Notre aire géographique</h4>
<p>Basé à Saint-louis, nous nous déplaçons dans l&apos;ouest et le sud</p>
<div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
      <Map posix={[-21.1158, 55.5160]} />
            </div>
    </Bounded>
  )
}
