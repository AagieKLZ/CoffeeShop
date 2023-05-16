import React from 'react'
import Image from 'next/image'
import { Checkbox, Google, PasswordField, TextField } from '@/components/loginField'
import Logo from '@/components/logo'
import Link from 'next/link'

type Props = {}

export default function Page({ }: Props) {
  return (
    <>
      <div className='flex flex-row w-full h-screen overflow-hidden'>
        <div className='h-full relative lg:w-1/2 w-full bg-gray-950 flex flex-col justify-center items-center'>
          <Link href="/login" replace={true} className='absolute cursor-pointer top-4 font-semibold right-4 bg-coffee-600 text-black px-3 w-32 flex justify-between items-center py-2 rounded-lg'>
            <div>Log In</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
          <form className='lg:w-[32rem] w-96 flex flex-col h-fit space-y-6 text-coffee-300'>
            <div className='text-2xl text-center font-semibold'>Sign Up</div>
            <TextField field='Username' id="username" />
            <TextField field='Email' id="email" />
            <PasswordField field='Password' id="pw" />
            <PasswordField field='Repeat Password' id="pw" />
            <input type="submit" value="Sign Up" className='w-full bg-coffee-800 cursor-pointer hover:bg-coffee-900 font-semibold px-2 py-3 rounded-lg text-white mt-6 block' />
          </form>
          <div className='lg:w-[32rem] w-96 mt-6 border-b-2 border-b-coffee-600'></div>
          <Google field='Sign Up With Google' />
        </div>
        <div className='h-screen lg:w-1/2 w-1/3 md:block hidden bg-green-950 relative'>
          <Image src={"/login.jpg"} alt="coffee" width={1000} height={1000} className="h-screen w-full object-cover" />
        </div>
      </div>
      <div className='lg:w-1/2 lg:block hidden lg:left-1/2 h-screen absolute top-0 bg-black bg-opacity-25'></div>
      <Logo />
    </>
  )
}