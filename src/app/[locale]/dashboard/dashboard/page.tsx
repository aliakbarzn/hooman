import Image, { StaticImageData } from 'next/image'
import React from 'react'
import bg from '@/assets/images/dashboard/Breadcrumb.png'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import { EnvelopeIcon, IconPencil, IconTickBanner, IconTickClipBoard, InventoryIcon } from '@/assets/icons'

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

export default function page() {
  return (
    <div className='flex flex-col'>
      <div className="p-10 relative ">
        {/* profile bg */}
        <Image src={bg} alt='background' width={853} height={289} className='mx-auto' />
        {/* profile card */}
        <div className="w-[827px] bg-white absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 flex items-center justify-between p-5 pr-12 rounded-lg bg-opacity-95 shadow-lg">
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

      <div className="flex items-center gap-10 mx-auto py-20">
        {/*  */}
        <div className="flex flex-col gap-10 rounded-2xl bg-[#F1FFF4] p-10 w-[400px]">
          <h2 className="text-xl font-semibold">Booking Overview</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner />Today's bookings</div>
            <div className="rounded-full bg-primary w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner />Today'This week's bookings</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner />This month's bookings</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner />last 6 months Bookings</div>
            <div className="rounded-full bg-primary w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner /> last 1 year Bookings</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickBanner />All bookings</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-10 rounded-2xl bg-[#F1FFF4] p-10 w-[400px]">
          <h2 className="text-xl font-semibold"> ADs Overview</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard />last 6 months visit</div>
            <div className="rounded-full bg-primary w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard /> last 1 year visit</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard />All ads visit</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard />Today's visit</div>
            <div className="rounded-full bg-primary w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard />This week's visit</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-light"><IconTickClipBoard />This month's visit</div>
            <div className="rounded-full bg-blackC-light w-[27px] h-[27px] flex items-center justify-center text-xs text-white font-semibold">26</div>
          </div>
        </div>
      </div>
    </div>
  )
}
