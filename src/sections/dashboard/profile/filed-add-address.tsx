import { IconBigPlus, IconLocationPlus } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function FieldAddAddress() {
  const t = useTranslations('Dashboard.profile.field7')

  return (
    <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
      <div className='profile-page-number'>
        7
      </div>
      <h4>{t('title')}</h4>
      <input className='profile-page-input' type="text" placeholder={t('placeholder1')} />
      <div className="flex items-center justify-between profile-page-input">
        <input className='outline-none border-none w-11/12' type="text" placeholder={t('placeholder2')} />
        <span className='w-5 h-5 text-[#C1C1C1]'><IconBigPlus /></span>
      </div>
      <div className="flex items-center justify-between profile-page-input">
        <span className='font-light text-[#ACACAC]'>{t('placeholder3')}</span>
        <span className='text-[#C1C1C1]'><IconLocationPlus /></span>
      </div>
    </div>
  )
}
