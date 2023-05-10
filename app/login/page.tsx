import React from 'react'
import Image from 'next/image'
import { Checkbox, Google, PasswordField, TextField } from '@/components/loginField'
import Logo from '@/components/logo'

type Props = {}

export default function Page({ }: Props) {
  return (
    <>
    <Logo />
      <div className='flex flex-row w-full h-screen overflow-hidden'>
        <div className='h-full relative lg:w-1/2 w-full bg-gray-950 flex flex-col justify-center items-center'>
        <a href="/signup" className='absolute cursor-pointer top-4 font-semibold right-4 bg-orange-600 text-black px-3 w-32 flex justify-between items-center py-2 rounded-lg'>
            <div>Sign Up</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <form className='lg:w-[32rem] w-96 flex flex-col h-fit space-y-6 text-orange-300'>
            <div className='text-2xl text-center font-semibold'>Log In</div>
            <TextField field='Username' id="username" />
            <PasswordField field='Password' id="pw" />
            <Checkbox field='Remember Me' id="remember" />
            <a href='#' className='w-full text-left text-orange-200 underline underline-offset-4 hover:text-orange-600 font-light'>Forgot my password</a>
            <input type="submit" value="Log In" className='w-full bg-orange-800 cursor-pointer hover:bg-orange-900 font-semibold px-2 py-3 rounded-lg text-white mt-6 block' />
          </form>
          <div className='lg:w-[32rem] w-96 mt-6 border-b-2 border-b-orange-600'></div>
          <Google field='Log In With Google' />
        </div>
        <div className='h-screen lg:w-1/2 w-1/3 md:block hidden bg-green-950 relative'>
          <Image src={"/login.jpg"} alt="coffee" width={1000} height={1000} className="h-screen w-full object-cover" />
        </div>
      </div>
      <div className='lg:w-1/2 lg:block hidden lg:left-1/2 h-screen absolute top-0 bg-black bg-opacity-25'></div>
    </>
  )
}