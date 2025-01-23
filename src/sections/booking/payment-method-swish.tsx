'use client';

import { LogoSwish } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

interface PaymentMethodSwishProps {
  selectedPayment: "swish" | "visa" | null;
  setSelectedPayment: React.Dispatch<React.SetStateAction<"swish" | "visa" | null>>;
}

export default function PaymentMethodSwish({ selectedPayment, setSelectedPayment }: PaymentMethodSwishProps) {

  const t = useTranslations('Booking.paymentCard.swish')

  return (
    <div className="flex flex-col gap-6">
      <div onClick={() => setSelectedPayment('swish')} className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className={`border-blackC mt-1 rounded-full h-4 w-4 border bg-[#E6E6E6] ${selectedPayment === "swish" ? "border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}>
            <div className={`rounded-full w-2 h-2 bg-blackC ${selectedPayment === "swish" ? "opacity-100" : "opacity-0"}`}></div>
          </div>
          <div className="flex flex-col gap-2"><h6>{t('title')}</h6><span className='text-blackC-light'>{t('description')}</span></div>
        </div>
        <LogoSwish />
      </div>
      {/* payment info */}
      {selectedPayment === 'swish'
        &&
        <div className="ml-16 flex flex-col gap-2">
          <h5>{t('inputTitle')}</h5>
          <input className='px-3 py-2 rounded-lg border border-grayC outline-none' type="text" placeholder={t('placeholder')} />
          <h6>{t('format')} +0000000000</h6>
        </div>
      }
    </div>
  )
}
