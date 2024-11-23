'use client'
import Footer from '@/sections/footer/Footer'
import Menu from '@/sections/home/header/menu'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ClientProvider({children}:{children:React.ReactNode}) {
    const route = usePathname()
    const lang = route.split('/')
    if(route==`/${lang[1]}/auth`){
        return(<>{children}</>)
    }
    return(
        <>
        <Menu/>
          {children}
        <Footer />
        </>
    )
}
