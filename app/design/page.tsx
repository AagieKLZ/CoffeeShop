import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <div className='flex flex-row w-full'>
    <div className='flex flex-col w-1/4'>
        <div className='w-full h-12 bg-orange-100'></div>
        <div className='w-full h-12 bg-orange-200'></div>
        <div className='w-full h-12 bg-orange-300'></div>
        <div className='w-full h-12 bg-orange-400'></div>
        <div className='w-full h-12 bg-orange-500'></div>
        <div className='w-full h-12 bg-orange-600'></div>
        <div className='w-full h-12 bg-orange-700'></div>
        <div className='w-full h-12 bg-orange-800'></div>
        <div className='w-full h-12 bg-orange-900'></div>
        <div className='w-full h-12 bg-orange-950'></div>
    </div>
    <div className='flex flex-col w-1/4'>
        <div className='w-full h-12 bg-rose-100'></div>
        <div className='w-full h-12 bg-rose-200'></div>
        <div className='w-full h-12 bg-rose-300'></div>
        <div className='w-full h-12 bg-rose-400'></div>
        <div className='w-full h-12 bg-rose-500'></div>
        <div className='w-full h-12 bg-rose-600'></div>
        <div className='w-full h-12 bg-rose-700'></div>
        <div className='w-full h-12 bg-rose-800'></div>
        <div className='w-full h-12 bg-rose-900'></div>
        <div className='w-full h-12 bg-rose-950'></div>
    </div>
    <div className='flex flex-col w-1/4'>
        <div className='w-full h-12 bg-emerald-100'></div>
        <div className='w-full h-12 bg-emerald-200'></div>
        <div className='w-full h-12 bg-emerald-300'></div>
        <div className='w-full h-12 bg-emerald-400'></div>
        <div className='w-full h-12 bg-emerald-500'></div>
        <div className='w-full h-12 bg-emerald-600'></div>
        <div className='w-full h-12 bg-emerald-700'></div>
        <div className='w-full h-12 bg-emerald-800'></div>
        <div className='w-full h-12 bg-emerald-900'></div>
        <div className='w-full h-12 bg-emerald-950'></div>
    </div>
    <div className='flex flex-col w-1/4'>
        <div className='w-full h-12 bg-primary'></div>
        <div className='w-full h-12 bg-primary-medium'></div>
        <div className='w-full h-12 bg-primary-dark'></div>
        <div className='w-full h-12 bg-primary-darker'></div>
        <div className='w-full h-12 bg-secondary'></div>
    </div>
    </div>
  )
}