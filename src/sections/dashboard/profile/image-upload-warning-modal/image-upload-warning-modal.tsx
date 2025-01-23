'use client';

import { IconCircledExclamationMark, CloseIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

const ImageUploadWarningModal = ({ setIsImageUploadWarningModalOpen }: { setIsImageUploadWarningModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const t = useTranslations("Dashboard.profile.imageUploadWarningModal")

  return (
    <div className='fixed inset-0 z-20 bg-opacity-30 bg-black flex items-center justify-center'>
      <div className="rounded-lg border-t-2 border-orangeC flex flex-col shadow-md p-5 bg-white">
        <div onClick={() => setIsImageUploadWarningModalOpen(false)} className="flex justify-end cursor-pointer"><CloseIcon /></div>
        <div className="flex flex-col gap-6 items-center">
          <span className="text-orangeC w-10 h-10"><IconCircledExclamationMark /></span>
          <h3 className='text-2xl font-semibold text-blackC'>{t('title')}</h3>
          <p className="mx-4 mb-4 w-[402px] text-center">{t('text')}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageUploadWarningModal