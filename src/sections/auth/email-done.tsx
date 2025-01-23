'use client';

import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

const EmailDone = () => {
  const t = useTranslations('ForgetPage.forget3')

  return (
    <div className={`flex h-full items-center justify-center`}>
      <form className='gap-10 flex flex-col'>
        <div className="flex flex-col gap-y-3">
          <h2 className='font-bold text-2xl text-blackC-dark'>{t('title')}</h2>
          <p className='text-blackC-dark'>{t('message1')}<br />{t('message2')}</p>
        </div>
        {/* confirm button */}
        <Link className='text-center font-light text-white w-[317.15px] sm:w-[435px] py-[14px] bg-secondary rounded-full' href='/forget/reset-password/'>
          {t('button')}
        </Link>
      </form>
    </div>
  )
}

export default EmailDone