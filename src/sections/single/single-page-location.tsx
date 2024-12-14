import { useTranslations } from 'next-intl'
import React from 'react'
import locationBg from '@/assets/images/single-page/image.png'
import Image from 'next/image'

export default function SinglePageLocation() {

  const t = useTranslations('Single.location')

  return (
    <div className='flex gap-14 justify-between p-14'>
      {/* left content */}
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl font-semibold">{t('title')}</h3>
        <Image src={locationBg} alt='location-bg' width={500} height={350} />
      </div>
      {/* right content */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h3 className=""></h3>
          <div className="flex justify-between">
            <p></p>
            <span>icon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
