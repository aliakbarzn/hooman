'use client'

import { PlusIcon } from '@/assets/icons'
import ClockWise2Icon from '@/assets/icons/dashboard/my-ads/ClockWise2Icon'
import React, { useState } from 'react'
import womanImage from '@/assets/images/dashboard/my-ads/female-masseur.png'
import { Link } from '@/navigation'
import AdCard from '@/sections/dashboard/my-ads/ad-card'
import { StaticImageData } from 'next/image'

interface Ad {
  id: number;
  remainingTime: number;
  img: StaticImageData;
  hasButtons: boolean;
}

const ads: Ad[] = [
  {
    id: 1,
    remainingTime: 0,
    img: womanImage,
    hasButtons: true
  },
  {
    id: 2,
    remainingTime: 2,
    img: womanImage,
    hasButtons: true
  },
  {
    id: 3,
    remainingTime: 5,
    img: womanImage,
    hasButtons: true
  },
]

export default function page() {

  const [isButtonOpen, setIsButtonOpen] = useState(false)

  return (
    <div className='p-20 w-full flex flex-col gap-10 max-w-[1100px] mx-auto'>
      {/* header --------------------------------------------------------------------------------------------------  */}
      <div className="flex items-center justify-between">
        <h1 className='text-3xl font-semibold'>My ads (3)</h1>
        <div className='flex items-center gap-4'>
          <span><ClockWise2Icon /></span>
          {/* opening button */}
          <div className={`cursor-pointer transition duration-200 z-20 ${isButtonOpen
            ? 'text-white bg-[#47C666] pl-2 rounded-lg flex items-center gap-2 justify-between '
            : 'hover:text-[#47C666]'}`}>
            {isButtonOpen && <Link href='/new-ads'>New ad</Link>}
            <div onClick={() => setIsButtonOpen(prev => !prev)}><PlusIcon /></div>
          </div>
          {/* screen bg to handle close button */}
          <div onClick={() => setIsButtonOpen(false)} className={`fixed inset-0 opacity-0 w-screen h-screen z-10 ${!isButtonOpen && 'hidden'}`}></div>
        </div>
      </div>
      {/* ads -------------------------------------------------------------------------------------------------- */}
      {ads?.map(ad => (
        <div className='mb-10'>
          <AdCard key={ad.id} id={ad.id} remainingTime={ad.remainingTime} img={ad.img} hasButtons={ad.hasButtons} />
        </div>
      ))}
    </div>
  )
}
