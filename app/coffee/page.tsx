import { Checkbox, RoastCheckbox } from '@/components/loginField'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import Image from 'next/image'
import CoffeeCard from '@/components/coffeeCard'
import Link from 'next/link'
import CoffeePages from '@/components/coffeePages'
import prisma from '@/prisma/client'

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
                <div className='lg:w-[90%] w-full text-left dark:text-orange-300 text-orange-800 border-b dark:border-b-orange-500 border-b-orange-800 pb-4'>
                    <h1 className='block text-3xl font-semibold text-transparent bg-gradient-to-r dark:from-orange-300 from-orange-700 to-emerald-700 dark:to-emerald-300 bg-clip-text'>Our Coffees</h1>
                    <div className='mt-2 ml-4 text-lg font-light dark:font-extralight'>Meet our coffees from all around the globe</div>
                </div>
                <div className='grid w-full grid-cols-1 gap-10 pb-4 my-8 h-fit xl:grid-cols-3 xl:grid-rows-3 md:grid-rows-4 md:grid-cols-2'>
                    {
                        coffees.map((coffee : Coffee, i: number) => (
                            <CoffeeCard key={i} index={i} data={coffee} />
                        ))
                    }
                </div>
                <CoffeePages page={currentPage} maxPages={await getMaxPages()} />
            </main>
        </>
    )
}