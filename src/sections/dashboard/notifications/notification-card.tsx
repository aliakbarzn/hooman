import { CircledArrowIcon } from '@/assets/icons'
import React from 'react'

interface NotificationCardPropTypes {
  salonName: string;
  date: string;
  text: string
}

export default function NotificationCard({ salonName, date, text }: NotificationCardPropTypes) {
  return (
    <div className='relative flex flex-col border border-grayC rounded-2xl p-2'>
      {/* left top corner tab */}
      <div className="absolute -top-px -left-px w-5 h-5 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-[10px] bg-blackC-light"></div>
      {/* header */}
      <div className="flex flex-col p-4 border-b border-grayC">
        <h3 className="">{salonName}</h3>
        <h6 className="">{date}</h6>
      </div>
      {/* body */}
      <p className="text-blackC-light p-4">{text}</p>
      {/* right bottom corner icon */}
      <div className="flex justify-end px-2">
        <div className="h-4 w-4 text-blackC-light rotate-90"><CircledArrowIcon /></div>
      </div>
    </div>
  )
}
