'use client'

import IconPan from '@/assets/icons/new-ads/icon-pan'
import FormModal from '@/sections/dashboard/connect-booking/form-modal'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'

export default function page() {

  const t = useTranslations("Dashboard.connect-booking")

  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-16 p-16 max-w-[1100px] mx-auto'>
      {/* header */}
      <h2 className="text-xl font-semibold mb-10">{t("title")}</h2>
      {/* body */}
      <div className="flex gap-4">
        <span><IconPan /></span>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">{t("item1.title")}</h4>
          <p className='text-blackC-light'>{t("item1.text")}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span><IconPan /></span>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">{t("item2.title")}</h4>
          <p className='text-blackC-light'>{t("item2.text")}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span><IconPan /></span>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">{t("item3.title")}</h4>
          <p className='text-blackC-light'>{t("item3.text")}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span><IconPan /></span>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">{t("item4.title")}</h4>
          <p className='text-blackC-light'>{t("item4.text")}</p>
        </div>
      </div>
      {/* footer buttons */}
      <div className="flex items-center justify-end gap-3 pr-6">
        <button className="w-60 rounded-lg py-2 border border-blackC-light text-2xl">{t("button1")}</button>
        <button onClick={() => setIsFormModalOpen(true)} className="w-60 rounded-lg py-2 text-whiteC bg-primary text-2xl">{t("button2")}</button>
      </div>
      {/* form modal */}
      <FormModal isOpen={isFormModalOpen} handler={setIsFormModalOpen} />
    </div>
  )
}
