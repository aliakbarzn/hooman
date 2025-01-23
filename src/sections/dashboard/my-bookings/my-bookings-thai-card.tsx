'use client';

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function MyBookingsThaiCard({ cardTitle, imgSrc, bgColor, date, id }: any) {

const t = useTranslations('Dashboard.myBookings')

  return (
    <div key={id} className={`rounded-2xl w-48 flex flex-col gap-4 justify-between items-center ${bgColor}`}>
      <div className='overflow-hidden'>
        <Image
          src={imgSrc}
          alt='Image Description'
          width={821}
          height={272}
          unoptimized
          className='object-cover overflow-hidden rounded-2xl w-[192px] h-[124px]'
        />
      </div>
      <h3 className='text-[#303030] text-base font-semibold'>{cardTitle}</h3>
      <h6 className="text-sm text-blackC-light">{t('date')}: {date}</h6>
      <button className={`mb-8 text-whiteC-light px-8 py-2 rounded-lg bg-primary`}>More info</button>
    </div>
  )
}
