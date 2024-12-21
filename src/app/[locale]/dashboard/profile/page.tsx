'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import { IconPencil, PaperClipIcon, PlusIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'

export default function page() {
  const t = useTranslations('Dashboard.profile')

  const [fileError, setFileError] = useState<string | null>(null)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      if (file.size > 26_214_400) {
        setFileError('Size')
        return
      }
      if (!['image/png', 'image/jpg'].includes(file.type)) {
        setFileError('Format')
        return
      }
      setFileError(null)

      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result && uploadedImages.length < 4) {
          setUploadedImages([...uploadedImages, reader.result.toString()])
        }
      }
      reader.readAsDataURL(file)
    }
  }

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
        {/* field salon/shop name ( field 1 ) */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
          <div className='profile-page-number'>
            1
          </div>
          <h4>{t('field1.inputTitle')}</h4>
          <input className='profile-page-input' type="text" placeholder={t('field1.placeholder')} />
        </div>
        {/* field add items ( field 2 ) */}
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
        {/* field pictures ( field 3 ) */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-6">
          <div className='profile-page-number'>
            3
          </div>
          <h4>{t('field3.title1')} <span className='text-blackC-light'>{t('field3.title2')}</span></h4>
          {/* Picture slots */}
          <div className="flex items-center justify-between gap-4 my-6 px-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`w-64 h-64 border-2 ${uploadedImages[index] ? 'border-primary' : 'border-dashed border-grayC'
                  } flex items-center justify-center rounded-lg`}
              >
                {uploadedImages[index]
                  ?
                  <img src={uploadedImages[index]} alt={`Uploaded-${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                  :
                  <span className="text-grayC">Slot {index + 1}</span>
                }
              </div>
            ))}
          </div>
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="profile-page-input flex items-center justify-between hover:bg-rose-50 transition duration-200"
          >
            <h6 className="text-blackC-light">{t('field3.placeholder')}</h6>
            <PaperClipIcon />
            <input onChange={handleFileChange} accept='.png, .jpg' type="file" className="hidden" ref={fileInputRef} />
          </button>
          <div className="flex items-center justify-between mt-3 px-8 mb-6">
            <h6 className={`${fileError === 'Size' ? 'text-primary font-bold' : 'text-[#acacac]'}`}>{t('field3.size')}</h6>
            <h6 className={`${fileError === 'Format' ? 'text-primary font-bold' : 'text-[#acacac]'}`}>{t('field3.extensions')}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
