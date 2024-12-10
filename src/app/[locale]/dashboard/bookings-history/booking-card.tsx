import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface BookingPropTypes {
  price: number;
  typeOfService: 'Thai massage' | 'Oil massage'
  date?: string;
  daysLeft?: number;
  userPic: StaticImageData;
}

export default function BookingCard({ price, userPic, typeOfService, date, daysLeft }: BookingPropTypes) {
  return (
    <div className='border border-grayC rounded-2xl p-3'>
      {/* comment header */}
      <div className="flex items-center justify-between  px-3 py-4 border-b border-grayC">
        <div className="flex gap-3 items-center">
          <Image src={userPic} alt='user-image' width={70} height={70} className='rounded-full' />
          <div className="flex flex-col">
            <h3 className="font-semibold">mia kalani</h3>
            <h6 className="text-blackC-light text-sm">date: {date}</h6>
          </div>
        </div>
        {
          daysLeft
          &&
          <div className='flex items-center gap-2'>
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white">{daysLeft}</div>
            days left
          </div>
        }
      </div>
      {/* comment body */}
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center justify-between">
          <h6>price</h6>
          <span className='text-blackC-light'>{price} $</span>
        </div>
        <div className="flex items-center justify-between">
          <h6>Type of service</h6>
          <span className='text-blackC-light'>{typeOfService} $</span>
        </div>
        {
          date
          &&
          <div className="flex items-center justify-between">
            <h6>date</h6>
            <span className='text-blackC-light'>{date} $</span>
          </div>
        }
      </div>
    </div>
  )
}
