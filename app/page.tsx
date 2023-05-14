import Navbar from '@/components/ui/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='fixed inset-0 flex flex-col items-center justify-center w-full h-screen bg-yellow-50'>
        <Image src='/coffee.svg' alt="Coffee" width={250} height={250} className='object-cover w-3/12 lg:w-1/12 md:w-2/12' />
        <div className='py-8 text-6xl font-bold text-center text-white'><span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-emerald-700'>CoffeeShop</span></div>
        <div className='px-3 text-lg font-normal text-center text-orange-950'>Find your new favourite coffee and share it with the rest of the world</div>
        <div className='grid flex-wrap grid-flow-row gap-4 mt-8 md:grid-flow-col place-content-center w-fit'>
          <Link href='/coffee' className='block py-4 text-lg font-semibold text-center text-white bg-orange-800 rounded-lg w-72 hover:bg-orange-900'>Meet Our Coffee</Link>
          <Link href='/signup' className='block py-4 text-lg font-semibold text-center text-white rounded-lg w-72 hover:bg-emerald-900 bg-emerald-800'>Join Us</Link>
        </div>
      </main>
    </>
  )
}
