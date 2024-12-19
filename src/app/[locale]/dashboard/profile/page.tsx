import Image from 'next/image'
import React from 'react'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import { IconPencil, PlusIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'

export default function page() {

  const t = useTranslations('Dashboard.profile')

  return (
    <div className='bg-[#F8F8F8]'>
      <div className="container-style">
        {/* picture and email card */}
        <div className="p-5 flex gap-6 items-center rounded-lg bg-white">
          <Image src={profPic} alt='profile-image' width={83} height={107} className='rounded-xl' />
          <div className="flex flex-col gap-2 w-full">
            <h5 className='font-semibold'>{'Mia Kalani'}</h5>
            <div className="flex items-center gap-2">
              <h5 className='text-sm text-blackC-light'>{'miakalani2002@email.com'}</h5>
              <button className='p-2 rounded-lg shadow-md'><IconPencil /></button>
            </div>
          </div>
        </div>
        {/* field salon/shop name */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
          <div className='profile-page-number'>
            1
          </div>
          <h4>{t('field1.inputTitle')}</h4>
          <input className='profile-page-input' type="text" placeholder={t('field1.placeholder')} />
        </div>
        {/* field add items */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-6">
          <div className='profile-page-number'>
            2
          </div>
          <h4>{t('field2.title')}</h4>
          <div className="flex items-center gap-4">
            <input className='profile-page-input w-3/5' type="text" placeholder={t('field2.placeholder1')} />
            <input className='profile-page-input w-1/5' type="text" placeholder={t('field2.placeholder2')} />
            <input className='profile-page-input w-1/5' type="text" placeholder={t('field2.placeholder3')} />
          </div>
          <button className="flex items-center gap-2 mt-4">
            <span className="text-secondary"><PlusIcon /></span>
            <h5 className="text-secondary font-semibold">{t('field2.button')}</h5>
          </button>
        </div>
        {/* field pictures */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-6">
          <div className='profile-page-number'>
            3
          </div>
          <h4>{t('field3.title1')} <span className='text-blackC-light'>{t('field3.title2')}</span></h4>
          <div className='profile-page-input'>
            <input className='hidden' type="file" />
          </div>
        </div>
      </div>
    </div>
  )
}
