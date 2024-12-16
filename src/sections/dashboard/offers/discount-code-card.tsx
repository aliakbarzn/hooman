import { useTranslations } from 'next-intl'
import React from 'react'

export default function DiscountCodeCard() {

  const t = useTranslations('Dashboard.offers.discountCodeCard')

  return (
    <div className='flex flex-col gap-5 p-5 border border-grayC rounded-2xl rounded-br-none'>
      <h3 className="text-xl">zahra </h3>
    </div>
  )
}
