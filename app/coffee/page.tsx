import { Checkbox, RoastCheckbox } from '@/components/loginField'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import Image from 'next/image'
import CoffeeCard from '@/components/coffeeCard'
import Link from 'next/link'
import CoffeePages from '@/components/coffeePages'
import { useRouter } from 'next/router'

type Props = {}

export default function Page( { searchParams } : { searchParams : { page : number } }) {
    const currentPage: number = searchParams.page ?? 1
    return (
        <>
            <Navbar />
            <main className='h-full w-full mx-auto relative mt-16 py-4 px-8 pb-8 flex flex-col justify-start items-center'>
                <div className='lg:w-[90%] w-full text-left text-orange-300 border-b border-b-orange-500 pb-4'>
                    <h1 className='block text-3xl font-semibold text-transparent bg-gradient-to-r from-orange-300 to-emerald-300 bg-clip-text'>Our Coffees</h1>
                    <div className='mt-2 ml-4 text-lg font-extralight'>Meet our coffees from all around the globe</div>
                </div>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-8 pb-4 w-full place-items-center'>
                    {
                        Array.from({ length: 9 }, (_, i) => i).map((_, i) => (
                            <CoffeeCard key={i} index={i} />
                        ))
                    }
                </div>
                <CoffeePages page={currentPage} />
            </main>
        </>
    )
}