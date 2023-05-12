import React from 'react'

type Props = {
    stars: number
}

export default function Stars({ stars }: Props) {
    return (
        <div className="flex">
            <span className={`${stars >= 1 ? "text-yellow-400" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 2 ? "text-yellow-400" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 3 ? "text-yellow-400" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 4 ? "text-yellow-400" : "text-gray-300"} text-xl`}>★</span>
            <span className={`${stars >= 5 ? "text-yellow-400" : "text-gray-300"} text-xl`}>★</span>
        </div>
    )
}