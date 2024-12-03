import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ClockIcon from '@/assets/icons/dashboard/my-ads/ClockIcon';

interface AdCardPropTypes {
  remainingTime: number;
  img: StaticImageData;
}

export default function AdCard({ remainingTime, img }: AdCardPropTypes) {
  return (
    <div className={`relative pb-10 mb-10 rounded-2xl flex flex-col w-full gap-8 ${remainingTime ? 'bg-[#DBFFE2]' : 'bg-[#DADEE9]'}`}>
      <div className="w-full h-64 relative overflow-hidden rounded-2xl">
        <Image
          src={img}
          alt="ads1"
          layout="fill"
          objectFit="cover"
          className={`${!remainingTime && 'grayscale'}`}
        />
      </div>
      <div className=" flex items-center justify-center gap-10 text-2xl">
        <button className='border border-blackC-light bg-white w-60 py-2 rounded-lg'>More info</button>
        <button className='w-60 py-2 rounded-lg bg-[#47C666] text-white'>{remainingTime ? 'time extension' : 'Reactivation'}</button>
      </div>
      {!remainingTime
        ?
        <div className='absolute top-8 left-6'>
          <button className='bg-primary text-white w-[150px] py-2 rounded-lg'>Expired</button>
        </div>
        :
        <div className='absolute top-8 left-6 flex flex-col gap-8'>
          <button className='bg-[#47c666] text-white w-[150px] py-2 rounded-lg'>active</button>
          <button className='border border-white bg-[rgba(255,255,255,0.2)] text-white px-4 py-1 rounded-lg flex items-center gap-1'><ClockIcon /> Remaining time: {remainingTime} days</button>
        </div>
      }
    </div>
  )
}
