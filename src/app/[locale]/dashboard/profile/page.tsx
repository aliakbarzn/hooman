'use client'

import Image from 'next/image'
import React, { use, useRef, useState } from 'react'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import { IconActiway, IconBath, IconCardPayment, IconCashPayment, IconGiftCard, IconIndividualRooms, IconMassageBench, IconMattress, IconMiniHealthCare, IconParking, IconPencil, IconSauna, IconShower, IconSwish, IconTwoMasseuses, IconUptrend, IconWC, IconWellnessCheck, IconWellnet, PaperClipIcon, PlusIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import FieldWriteAbout from '@/sections/dashboard/profile/field-write-about'
import FieldWorkingHours from '@/sections/dashboard/profile/field-working-hours'
import FieldAddAddress from '@/sections/dashboard/profile/filed-add-address'
import ConnectBooking from '@/sections/dashboard/profile/connect-booking'
import ImageUploadWarningModal from '@/sections/dashboard/profile/image-upload-warning-modal/image-upload-warning-modal'
import HowToContact from '@/sections/dashboard/profile/how-to-contact'
import ADsSection from '@/sections/dashboard/profile/ads-section'
import AdFormModal from '@/sections/dashboard/profile/ad-form-modal/ad-form-modal'


interface SalonFeature {
  id: number;
  title: string[];
  icon: React.JSX.Element;
  isActive: boolean;
}

export default function page() {
  const t = useTranslations('Dashboard.profile')

  const [fileError, setFileError] = useState<string | null>(null)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isImageUploadWarningModalOpen, setIsImageUploadWarningModalOpen] = useState(false)
  const [isADFormModalOpen, setIsADFormModalOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [salonFeatures, setSalonFeatures] = useState<SalonFeature[]>([
    { id: 1, title: [t('field4.giftCard')], icon: <IconGiftCard />, isActive: false },
    { id: 2, title: [t('field4.sauna')], icon: <IconSauna />, isActive: false },
    { id: 3, title: [t('field4.Swish')], icon: <IconSwish />, isActive: false },
    { id: 4, title: [t('field4.parking')], icon: <IconParking />, isActive: false },
    { id: 5, title: [t('field4.cash'), t('field4.payment')], icon: <IconCashPayment />, isActive: false },
    { id: 6, title: [t('field4.Wellnet')], icon: <IconWellnet />, isActive: false },
    { id: 7, title: [t('field4.jacuzzi'), t('field4.bath')], icon: <IconBath />, isActive: false },
    { id: 8, title: [t('field4.shower')], icon: <IconShower />, isActive: false },
    { id: 9, title: [t('field4.WC')], icon: <IconWC />, isActive: false },
    { id: 10, title: [t('field4.MiniHealth'), t('field4.care')], icon: <IconMiniHealthCare />, isActive: false },
    { id: 11, title: [t('field4.individual'), t('field4.rooms')], icon: <IconIndividualRooms />, isActive: false },
    { id: 12, title: [t('field4.massage'), t('field4.bench')], icon: <IconMassageBench />, isActive: false },
    { id: 13, title: [t('field4.Actiway')], icon: <IconActiway />, isActive: false },
    { id: 14, title: [t('field4.two'), t('field4.masseuses')], icon: <IconTwoMasseuses />, isActive: false },
    { id: 15, title: [t('field4.Mattress')], icon: <IconMattress />, isActive: false },
    { id: 16, title: [t('field4.Card'), t('field4.payment')], icon: <IconCardPayment />, isActive: false },
    { id: 17, title: [t('field4.Wellness'), t('field4.check')], icon: <IconWellnessCheck />, isActive: false },
  ])

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

  const handleFeature = (id: number) => {
    setSalonFeatures(prev => prev.map(feature =>
      feature.id === id ? { ...feature, isActive: !feature.isActive } : feature
    ))
  }

  return (
    <div className='bg-[#F8F8F8]'>
      <div className="container-style max-w-[1000px]">



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
          <button className='my-4 flex items-center justify-center gap-2 rounded-[26px] bg-gradient-to-l to-orangeC-dark from-orangeC-light py-4 text-white'>
            <span className='h-4 w-7'><IconUptrend /></span>
            <span className='text-xl font-medium'>{t('field2.buttonADS')}</span>
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
          {isImageUploadWarningModalOpen && <ImageUploadWarningModal setIsImageUploadWarningModalOpen={setIsImageUploadWarningModalOpen} />}
        </div>



        {/* field add features ( field 4 ) */}
        <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-6">
          <div className='profile-page-number'>
            4
          </div>
          <h4>{t('field4.title')}</h4>
          <div className="flex gap-8 flex-wrap">
            {salonFeatures.map(feature =>
              <div onClick={() => handleFeature(feature.id)} key={feature.id} className={`flex flex-col items-center gap-4 ${feature.isActive ? 'text-primary' : 'text-blackC-light'}`}>
                <button className={`rounded-md w-20 h-20 flex items-center justify-center ${feature.isActive ? 'border-primary border-2' : 'border-blackC-light border'}`}>
                  <span className='w-12 h-12'>{feature.icon}</span>
                </button>
                <div className="flex flex-col items-center">{feature.title.map(subTitle =>
                  <h6>{subTitle}</h6>
                )}</div>
              </div>
            )}
          </div>
        </div>



        {/* field write about ( field 5 ) */}
        <FieldWriteAbout />



        {/* how to contact */}
        <HowToContact />


        {/* field working hours table ( field 6 ) */}
        <FieldWorkingHours />



        {/* field add address ( field 7 ) */}
        <FieldAddAddress />



        {/* connect booking */}
        <ConnectBooking />



        {/* save button */}
        <button className="rounded-full py-3 border border-primary text-primary bg-white">{t('buttonSave')}</button>



        {/* ads section */}
        <ADsSection />


        {/* ads form modal */}
        {isADFormModalOpen && <AdFormModal />}


      </div>
    </div>
  )
}
