import Navbar from '@/components/ui/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='fixed inset-0 z-20 flex flex-col items-start justify-center w-full h-screen px-16 bg-transparent'>
        {/* <Image src='/coffee.svg' alt="Coffee" width={250} height={250} className='object-cover w-3/12 lg:w-1/12 md:w-2/12' />
        <div className='py-8 text-6xl font-bold text-center text-white'><span className='text-transparent bg-clip-text bg-gradient-to-r from-coffee-700 to-emerald-700'>CoffeeShop</span></div>
        <div className='px-3 text-lg font-normal text-center text-coffee-950'>Find your new favourite coffee and share it with the rest of the world</div>
        <div className='grid flex-wrap grid-flow-row gap-4 mt-8 md:grid-flow-col place-content-center w-fit'>
          <Link href='/coffee' className='block py-4 text-lg font-semibold text-center text-white rounded-lg bg-coffee-800 w-72 hover:bg-coffee-900'>Meet Our Coffee</Link>
          <Link href='/signup' className='block py-4 text-lg font-semibold text-center text-white rounded-lg w-72 hover:bg-emerald-900 bg-emerald-800'>Join Us</Link>
        </div> */}
        <div className='text-5xl font-semibold lg:text-6xl text-coffee-900'>The right place for coffee lovers</div>
        <div className='mt-2 text-lg lg:text-xl text-emerald-900'>The largest collection of coffees from all around the globe</div>
        <div className='flex flex-row flex-wrap min-w-fit'>
          <Link href='/coffee' className='block py-4 mt-8 mr-4 text-lg font-semibold text-center text-white rounded-lg bg-coffee-800 min-w-fit w-72 hover:bg-coffee-900'>Meet Our Coffee</Link>
          <Link href='/signup' className='block py-4 mt-8 text-lg font-semibold text-center text-white rounded-lg min-w-fit w-72 hover:bg-emerald-900 bg-emerald-800'>Join Us</Link>
        </div>
      </main>
    </>
  )
}
