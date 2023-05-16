import React from 'react'

type Props = {
    field: string,
    id?: string
}

export function TextField({ field, id }: Props) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id}>{field}</label>
            <input type="text" name={id} id={id} className='bg-gray-800 p-2 rounded-lg mt-1 text-white' />
        </div>
    )
}

export function PasswordField({ field, id }: Props) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id}>{field}</label>
            <input type="password" name={id} id={id} className='bg-gray-800 p-2 rounded-lg mt-1 text-white' />
        </div>
    )
}

export function Checkbox({ field, id }: Props) {
    return (
        <div className='flex w-full'>
            <input type="checkbox" name={id} id={id} className='accent-coffee-800' />
            <label htmlFor={id} className='ml-2 select-none hover:text-coffee-400'>{field}</label>
        </div>
    )
}

type RoastProps = {
    field: string,
    id?: string,
    type: "light" | "medium-light" | "medium" | "medium-dark" | "dark"
}

export function RoastCheckbox({ field, id, type }: RoastProps) {
    const color = (type: RoastProps["type"]) => {switch(type) {
            case "light":
                return "yellow-300"
            case "medium-light":
                return "yellow-500"
            case "medium":
                return "yellow-700"
            case "medium-dark":
                return "yellow-900"
            case "dark":
                return "black"
        }
    }
    return (
        <div className='flex w-full'>
            <input type="checkbox" name={id} id={id} className={`accent-${color(type)}`} />
            <label htmlFor={id} className={`ml-2 select-none hover:text-${color(type)}`}>{field}</label>
        </div>
    )
}

export function Google({ field }: Props) {
    return(
    <button className='mt-6 lg:w-[32rem] w-96 rounded-lg bg-coffee-500 hover:bg-coffee-600 items-center text-black flex flex-row justify-around px-2 py-3 font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill='black' viewBox="0 0 24 24"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
        <div>{field}</div>
    </button>
    )
}