import React from 'react'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (

    <div>
      {children}
    </div>
  )
}
