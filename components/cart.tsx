'use client'
import useCartStore from '@/app/store/cartStore'
import React from 'react'

type Props = {}

export default function Cart({ }: Props) {
    const items: CartStore = useCartStore() as CartStore
    const [show, setShow] = React.useState(false)
    return (
        <div className='relative h-fit w-fit mr-8'>
            <button onClick={() => setShow(n => !n)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></button>
            <div className='absolute -top-2 -right-2 h-4 w-4 flex justify-center items-center text-white rounded-full bg-red-500 text-xs font-semibold'>{items.items.length}</div>
            {show &&<div className='absolute animate-in slide-in-from-top-5 fade-in-20 duration-75 top-11 left-0 w-[350px] h-fit bg-coffee-200 rounded-lg'>
                    <div className='flex flex-row items-center justify-around py-1 border-b-2 bg-coffee-300 rounded-t-lg border-b-coffee-500'>
                        <button className='px-3 w-24 py-1 rounded-lg bg-red-700 text-white font-semibold my-1'>Clear</button>
                        <button className='px-3 w-24 py-1 rounded-lg bg-emerald-700 text-white font-semibold my-1'>Pay</button>
                    </div>
                <div className='flex flex-row justify-between items-center px-2 py-1 border-b-coffee-600 border-b text-coffee-900 last:border-b-0'>
                    <div className='flex flex-col justify-between'>
                       <div className='font-semibold'>Andi Sumatra</div>
                       <div>400g</div>
                    </div>
                    <input type="number" name="am" id="am" defaultValue={2} className='w-12' />
                    <div>12€</div>
                </div>
                <div className='flex flex-row justify-between items-center px-2 py-1 border-b-coffee-600 border-b text-coffee-900 last:border-b-0'>
                    <div className='flex flex-col justify-between'>
                       <div className='font-semibold'>Andi Sumatra</div>
                       <div>400g</div>
                    </div>
                    <input type="number" name="am" id="am" defaultValue={2} className='w-12' />
                    <div>12€</div>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 border-b-coffee-600 border-b last:border-b-0'>
                    <div className='font-bold'>Total</div>
                    <div>12€</div>
                </div>
            </div>}
        </div>
    )
}