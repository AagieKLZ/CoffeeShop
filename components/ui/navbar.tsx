import React from 'react'
import Logo from '../logo'
import Link from 'next/link'
import Cart from '../cart'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className='fixed inset-0 w-full text-coffee-900 mx-auto h-16 flex lg:justify-around justify-between lg:px-0 px-4 items-center z-[100] bg-transparnent backdrop-blur'>
            <Link href='/' className='flex flex-row items-center space-x-2 text-transparent bg-gradient-to-r from-coffee-800 to-emerald-800 bg-clip-text'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 stroke-coffee-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <div className='text-xl font-semibold'>CoffeeShop</div>
            </Link>
            <div className='flex-row items-center justify-center hidden h-full space-x-6 lg:flex'>
                <Link href='/coffee' className='flex items-center justify-center h-full text-xl text-center w-36 hover:border-b-4 border-b-coffee-800 group supermenu'>
                    <span className='group:hover:font-semibold'>Coffees</span>
                    <div className='absolute z-[500] bg-yellow-50 flex flex-col w-56 border shadow-xl h-fit top-16 submenu animate-in fade-in-50 slide-in-from-top-2'>
                        <Link href={"#"} className='flex items-center justify-start p-2 text-base border-b hover:bg-coffee-100 border-b-coffee-900 hover:font-semibold'>Coffees</Link>
                        <Link href={"#"} className='flex items-center justify-start p-2 text-base border-b hover:bg-coffee-100 border-b-coffee-900 hover:font-semibold'>Coffee Quiz</Link>
                        <Link href={"#"} className='flex items-center justify-start p-2 text-base hover:bg-coffee-100 hover:font-semibold'>Recomendations</Link>
                    </div>
                </Link>
                <Link href='/pricing' className='flex items-center justify-center h-full text-xl text-center w-36 hover:border-b-4 border-b-coffee-800 hover:font-semibold'>Pricing</Link>
                <Link href='#' className='flex items-center justify-center h-full text-xl text-center w-36 hover:border-b-4 border-b-coffee-800 hover:font-semibold'>About Us</Link>
            </div>
            <div className='flex flex-row items-center space-x-6'>
                <Cart />

                <Link href="/login" className='hidden py-2 font-semibold text-center text-black rounded-lg cursor-pointer bg-coffee-500 lg:block w-36 hover:bg-coffee-600'>Log In</Link>
                <input type="checkbox" name="side" id="side" className='hidden' />
                <label htmlFor='side' className='block lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
            </div>
        </nav>
    )
}