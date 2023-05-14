'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

type Props = {}

export default function BackBg({}: Props) {
    const router = useRouter()
  return (
    <div onClick={() => console.log("click")} className='fixed inset-0 z-[105] w-screen h-screen bg-gray-700 bg-opacity-25 flex justify-center items-center'></div>
  )
}