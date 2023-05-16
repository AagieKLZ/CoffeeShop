import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const textVariants = cva('', {
variants: {
    size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
    },
    weight: {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
    },
    color: {
        primary: 'text-coffee-800',
        "primary-100" : 'text-coffee-100',
        "primary-200" : 'text-coffee-200',
        "primary-300" : 'text-coffee-300',
        "primary-400" : 'text-coffee-400',
        "primary-500" : 'text-coffee-500',
        "primary-600" : 'text-coffee-600',
        "primary-700" : 'text-coffee-700',
        "primary-800" : 'text-coffee-800',
        "primary-900" : 'text-coffee-900',
        secondary: 'text-coffee-300',
        tertiary: 'text-coffee-100',
        rose: 'text-rose-800',
        white: 'text-white',
        black: 'text-black',
    }
},
defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'primary',
},
compoundVariants: [
    {
        weight: 'normal',
        color: 'primary',
        size: 'base',
    },
    {
        weight: 'normal',
        color: 'primary',
        size: 'sm',
    },
    {
        weight: 'normal',
        color: 'primary',
        size: 'xs',
    }
]
})

type textProps = {
    children: React.ReactNode
} & VariantProps<typeof textVariants> & React.HTMLAttributes<HTMLDivElement>

export interface textVariantProps extends textProps {}

export default function Text({children, size, weight, color, ...props}: textVariantProps) {
    return (
        <div className={`${twMerge(textVariants({size, weight, color}))} ${props.className}`} {...props}>{children}</div>
    )
}