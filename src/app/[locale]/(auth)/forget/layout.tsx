import React from 'react'
import LeftSidePicture from '@/sections/forget/left-side-picture'

type RootLayoutPropTypes = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (
    <div className='flex bg-white items-center'>
        <LeftSidePicture />
        {children}
    </div>
  )
}
