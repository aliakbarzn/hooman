import Image from 'next/image';
import React from 'react'
import userPic from '@/assets/images/dashboard/notifications/user-profile.png'

interface PaymentCardPropTypes {
  type: string;
  date: string;
  price: number;
  typeOfService: "Thai massage" | "Oil massage";
  description: string;
  isSuccessful: boolean
}

export default function PaymentCard({ type, date, price, typeOfService, description, isSuccessful }: PaymentCardPropTypes) {
  return (
    <div className="mt-14 mb-6 flex flex-col p-3 border border-grayC rounded-2xl relative">
      {/* header */}
      <div className="flex items-center justify-between border-b border-grayC px-4 pt-3 pb-4 mb-1">
        {isSuccessful
          ?
          <button className='rounded-lg py-2 px-5 bg-[#70E38C] text-whiteC text-sm'>receive</button>
          :
          <div className='flex gap-3'>
            <Image src={userPic} alt='user-pic' width={30} height={30} className='rounded-full' />
            <h3 className='font-semibold'>mia kalani</h3>
          </div>
        }
        <span className='text-blackC-light'>{date}</span>
      </div>
      {/* body */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <h5 className=''>price</h5>
          <span className='text-blackC-light'>{price}</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h5 className=''>Type of service</h5>
          <span className='text-blackC-light'>{typeOfService}</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h5 className=''>Description</h5>
          <span className='text-blackC-light'>{description}</span>
        </div>
      </div>
      {/* tags */}
      <div className="right-7 top-0 transform -translate-y-full absolute flex gap-2 items-center">
        {!isSuccessful && <div className=" bg-[#70E38C] rounded-t-lg text-center text-[#F3F3F3] py-2 px-3">payment</div>}
        <div className={`rounded-t-lg text-center text-[#F3F3F3] py-2 px-3 ${isSuccessful ? 'bg-[#70E38C]' : 'bg-primary'}`}>
          {isSuccessful ? "successful" : "unsuccessful"}
        </div>
      </div>
    </div>
  )
}
