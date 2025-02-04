'use client'

import MyBookingsCardsContainer from '@/sections/dashboard/my-bookings/my-bookings-cards-container'
import { useTranslations } from 'next-intl'
import React from 'react'
import image from '@/assets/images/dashboard/my-ads/female-masseur.png'
import { StaticImageData } from 'next/image'

interface CardData {
  id: number;
  cardTitle: string;
  imgSrc: StaticImageData;
  date: string;
}

export default function page() {

  const t = useTranslations('Dashboard.myBookings')

  const cardsData: CardData[] = [
    {
      id: 1,
      cardTitle: 'Herb (Thai Massage)',
      imgSrc: image,
      date: '24/09/2024'
    },
    {
      id: 2,
      cardTitle: 'Thai Massage',
      imgSrc: image,
      date: '24/09/2024'
    },
    {
      id: 3,
      cardTitle: 'Child Thai Massage',
      imgSrc: image,
      date: '24/09/2024'
    },
    {
      id: 4,
      cardTitle: 'Herb (Thai Massage)',
      imgSrc: image,
      date: '24/09/2024'
    },
    {
      id: 5,
      cardTitle: 'Thai Massage',
      imgSrc: image,
      date: '24/09/2024'
    },
    {
      id: 6,
      cardTitle: 'Child Thai Massage',
      imgSrc: image,
      date: '24/09/2024'
    },
  ]

  return (
    <div className='container-style'>
      <h2 className="font-semibold">{t('title')} ({cardsData.length})</h2>
      <MyBookingsCardsContainer cardsData={cardsData} />
    </div>
  )
}
