import { IconTelegramSupport, IconTicketSupport, IconWhatsappSupport } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import bgShape from '@/assets/images/dashboard/support/bg-shape.png'

export default function page() {

  const t = useTranslations("Dashboard.support")

  return (
    <div className='max-w-[1400px] mx-auto p-10'>
      <div className="relative mx-auto w-[853px] h-[350px] bg-[#E8F0FF] rounded-lg">
        <Image src={bgShape} alt='bg-shape' />
        <div className="absolute top-1/2 -translate-y-1/2 mx-auto flex flex-col gap-6 p-10">
          <h2 className="text-xl font-semibold">{t("title")}</h2>
          <p className="font-light">{t("text1")}</p>
          <div className="flex gap-16 self-center mt-10">
            <span className='w-32 h-32'><IconTelegramSupport /></span>
            <span className='w-32 h-32'><IconTicketSupport /></span>
            <span className='w-32 h-32'><IconWhatsappSupport /></span>
          </div>
        </div>
      </div>
    </div>
  )
}