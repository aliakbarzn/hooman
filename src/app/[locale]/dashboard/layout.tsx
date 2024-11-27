import Dashboard from '@/sections/dashboard/Dashboard'
import React from 'react'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutPropTypes) {
  return (
    <div className='flex'>
      <Dashboard />
      {children}
    </div>
  )
}
