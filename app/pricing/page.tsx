import Navbar from '@/components/ui/navbar'
import React from 'react'
import { PricingComponent, PricingBody, PricingHead, PricingItem } from '@/components/pricing'
import Link from 'next/link'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
        <Navbar />
        <main className='relative flex flex-col items-center justify-start w-full px-8 py-4 pt-16 pb-8 mx-auto'>
            <h1 className='mt-4 text-4xl font-semibold text-center text-coffee-900'>Join Our Community</h1>
            <div className='flex flex-col items-start md:w-3/4 w-[90%] mt-8 lg:space-y-0 space-y-4 lg:space-x-4 lg:flex-row xl:w-2/3 h-fit'>
              <PricingComponent>
                <PricingHead name='Free Tier' />
                <PricingBody>
                  <div className='flex flex-col space-y-4 text-lg'>
                    <PricingItem name='Up to 2 Kg order/month' />
                    <PricingItem name='No transport fee for first 10 orders' />
                    <PricingItem name='Order tracking' />
                    <PricingItem name='Email support' />
                  </div>
                  <div className='flex flex-col items-center justify-start w-full space-y-4'>
                    <div className='text-coffee-900 lg:text-3xl'>0.00<span className='text-base'>$/month</span></div>
                  <Link href={"#"} className='w-2/3 py-2 font-semibold text-center bg-coffee-500 rounded-xl hover:bg-coffee-600 active:scale-95'>Join Now</Link>
                  </div>
                </PricingBody>
              </PricingComponent>
              <PricingComponent>
                <PricingHead name='Pro Tier' />
                <PricingBody>
                  <div className='flex flex-col space-y-2 text-lg lg:space-y-4'>
                    <PricingItem name='Priority support' />
                    <PricingItem name='No transport fee for 3 orders/month' />
                    <PricingItem name='Join coffee communities' new={true} />
                    <PricingItem name='Priority support' />
                  </div>
                  <div className='flex flex-col items-center justify-start w-full space-y-4'>
                    <div className='text-coffee-900 lg:text-3xl'>7.99<span className='text-base'>$/month</span></div>
                  <Link href={"#"} className='w-2/3 py-2 font-semibold text-center bg-coffee-500 rounded-xl hover:bg-coffee-600 active:scale-95'>Join Now</Link>
                  </div>
                </PricingBody>
              </PricingComponent>
              <PricingComponent>
                <PricingHead name='Business' />
                <PricingBody>
                  <div className='flex flex-col space-y-4 text-lg'>
                    <PricingItem name='Up to 2 Kg order/month' />
                    <PricingItem name='No transport fee for first 10 orders' />
                    <PricingItem name='Order tracking' />
                    <PricingItem name='Email support' />
                  </div>
                  <Link href={"#"} className='w-2/3 py-2 font-semibold text-center text-coffee-100 bg-coffee-900 rounded-xl hover:bg-coffee-950 active:scale-95'>Contact Sales</Link>
                </PricingBody>
              </PricingComponent>
            </div>
        </main>
    </>
  )
}