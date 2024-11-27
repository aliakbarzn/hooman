import ServicesDashboard from '@/sections/aboutThai/services-dashboard'
import CardsContainer from '@/sections/aboutThai/cards-container'
import ContentContainer from '@/sections/aboutThai/content-container'
import React from 'react'

type RootLayoutPropTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }): RootLayoutPropTypes {
  return (
    <div className='flex'>
      <ServicesDashboard />
      {children}
    </div>
  )
}
