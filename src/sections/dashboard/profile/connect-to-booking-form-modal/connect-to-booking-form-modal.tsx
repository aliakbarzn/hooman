import { IconExclamationMark2 } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const ConnectToBookingFormModal = ({ setIsConnectToBookingFormModalOpen }: { setIsConnectToBookingFormModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const t = useTranslations('Dashboard.profile.connectToBookingFormModal')

  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className='fixed inset-0 z-20 bg-opacity-30 bg-black flex items-center justify-center'>
      <div className="max-w-[1000px] max-h-[666px]  rounded-lg bg-white">
        <div className="max-h-[650px] my-4 overflow-y-auto flex flex-col gap-8 p-14">

          {/* title */}
          <div className="flex flex-col gap-2">
            <h2 className="text-blueC-vibrant text-[32px] font-medium">{t("title")}</h2>
            <h4 className="text-2xl">{t('subtitle')}</h4>
          </div>

          {/* credit card form */}
          <div className="border border-grayC rounded-lg p-6 flex flex-col gap-6">
            <h5 className="text-xl font-medium">{t('creditCardForm.title')}</h5>
            <div className="flex flex-col gap-1">
              <h6>{t('creditCardForm.label1')}</h6>
              <input type="text" className="border border-grayC rounded-lg outline-none px-3 py-2" placeholder={t('creditCardForm.placeholder')} />
            </div>
            <div className="flex flex-col gap-1">
              <h6>{t('creditCardForm.label2')}</h6>
              <input type="text" className="border border-grayC rounded-lg outline-none px-3 py-2" placeholder={t('creditCardForm.placeholder')} />
            </div>
            <div className="flex flex-col gap-1">
              <h6>{t('creditCardForm.label3')}</h6>
              <input type="text" className="border border-grayC rounded-lg outline-none px-3 py-2" placeholder={t('creditCardForm.placeholder')} />
            </div>
            {/* radio section */}
            <div className="flex gap-2 cursor-pointer" onClick={() => setIsSelected(!isSelected)}>
              <span className={`border-blackC mt-1 rounded-full h-4 w-4 border bg-[#E6E6E6] ${isSelected ? "border-2" : "border-blackC-light"} flex items-center justify-center`}>
                <span className={`rounded-full w-2 h-2 bg-blackC ${isSelected ? "opacity-100" : "opacity-0"}`}></span>
              </span>
              {t('creditCardForm.radioButton')}
            </div>
          </div>

          {/* credit card form */}
          <div className="border border-grayC rounded-lg p-6 flex flex-col gap-6">
            <h5 className="text-xl font-medium">{t('companyForm.title')}</h5>
            <div className="flex flex-col gap-1">
              <h6>{t('companyForm.label1')}</h6>
              <input type="text" className="border border-grayC rounded-lg outline-none px-3 py-2" placeholder={t('creditCardForm.placeholder')} />
            </div>
            <div className="flex flex-col gap-1">
              <h6>{t('companyForm.label2')}</h6>
              <input type="text" className="border border-grayC rounded-lg outline-none px-3 py-2" placeholder={t('creditCardForm.placeholder')} />
            </div>
            <div className="flex gap-3">
              <span className='h-5 w-5 text-primary'><IconExclamationMark2 /></span>
              {t('companyForm.note')}
            </div>
          </div>

          {/* buttons */}
          <div className="flex justify-between items-center gap-16">
            <button className='w-1/2 px-4 py-2 border border-secondary rounded-full text-2xl text-secondary hover:bg-secondary hover:text-white'>{t('button1')}</button>
            <button onClick={() => setIsConnectToBookingFormModalOpen(false)} className='w-1/2 px-4 py-2 border border-primary rounded-full text-2xl text-primary hover:bg-primary hover:text-white'>{t('button2')}</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ConnectToBookingFormModal