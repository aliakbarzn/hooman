import { CloseIcon, IconSimpleTick, TickIcon } from '@/assets/icons';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

interface FormModalPropTypes {
  isOpen: boolean;
  handler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormModal({ isOpen, handler }: FormModalPropTypes) {

  const t = useTranslations("Dashboard.connect-booking")

  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div onClick={() => handler(false)} className={`fixed inset-0 w-screen h-screen items-center justify-center z-10 bg-black bg-opacity-30 ${isOpen ? 'flex' : 'hidden'}`}>
      <div onClick={e => e.stopPropagation()} className="flex flex-col gap-6 p-6 bg-white rounded-lg">
        {!isSubmitted
          ?
          <>
            <div className="space-y-2">
              <h4 className="">{t("modal.title1")}</h4>
              <input className='w-72 py-2 px-3 rounded-lg border border-grayC' placeholder={t("modal.placeholder")} type="text" />
            </div>
            <div className="space-y-2">
              <h4 className="">{t("modal.title2")}</h4>
              <input className='w-72 py-2 px-3 rounded-lg border border-grayC' placeholder={t("modal.placeholder")} type="text" />
            </div>
            <div className="space-y-2">
              <h4 className="">{t("modal.title3")}</h4>
              <input className='w-72 py-2 px-3 rounded-lg border border-grayC' placeholder={t("modal.placeholder")} type="text" />
            </div>
            <div className="space-y-2">
              <h4 className="">{t("modal.title4")}</h4>
              <textarea className='w-72 py-2 px-3 rounded-lg border border-grayC' placeholder={t("modal.placeholder")} />
            </div>
            <button onClick={() => setIsSubmitted(true)} className='py-2 rounded-lg text-[#f5f5f5] bg-[#2c2c2c]'>{t("modal.button")}</button>
          </>
          :
          <>
            <div className="flex justify-end">
              <div onClick={() => handler(false)} className="cursor-pointer"><CloseIcon /></div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className=""><IconSimpleTick /></div>
              <h3 className="text-2xl font-semibold">{t("modal.success.title")}</h3>
              <p className="mb-4 text-center w-80">{t("modal.success.text")}</p>
            </div>
          </>
        }
      </div>
    </div>
  )
}
