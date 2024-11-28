import Dashboard from '@/sections/dashboard/Dashboard'
import React from 'react'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutPropTypes) {
  return (
    <div className='flex'>
      <Dashboard />
      <div className='w-full'>
      {children}
      </div>
    </div>
  )
}
