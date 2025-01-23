'use client';

import { useTranslations } from 'next-intl'
import React from 'react'

export default function ConnectBooking() {
  const t = useTranslations('Dashboard.profile.connectBooking')
  return (
    <div className='py-10 border border-primary rounded-lg flex flex-col gap-6 items-center bg-pinkC-light'>
      <span>icon</span>
      <span className='text-2xl'>{t('text')}</span>
      <div className="flex gap-24">
        <button className="py-1 px-24 border bg-white border-secondary text-secondary text-2xl rounded-full">{t('Yes')}</button>
        <button className="py-1 px-24 border bg-white border-primary text-primary text-2xl rounded-full">{t('No')}</button>
      </div>
    </div>
  )
}
