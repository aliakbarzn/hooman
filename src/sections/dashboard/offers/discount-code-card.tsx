'use client';

import { IconCopy } from '@/assets/icons';
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'


interface discountCodeCardProps {
  id: number;
  salonName: string;
  percentage: number;
  remainingTime: number;
  disposable: boolean;
  code: string;
}

export default function DiscountCodeCard({ id, salonName, percentage, remainingTime, disposable, code }: discountCodeCardProps) {

  const t = useTranslations('Dashboard.offers.discountCodeCard')

  const [copySuccess, setCopySuccess] = useState<string | boolean>('copy')

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopySuccess('copied!')
      setTimeout(() => setCopySuccess('copy'), 2500);
    } catch (err) {
      setCopySuccess(`Failed to copy: ${err}`)
    }
  }

  return (
    <div key={id} className='flex flex-col gap-5 p-5 border border-grayC rounded-2xl rounded-br-none'>
      <h3 className="text-xl">{salonName} {t('salon')} {percentage}% {t('discountCode')}</h3>
      <div className="flex items-center gap-4">
        <div className="py-1 px-2 bg-[#EAEAEA] text-blackC-light rounded-lg text-sm">{t('validFor')} {remainingTime} {t('days')}</div>
        {disposable &&
          <div className="p-1 px-2 bg-[#EAEAEA] text-blackC-light rounded-lg text-sm">{t('disposable')}</div>
        }
      </div>
      <button onClick={() => handleCopy(code)} className="flex items-center gap-2 bg-greenC-lighter rounded-[10px] p-4">
        <div className="py-2 px-4 bg-white rounded-[10px] w-5/6 flex items-center justify-center text-blackC-light">{code}</div>
        <div className="flex items-center gap-2 w-1/6 justify-center">
          <IconCopy />
          <span className='text-[#107629] text-xl'>{copySuccess}</span>
        </div>
      </button>
    </div>
  )
}
