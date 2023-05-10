import Navbar from '@/components/ui/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='h-screen w-full fixed inset-0 flex flex-col justify-center items-center'>
        <div className='text-6xl text-white font-bold py-8 text-center'><span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-emerald-300'>CoffeeShop</span></div>
        <div className='text-lg px-3 text-orange-200 font-extralight text-center'>Find your new favourite coffee and share it with the rest of the world</div>
        <div className='grid gap-4 md:grid-flow-col grid-flow-row place-content-center mt-8 flex-wrap w-fit'>
          <a href='/coffee' className='block text-center w-72 font-semibold hover:bg-orange-900 py-4 bg-orange-800 rounded-lg text-lg text-white'>Meet Our Coffee</a>
          <a href='/signup' className='block text-center w-72 font-semibold hover:bg-emerald-900 py-4 bg-emerald-800 rounded-lg text-lg text-white'>Join Us</a>
        </div>
      </main>
    </>
  )
}
