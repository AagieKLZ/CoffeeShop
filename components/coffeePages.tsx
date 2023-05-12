'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
    page: number,
    maxPages: number
}

export default function CoffeePages({ page, maxPages }: Props) {
    function add (a: any, b: any){
        return Number(a) + Number(b)
    }
    
    return (
        <div className='flex flex-row justify-center h-full w-fit'>
            
            {
                page > 1 && <Link href={`./coffee?page=${(Number(page) - 1)}`} className='flex items-center justify-center w-12 h-12 mb-4 text-orange-200 bg-orange-800 hover:bg-orange-500 hover:text-black'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></Link>

            }
            {
                
                <>
                  { page > 3 && <Link href={`./coffee?page=${page - 3 }`} key={page - 3} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{page - 3}</Link>}
                  { page > 2 && <Link href={`./coffee?page=${page - 2 }`} key={page - 2} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{page - 2}</Link>}
                  { page > 1 && <Link href={`./coffee?page=${page - 1 }`} key={page - 1} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{page - 1}</Link>}
                  <Link href={`./coffee?page=${page}`} key={page} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-500 text-black hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{page}</Link>
                  { page < maxPages - 1 && <Link href={`./coffee?page=${add(page, 1)}`} key={page + 1} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{add(page, 1)}</Link>}
                  { page < maxPages - 2 && <Link href={`./coffee?page=${add(page, 2)}`} key={page + 2} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{add(page, 2)}</Link>}
                  { page < maxPages - 3 && <Link href={`./coffee?page=${add(page, 3)}`} key={page + 3} onClick={() => scrollTo(0, 0)} className={`h-12 w-12 bg-orange-800 text-orange-200 hover:bg-orange-500 hover:text-black mb-4 font-semibold text-lg flex justify-center items-center`}>{add(page, 3)}</Link>}
                </>
            }
            {
                page < maxPages && <Link href={`./coffee?page=${(Number(page) + 1)}`} className='flex items-center justify-center w-12 h-12 mb-4 text-orange-200 bg-orange-800 hover:bg-orange-500 hover:text-black'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg></Link>

            }
        </div>
    )
}