'use client';

import { EnvelopeIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function SinglePageWorkingHours() {

  const t = useTranslations('Single.working-hours')

  return (
    <div className="flex flex-col gap-10 p-14 bg-[#F4F8FF]">
      <h3 className="text-3xl font-semibold">{t('title')}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Monday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Tuesday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Wednesday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Thursday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Friday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Saturday')}</div>
        12-20 pm
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><EnvelopeIcon /> {t('Sunday')}</div>
        12-20 pm
      </div>
    </div>
  )
}
