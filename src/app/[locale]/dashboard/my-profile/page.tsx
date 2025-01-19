import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import bg from '@/assets/images/dashboard/Breadcrumb.png'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import womanImage from '@/assets/images/dashboard/my-ads/female-masseur-pampering-ribs-young-slim-woman-towel-professional-massage-massaging-relaxation-body-skin-care-attractive-lady-spa-salon_266732-24173.png'
import { EnvelopeIcon, IconPencil, InventoryIcon } from '@/assets/icons'
import AdCard from '@/sections/dashboard/my-ads/ad-card'
import MyProfileAdsSection from '@/sections/dashboard/my-profile/my-profile-ads-section'
import ModalChooseLanguage from './modal-choose-language/modal-choose-language'

interface User {
  name: string;
  email: string;
  pic: StaticImageData;
  unreadMessages: number;
  newBookings: number;
}

const user: User = {
  name: 'mia kalani',
  email: 'mia2027rain@gmail.com',
  pic: profPic,
  unreadMessages: 26,
  newBookings: 12
};

interface Ad {
  id: number;
  remainingTime: number;
  img: StaticImageData;
  hasButtons: boolean
}

const ads: Ad[] = [
  {
    id: 2,
    remainingTime: 2,
    img: womanImage,
    hasButtons: false
  },
  {
    id: 3,
    remainingTime: 5,
    img: womanImage,
    hasButtons: false
  },
]

const Page = () => {

  return (
    <div className='flex flex-col gap-12 max-w-[1100px] mx-auto p-10'>

      {/* profile section */}
      <div className="relative">
        {/* profile bg */}
        <div className="relative h-96 w-full">
          <Image src={bg} alt='background' fill className='object-contain' />
        </div>
        {/* profile card */}
        <div className="w-11/12 bg-white absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 flex items-center justify-between p-5 pr-12 rounded-lg bg-opacity-95 shadow-lg">
          <div className="flex gap-6 items-center">
            <Image src={user.pic} alt='profile-image' width={90} height={90} className='rounded-xl' />
            <div className="flex flex-col">
              <h3 className="font-semibold">{user.name}</h3>
              <div className='flex items-center gap-2'>
                <h4 className="text-blackC-light">{user.email}</h4>
                <button className='p-[6px] bg-white rounded-lg shadow'><IconPencil /></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className='font-semibold'>unread massage</h3>
            <div className='flex items-center gap-2'>
              <span className='text-primary text-sm font-semibold mt-1'>{user.unreadMessages}</span>
              <EnvelopeIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className='font-semibold'>new booking</h3>
            <div className='flex items-center gap-2'>
              <span className='text-blackC-light text-sm font-semibold mt-1'>{user.newBookings}</span>
              <InventoryIcon />
            </div>
          </div>
        </div>
      </div>

      {/* my active ads section */}
      <div className="mt-16 flex flex-col gap-6">
        <h3 className='text-xl font-semibold'>my active ADs</h3>

        <div className="grid gap-10 sm:grid-cols-2">
          {ads?.map(ad => (
            <AdCard key={ad.id} id={ad.id} remainingTime={ad.remainingTime} img={ad.img} hasButtons={ad.hasButtons} />
          ))}
        </div>
      </div>

      {/* ads planning section */}
      <MyProfileAdsSection />

      {/* modal choose language */}
      <ModalChooseLanguage />


    </div>
  )
}

export default Page