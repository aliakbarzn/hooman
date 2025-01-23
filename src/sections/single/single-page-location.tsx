'use client';

import { useTranslations } from 'next-intl'
import React from 'react'
import locationBg from '@/assets/images/single-page/image.png'
import Image from 'next/image'
import { IconPhone2, IconPhoneBook } from '@/assets/icons'

export default function SinglePageLocation() {

  const t = useTranslations('Single.location')

  return (
    <div className='flex gap-24 justify-center p-14'>
      {/* left content */}
      <div className="flex flex-col gap-7 max-w-[550px]">
        <h3 className="text-3xl font-semibold">{t('title')}</h3>
        <Image src={locationBg} alt='location-bg' width={420} height={300} />
      </div>
      {/* right content */}
      <div className="flex flex-col gap-10 max-w-[590px]">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-3xl">{t('address-title')}</h3>
          <div className="flex justify-between gap-4">
            <p className='text-xl text-blackC-light'>{t('address-text')}</p>
            <span><IconPhoneBook /></span>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-3xl">{t('hall-title')}</h3>
          <div className="flex justify-between gap-4">
            <p className='text-xl text-blackC-light'>{t('hall-number1')}<br />{t('hall-number2')}</p>
            <span><IconPhone2 /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
