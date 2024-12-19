'use client'

import PaymentMethodSwish from '@/sections/booking/payment-method-swish'
import PaymentMethodVisa from '@/sections/booking/payment-method-visa'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function page() {

  const t = useTranslations('Booking')

  const [selectedPayment, setSelectedPayment] = useState<'swish' | 'visa' | null>(null)

  const orderDetails = {
    typeOfService: '90 minutes of Thai massage',
    price: 342,
    date: '21/07/2024, 13:00',
    description: 'sample description'
  }

  return (
    <div className='container-style'>
      {/* note */}
      <div className='py-[10px] px-8 border border-greenC bg-greenC-lightPale text-greenC-darkPale rounded-lg'>
        <p className='text-sm'><i className='font-bold'>{t('note.note')}:</i> {t('note.text')}.<strong className='font-bold'> {t('note.beCareful')}!</strong></p>
      </div>
      {/* order details card */}
      <div className="flex flex-col p-8 gap-8 border border-grayC rounded-lg">
        <h3 className="font-semibold text-2xl">{t('detailsCard.title')}</h3>
        <div className="flex flex-col gap-2">
          <h5>{t('detailsCard.fieldTitle1')}</h5>
          <div className="p-2 px-3 border border-grayC rounded-lg text-blackC-light">{orderDetails.typeOfService}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h5>{t('detailsCard.fieldTitle2')}</h5>
          <div className="p-2 px-3 border border-grayC rounded-lg text-blackC-light">{orderDetails.price}$</div>
        </div>
        <div className="flex flex-col gap-2">
          <h5>{t('detailsCard.fieldTitle3')}</h5>
          <div className="p-2 px-3 border border-grayC rounded-lg text-blackC-light">{orderDetails.date}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h5>{t('detailsCard.fieldTitle4')}</h5>
          <div className="p-2 px-3 border border-grayC rounded-lg text-blackC-light">{orderDetails.description}</div>
        </div>
      </div>
      {/* payment methods cards */}
      <div className="flex flex-col p-8 gap-8 border border-grayC rounded-lg">
        {/* title */}
        <h3 className="font-semibold text-2xl">{t('paymentCard.title')}</h3>
        {/* swish */}
        <PaymentMethodSwish selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
        {/* border */}
        <div className="w-full h-px bg-grayC"></div>
        {/* visa card */}
        <PaymentMethodVisa selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
        {/* button */}
        <button className="rounded-lg py-2 text-whiteC-light bg-[#2C2C2C]">{t('paymentCard.button')}</button>
      </div>
    </div>
  )
}
