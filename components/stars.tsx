import React from 'react'

type Props = {
    stars: number
}

export default function Stars({ stars }: Props) {
    return (
        <div className="flex">
            <span className={`${stars >= 1 ? "dark:text-yellow-400 text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 2 ? "dark:text-yellow-400 text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 3 ? "dark:text-yellow-400 text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 4 ? "dark:text-yellow-400 text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 5 ? "dark:text-yellow-400 text-rose-600" : "text-gray-300"} text-xl`}>★</span>
        </div>
    )
}