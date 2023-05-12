'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
    page: number,
    maxPages: number
}

export default function CoffeePages({ page, maxPages }: Props) {
    
    return (
        <div className='flex flex-row justify-center h-full mb-4 w-fit'>
            {
                page > 1 && <Link href={`./coffee?page=${page - 1}`} className='flex items-center justify-center w-12 h-12 mb-4 text-orange-200 bg-orange-800 hover:bg-orange-500 hover:text-black'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></Link>

            }
            {
                Array.from({ length: maxPages }, (_, i) => i).map((_, i : number) => (
                    <Link href={`./coffee?page=${i + 1}`} key={i} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 ${page == (i + 1) ? "bg-orange-500 text-black" : "bg-orange-800 text-orange-200"} hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{i + 1}</Link>
                ))
            }
            {
                page < maxPages && <Link href={`./coffee?page=${(Number(page) + 1)}`} className='flex items-center justify-center w-12 h-12 mb-4 text-orange-200 bg-orange-800 hover:bg-orange-500 hover:text-black'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></Link>

            }
        </div>
    )
}