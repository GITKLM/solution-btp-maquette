import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2024 Solution BTP. Tous droits réservés</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
         Politique de Confidentialité
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  )
}
