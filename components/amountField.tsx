'use client'
import useCartStore from '@/app/store/cartStore';
import React from 'react'

type Props = {
    pack: string,
    price: number,
    base: number,
}

export default function AmountField({ pack, price, base }: Props) {
    const items: any = useCartStore()
    const reducer = (state: { count: number; }, action: { type: "increment" | "decrement" | "reset" | "submit"; }) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count == 0 ? 0 : state.count - 1 };
            case 'reset':
                return { count: 0 };
            case 'submit':
                items.addItem(pack)
                return { count: 0 };
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    return (
        <div className='flex items-center justify-between w-full py-2 pb-4 border-b h-fit border-b-orange-300'>
            <div className='flex items-center justify-start h-full w-fit'>
            <div className='flex flex-col px-2 mr-4 space-y-1 text-orange-700 '>
                <div className='text-lg font-semibold text-orange-900'>{pack}</div>
                <div className='text-xl font-semibold'>{price}$</div>
                <div className='text-xs'>{base}$ / 100g</div>
            </div>
            <div className='flex flex-row items-center justify-between w-fit'>
                <div className='flex flex-row items-center justify-start rounded-lg'>
                    <button disabled={state.count == 0} onClick={() => dispatch({ type: 'decrement' })} className='flex items-center justify-center w-10 h-10 bg-orange-500 active:bg-orange-800 rounded-l-xl hover:bg-orange-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 stroke-orange-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <div className='flex items-center justify-center h-10 px-6 font-semibold text-orange-800 bg-orange-200'>{state.count}</div>
                    <button onClick={() => dispatch({ type: 'increment' })} className='flex items-center justify-center w-10 h-10 bg-orange-500 rounded-r-xl active:bg-orange-800 hover:bg-orange-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 stroke-orange-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
            </div>
            {state.count > 0 &&<div className='flex items-center justify-center w-fit'>
                <div className='text-lg text-orange-800 w-fit'><b>Total:</b> {state.count * price}$</div>
             <button onClick={() => dispatch({ type: 'submit' })} className='flex items-center justify-center w-10 h-10 ml-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-800 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-orange-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
            </div>
            }
        </div>
    )
}