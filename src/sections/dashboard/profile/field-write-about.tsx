'use client';

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function FieldWriteAbout() {
  const t = useTranslations('Dashboard.profile.field5')

  const [inputCharactersCount, setInputCharactersCount] = useState(0)

  return (
    <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
      <div className='profile-page-number'>
        5
      </div>
      <h4>{t('title')}</h4>
      <textarea onChange={e => setInputCharactersCount(e.target.value.length)} className='profile-page-input h-44' maxLength={5000} placeholder={t('placeholder')} />
      <div className="flex justify-end pr-6 text-[#ACACAC] text-xs font-light">{inputCharactersCount}/5000 {t('words')}</div>
    </div>
  )
}
