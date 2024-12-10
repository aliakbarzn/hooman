import { BgSupport, IconSupport } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("Dashboard.support")

  return (
    <div className='max-w-[1100px] mx-auto p-10'>
      <div className="relative mx-auto">
        <div className="translate-x-[8%]"><BgSupport /></div>
        <div className="w-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold">{t("title")}</h2>
            <p className="w-[378px] font-light">{t("text1")}<br />{t("text2")}</p>
          </div>
          <IconSupport />
        </div>
      </div>
    </div>
  )
}
