'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    index: number
}

export default function CoffeeCard({ index }: Props) {
    const [visible, setVisible] = React.useState(false)
    React.useEffect(() => {
      setTimeout(() => {
        setVisible(true)
        }, 100 * index)
    }, [])
    
    return (
        <div className={`w-full coffeecard h-fit relative rounded-xl mx-2 ${visible ? "opacity-100" : "opacity-0"}`} style={{animationDelay : `0.${index}s`}}>
            <div className='absolute h-full w-full p-1 top-0 left-0 rounded-xl z-20'>
                <Image src={"/coffee.jpg"} alt="coffee" width={1000} height={1000} className='rounded-xl bg-opacity-50 w-full h-full object-cover' />
            </div>
            <div className='h-1/2 relative top-1/2 bg-opacity-50 backdrop-blur-sm bg-orange-950 rounded-xl p-4 z-50'>
                <div className='text-white text-xl font-semibold'>Brazil Peixoto Peaberry</div>
                <div className='w-full flex flex-row space-x-4 flex-wrap'>
                    <div className='mt-4 flex flex-row justify-start items-center rounded-full w-fit px-4 py-1 bg-emerald-900 text-emerald-200'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-emerald-200'>
                            <path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path>
                            <path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path>
                        </svg>
                        <div className='ml-2'>Dark</div>
                    </div>
                    <div className='mt-4 flex flex-row justify-start items-center rounded-full w-fit px-4 py-1 bg-yellow-900 text-yellow-200'>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-yellow-200">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clipRule="evenodd" />
                        </svg>

                        <div className='ml-2'>Asia</div>
                    </div>
                </div>
                <div className='text-orange-200 text-extralight mt-12'>
                    Produced by the Stille family entirely of the Gesha (also spelled Geisha) variety of Arabica, and processed by the washed method (fruit skin and flesh are removed from the beans before they are dried). This is an early harvest of the Monarch Estate Hawaiian Gesha and roasted a bit darker than the farm’s main harvest of that variety. Monarch Coffee is an award-winning coffee farm and specialty roaster of 100% estate-grown Kona coffee on the Big Island of Hawai’i. Visit www.monarchcoffee.com for more information.
                </div>
                <div className='flex w-full flex-row items-center justify-between mt-4'>
                    <Link href='./coffee/abc' className='py-2 w-36 bg-orange-800 text-orange-200 hover:bg-orange-700 px-2 text-center rounded-lg flex justify-between'>
                        <div>Learn More</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>

                    </Link>
                    <Link href='#' className='bg-emerald-800 text-emerald-200 hover:bg-emerald-700 py-2 px-2 text-center rounded-lg ml-4 w-32 flex justify-between items-center'>
                        <div>Buy</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>

                    </Link>
                </div>
            </div>
        </div>
    )
}