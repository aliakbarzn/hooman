import ServicesDashboard from '@/sections/aboutThai/services-dashboard'
import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className='flex'>
      <ServicesDashboard />
      {children}
    </div>
  )
}
