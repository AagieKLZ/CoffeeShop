import Navbar from '@/components/ui/navbar'
import React from 'react'
import Image from 'next/image'
import AmountField from '@/components/amountField'
import { Satisfy } from 'next/font/google'
import Valoration from '@/components/valoration'
import prisma from '@/prisma/client'

const satisfy = Satisfy({ style: 'normal', weight: "400", subsets: ['latin'] })

type Props = {}

const getCoffee = async (name: string): Promise<Coffee | null> => {
  prisma.$connect()
  const data = await prisma.coffee.findFirst({
    where: {
      name: name
    }
  }) as unknown as Coffee
  prisma.$disconnect()
  if (!data) return null
  if (data && data.rating) {
    data.rating = Number(data.rating?.toString())
  }
  return data as unknown as Coffee satisfies Coffee
}

export default async function Page({ params }: { params: { name: string } }) {
  const coffee = await getCoffee(decodeURI(params.name))
  if (coffee){
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-full h-full animate-in fade-in-10'>
        <main className='w-[90%] mx-auto h-full flex xl:flex-row flex-col justify-between items-center pt-24'>
          <div className='xl:w-1/2 w-2/3 h-full py-4 xl:h-[60vh] px-4 animate-in slide-in-from-left-1/2 duration-200'>
            <Image src="/beans.jpg" alt="Coffee" width={1200} height={1000} className='object-cover h-[50vh]' />
          </div>
          <div className='flex flex-col w-full h-full px-12 duration-200 border-l-2 xl:w-1/2 border-l-orange-500 animate-in slide-in-from-right-1/2'>
            <div className='w-full text-2xl font-semibold text-left text-orange-900 dark:text-orange-200'>{coffee.name}</div>
            <div className='w-full italic font-semibold text-left text-orange-800 dark:text-orange-200 text-md'>{coffee.roaster}</div>
            <div className='flex flex-row flex-wrap w-full my-4'>
              <div className='flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full w-fit bg-emerald-900 text-emerald-200'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-emerald-200'>
                  <path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path>
                  <path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path>
                </svg>
                <div className='ml-2'>{coffee.roast}</div>
              </div>
              <div className='flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full text-rose-200 bg-rose-900 w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-rose-200">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clipRule="evenodd" />
                </svg>
                <div className='ml-2'>{coffee.origin_1}</div>
              </div>
              <div className='flex flex-row items-center justify-start px-4 py-1 mt-4 mr-4 rounded-full text-rose-200 bg-rose-900 w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-rose-200">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clipRule="evenodd" />
                </svg>
                <div className='ml-2'>{coffee.origin_2}</div>
              </div>
              <div className='flex flex-row items-center justify-start px-4 py-1 mt-4 text-blue-200 bg-blue-900 rounded-full w-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className='ml-2'>{coffee.g_USD}$ / 100g</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-3xl text-rose-700 dark:text-yellow-400">★</span>
              <span className="text-3xl text-rose-700 dark:text-yellow-400">★</span>
              <span className="text-3xl text-rose-700 dark:text-yellow-400">★</span>
              <span className="text-3xl text-rose-700 dark:text-yellow-400">★</span>
              <span className="text-3xl text-gray-300">★</span>
              <div className='ml-4 text-2xl font-semibold dark:text-yellow-300 text-rose-700'>{(coffee.rating / 20).toFixed(1)}</div>
            </div>
            <div className='mt-4 text-orange-800 dark:text-orange-200 dark:text-extralight text-light'>
              {/* Produced by the Stille family entirely of the Gesha (also spelled Geisha) variety of Arabica, and processed by the washed method (fruit skin and flesh are removed from the beans before they are dried). This is an early harvest of the Monarch Estate Hawaiian Gesha and roasted a bit darker than the farm’s main harvest of that variety. Monarch Coffee is an award-winning coffee farm and specialty roaster of 100% estate-grown Kona coffee on the Big Island of Hawai’i. Visit www.monarchcoffee.com for more information. */}
              {coffee.desc_2}
            </div>
            <div className='flex flex-col mt-8 border-t dark:border-t-orange-300 border-t-orange-800'>
              <AmountField pack='200g Pack' price={Number((coffee.g_USD * 2).toFixed(2))} base={Number(coffee.g_USD.toFixed(2))} />
              <AmountField pack='400g Pack' price={Number((coffee.g_USD * 4 * 0.95).toFixed(2))} base={Number((coffee.g_USD*0.95).toFixed(2))} />
              <AmountField pack='600g Pack' price={Number((coffee.g_USD * 6 * 0.9).toFixed(2))} base={Number((coffee.g_USD*0.9).toFixed(2))} />
              <AmountField pack='800g Pack' price={Number((coffee.g_USD * 8 * 0.85).toFixed(2))} base={Number((coffee.g_USD*0.85).toFixed(2))} />
            </div>
          </div>
        </main>
        <div className={`w-[90%] mt-4 pb-4 text-white mx-auto flex flex-col animate-in slide-in-from-bottom`}>
          <span className='py-4 text-2xl font-semibold dark:text-emerald-300 text-emerald-700'>User Reviews</span>
          {
            coffee.desc_1.split(".").map((val: string, i: number) => {
              if (val.trim().length > 0) {
              return (
                <Valoration key={`val_${i}`} stars={Math.floor(Math.random()*5 + 1)} content={val} />
              )
              }
            })
          }
          {
            coffee.desc_3.split(".").map((val: string, i: number) => {
              if (val.trim().length > 0) {
              return (
                <Valoration key={`val_${i}`} stars={Math.floor(Math.random()*5 + 1)} content={val} />
              )
              }
            })
          }
        </div>
        <div className='flex items-center justify-center w-full pb-2 mt-4 space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className='cursor-pointer hover:fill-sky-600 fill-sky-500'><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className='cursor-pointer hover:fill-blue-500 fill-blue-600'><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className='cursor-pointer hover:fill-rose-500 fill-rose-400'><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>      
        </div>
        </div>
    </>
  )
  } else {
    return (
      <>
      <Navbar />
      <main className='flex flex-col items-center justify-center w-full h-screen'>
        <span className='text-2xl font-semibold text-emerald-700'>This page does not exist</span>
      </main>
      </>
    )
  }
}