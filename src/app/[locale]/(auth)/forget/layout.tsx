import React from 'react'
import LeftSideSection from '@/sections/forget/left-side-section'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (

    <div className='flex'>
      <div className='w-1/2'><LeftSideSection /></div>
      <div className='w-1/2'>{children}</div>
    </div>
  )
}
