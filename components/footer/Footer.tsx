import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2024 Solution BTP. Tous droits réservés</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10 text-xs sm:text-base">
        <Link href="/politique-confidentialité" className="text-gray-500">
         Politique de Confidentialité
        </Link>
        <Link href="/mentions-légales" className="text-gray-500">
          Mentions légales
        </Link>
        <Link href="http://siteweb974.re" className="text-gray-500">
         Design by SW974
        </Link>
      </div>
    </div>
  )
}
