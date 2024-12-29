import React from 'react'
import LeftSidePicture from '@/sections/forget/left-side-picture'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (
    <div className='flex'>
      <div className='w-1/2'><LeftSidePicture /></div>
      <div className='w-1/2'>{children}</div>
    </div>
  )
}
