import React from 'react'
import Stars from './stars'

type Props = {
    stars: number,
    content: string
}

export default function Valoration({ stars, content }: Props) {
  return (
    <div className='flex flex-row items-center w-full px-8 border-t border-b h-28 dark:border-t-emerald-500 border-t-emerald-700 border-b-emerald-700 dark:border-b-emerald-500'>
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 fill-emerald-600">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='flex flex-col justify-start ml-4'>
              <Stars stars={stars} />
              <div className='text-lg dark:text-emerald-200 text-emerald-700'>
                {content}
              </div>
            </div>
          </div>
  )
}