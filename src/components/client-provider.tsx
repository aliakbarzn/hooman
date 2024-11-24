'use client'
import Footer from '@/sections/footer/Footer'
import Menu from '@/sections/home/header/menu'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    const path = usePathname().split('/')
    const isAuthPage = ['signin', 'register'].includes(path[2])
    
    return isAuthPage ? children : (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    )
}
