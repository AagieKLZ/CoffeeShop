import React from 'react'

type Props = {
    stars: number
}

export default function Stars({ stars }: Props) {
    return (
        <div className="flex">
            <span className={`${stars >= 1 ? "text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 2 ? "text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 3 ? "text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 4 ? "text-rose-600" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 5 ? "text-rose-600" : "text-gray-300"} text-xl`}>★</span>
        </div>
    )
}