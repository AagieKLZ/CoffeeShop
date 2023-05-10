import React from 'react'
import Logo from '../logo'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className='fixed inset-0 w-[90%] mx-auto h-16 border-b border-b-orange-500 text-orange-500 flex lg:justify-around justify-between lg:px-0 px-4 items-center z-50 bg-gray-950 bg-opacity-25 backdrop-blur'>
            <a href='/' className='flex flex-row items-center space-x-2 text-transparent bg-gradient-to-r from-orange-300 to-emerald-300 bg-clip-text'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 stroke-orange-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
                <div className='font-semibold text-xl'>CoffeeShop</div>
            </a>
            <div className='lg:flex hidden flex-row justify-center space-x-6 h-full items-center'>
                <a href='#' className='w-36 hover:border-b-4 border-b-orange-500 hover:font-semibold text-center flex justify-center items-center h-full text-xl'>Shop</a>
                <a href='/coffee' className='w-36 hover:border-b-4 border-b-orange-500 hover:font-semibold text-center flex justify-center items-center h-full text-xl'>Our Coffee</a>
                <a href='#' className='w-36 hover:border-b-4 border-b-orange-500 hover:font-semibold text-center flex justify-center items-center h-full text-xl'>About Us</a>
            </div>
            <a href="/login" className='bg-orange-500 lg:block hidden text-black font-semibold w-36 text-center hover:bg-orange-600 cursor-pointer py-2 rounded-lg'>Log In</a>
            <input type="checkbox" name="side" id="side" className='hidden' />
            <label htmlFor='side' className='lg:hidden block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </label>
        </nav>
    )
}