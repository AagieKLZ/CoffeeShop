import { Checkbox, RoastCheckbox } from '@/components/loginField'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import Image from 'next/image'
import CoffeeCard from '@/components/coffeeCard'
import Link from 'next/link'
import CoffeePages from '@/components/coffeePages'
import prisma from '@/prisma/client'
import Filters from '@/components/coffeeFilters'
import CoffeeCardV2 from '@/components/coffeeCardv2'

type Props = {}

async function getCoffees(page : number, query: string) : Promise<Coffee[]>{
    await prisma.$connect()
    const data = await prisma.coffee.findMany({
        where: {
            name: {
                contains: query
            }
        },
        take: 9,
        skip: (page - 1) * 9,
    }) as unknown as Coffee[]
    data.forEach((coffee : Coffee) => {
        coffee.rating = Number(coffee.rating.toString())
        coffee.g_USD = Number(coffee.g_USD.toString())
    })
    await prisma.$disconnect()
    return data
}

async function getMaxPages() : Promise<number> {
    await prisma.$connect()
    const count = await prisma.coffee.count()
    await prisma.$disconnect()
    return Math.ceil(count / 9)
}

export default async function Page( { searchParams } : { searchParams : { page : number, query: string } }) {
    const currentPage: number = searchParams.page ?? 1
    const coffees = await getCoffees(currentPage, searchParams.query ?? '')
    return (
        <>
            <Navbar />
            <main className='relative flex flex-col items-center justify-start w-full h-full px-8 py-4 pb-8 mx-auto mt-16'>
                <div className='lg:w-[90%] w-full text-left text-orange-800 border-b border-b-orange-800 pb-4'>
                    <h1 className='block text-3xl font-semibold text-transparent bg-gradient-to-r from-orange-700 to-emerald-700 bg-clip-text'>Our Coffees</h1>
                    <div className='mt-2 ml-4 text-lg font-light'>Meet our coffees from all around the globe</div>
                </div>
                <Filters />
                <div className='grid w-[85%] grid-cols-1 gap-2 pb-4 my-4 place-items-center h-fit xl:grid-cols-3 xl:grid-rows-3 md:grid-rows-4 md:grid-cols-2'>
                    {
                        coffees.map((coffee : Coffee, i: number) => (
                            <CoffeeCardV2 key={i} data={coffee} index={i} />
                            // <CoffeeCard key={i} data={coffee} index={0} />
                        ))
                    }
                </div>
                <CoffeePages page={currentPage} maxPages={await getMaxPages()} />
            </main>
        </>
    )
}