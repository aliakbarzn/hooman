'use client';

import { IconVisa } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

interface PaymentMethodSwishProps {
  selectedPayment: "swish" | "visa" | null;
  setSelectedPayment: React.Dispatch<React.SetStateAction<"swish" | "visa" | null>>;
}

export default function PaymentMethodVisa({ selectedPayment, setSelectedPayment }: PaymentMethodSwishProps) {

  const t = useTranslations('Booking.paymentCard.visa')

  return (
    <div className="flex flex-col gap-6">
      <div onClick={() => setSelectedPayment('visa')} className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className={`border-blackC mt-1 rounded-full h-4 w-4 border bg-[#E6E6E6] ${selectedPayment === "visa" ? "border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}>
            <div className={`rounded-full w-2 h-2 bg-blackC ${selectedPayment === "visa" ? "opacity-100" : "opacity-0"}`}></div>
          </div>
          <div className="flex flex-col gap-2"><h6>{t('title')}</h6><span className='text-blackC-light'>{t('visaDescription')}</span></div>
        </div>
        <span className='w-12 h-4'><IconVisa /></span>
      </div>
      {/* payment info */}
      {selectedPayment === 'visa'
        &&
        <div className="ml-16 flex flex-col p-8 gap-8 border border-grayC rounded-lg">
          <h3 className="font-semibold text-2xl">{t('cardInformation.title')}</h3>
          <div className="flex flex-col gap-2">
            <h5>{t('cardInformation.inputTitle1')}</h5>
            <input className="p-2 px-3 border border-grayC rounded-lg outline-none" placeholder={t('cardInformation.Value')} />
          </div>
          <div className="flex flex-col gap-2">
            <h5>{t('cardInformation.inputTitle2')}</h5>
            <input className="p-2 px-3 border border-grayC rounded-lg outline-none" placeholder={t('cardInformation.Value')} />
          </div>
          <div className="flex flex-col gap-2">
            <h5>{t('cardInformation.cvv2')}</h5>
            <input className="p-2 px-3 border border-grayC rounded-lg outline-none" placeholder={t('cardInformation.Value')} />
          </div>
          <label htmlFor="save-card" className="inline-flex gap-2 cursor-pointer items-center">
            <input type="checkbox" id="save-card" />
            <h6>{t('cardInformation.saveCard')}</h6>
          </label>

        </div>
      }
    </div>
  )
}
