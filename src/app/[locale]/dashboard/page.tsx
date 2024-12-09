'use client'

import React, { useState } from 'react';
import ChevronDown from '@/assets/icons/ChevronDown';
import MessageCard from '@/sections/dashboard/messages/MessageCard';
import Pagination from '@/sections/dashboard/messages/Pagination';
import CloseIcon from '@/assets/icons/CloseIcon';
import { QuoteIcon } from '@/assets/icons';
import Message from '@/sections/dashboard/messages/Message';
import ChatBox from '@/sections/dashboard/messages/ChatBox';
import Image, { StaticImageData } from 'next/image'
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

interface MessageTypes {
  id: number;
  selected: boolean;
  name: string;
  date: string;
  time: string;
  content: string;
}

const messages: MessageTypes[] = [
  {
    id: 1,
    selected: true, // Mark the first message as selected for demo
    name: 'mia kalani 1',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 2',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 3',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 4',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 5',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 6',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 7',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 8',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 9',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 10',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 11',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 12',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 13',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 14',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 15',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 16',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 17',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 18',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 19',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 20',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 21',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
]

// const messages: MessageTypes[] = []

export default function Page() {

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
