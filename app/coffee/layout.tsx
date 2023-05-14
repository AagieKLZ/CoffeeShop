import React from 'react'

type Props = {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function Layout({ children, modal }: Props) {
  return (
    <html>
      <body>
        { children }
        { modal }
      </body>
    </html>
  )
}