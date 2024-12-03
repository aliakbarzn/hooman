'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import bg from '@/assets/images/new-ads/Ilustration-Asset.png'
import specialAds from '@/assets/images/new-ads/ads-special.png'
import pinkAds from '@/assets/images/new-ads/ads-pink.png'
import campaignAds from '@/assets/images/new-ads/ads-campaign.png'
import { IconArrow, IconPan, IconPercent, IconPhone, IconTarget } from '@/assets/icons'
import Calculate from '@/sections/new-ads/calculate'
import FinalCost from '@/sections/new-ads/final-cost'
import PaymentReceipt from '@/sections/new-ads/payment-receipt'


export default function page() {

  const [adType, setAdType] = useState('base')
  const [isCalculate, setIsCalculate] = useState(false)
  const [calculateContent, setCalculateContent] = useState('calculate')

  if (!isCalculate) {
    return <div className='flex flex-col gap-10 items-center py-32'>
      {adType === 'base' && <>
        <Image src={bg} alt='bg-img' />
        <h1 className='text-5xl font-semibold'>One step to billion profit</h1>
        <h3 className='text-2xl font-semibold'>Increase the profile visit</h3>
        <p className="text-blackC-light text-center">By ordering an advertisement from the Thai massage<br />site, you can increase the number of visits to your<br /> profile</p>
        <button onClick={() => setAdType('special')} className='w-96 p-3 bg-[#47C666] text-white rounded-lg'>Buy ads</button>
      </>}
      {adType === 'special' && <>
        {/* special --------------------------------------------------------------------------------------- */}
        <h2 className='text-5xl font-semibold'>Types of ads</h2>
        {/* banner ----------------------------------------------------------------- */}
        <div className='relative flex flex-col bg-[#F9FAFF] mt-10 rounded-3xl'>
          <Image src={specialAds} alt='banner-special' className='overflow-hidden rounded-3xl' />
          <div className='flex justify-end p-10 text-5xl font-semibold overflow-hidden'>Special ad</div>
          <div className='absolute bottom-8 left-12'><IconPercent /></div>
          <button onClick={() => setAdType('pink')} className='-left-8 top-40 rounded-full w-16 h-16 bg-[#7086FF] absolute pl-4'><IconArrow /></button>
        </div>
        {/* details */}
        <div className='flex flex-col gap-16 items-center mt-10'>
          <h2 className='text-5xl font-semibold'>What is Special advertising?</h2>
          <div className="flex gap-4">
            <span><IconPan /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">80% greater chance</h4>
              <p className='w-[490px] text-blackC-light'>It turns out that you have an 80% greater chance that the customer will click on your particular ad when you use our pink ad .</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconTarget /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">see you more than other ads </h4>
              <p className='w-[490px] text-blackC-light'>A pink ad has a pink background color, which makes it stand out so the customer will automatically see you more than other ads when they search your city. The pink ad is also moved up the list.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconPhone /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">prices</h4>
              <p className='w-[490px] text-blackC-light'>If you also want discounted prices, the pink ads are fine. Your offer is clearly visible and naturally attracts more customers.
              </p>
            </div>
          </div>
          <button onClick={() => setIsCalculate(true)} className='rounded-lg py-2 w-[493px] text-white bg-[#7086FF]'>Buy ads</button>
        </div>
      </>}
      {adType === 'pink' && <>
        {/* pink --------------------------------------------------------------------------------------- */}
        <h2 className='text-5xl font-semibold'>Types of ads</h2>
        {/* banner ----------------------------------------------------------------- */}
        <div className='relative flex flex-col bg-[#F9FAFF] mt-10 rounded-3xl'>
          <Image src={pinkAds} alt='banner-special' className='overflow-hidden rounded-3xl' />
          <div className='flex justify-end p-10 text-5xl font-semibold overflow-hidden'>Pink ad</div>
          <div className='absolute bottom-8 left-12'><IconPercent /></div>
          <button onClick={() => setAdType('campaign')} className='-left-8 top-40 rounded-full w-16 h-16 bg-[#7086FF] absolute pl-4'><IconArrow /></button>
        </div>
        {/* details */}
        <div className='flex flex-col gap-16 items-center mt-10'>
          <h2 className='text-5xl font-semibold'>What is Pink advertising?</h2>
          <div className="flex gap-4">
            <span><IconPan /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">80% greater chance</h4>
              <p className='w-[490px] text-blackC-light'>It turns out that you have an 80% greater chance that the customer will click on your particular ad when you use our pink ad .</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconTarget /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">see you more than other ads </h4>
              <p className='w-[490px] text-blackC-light'>A pink ad has a pink background color, which makes it stand out so the customer will automatically see you more than other ads when they search your city. The pink ad is also moved up the list.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconPhone /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">prices</h4>
              <p className='w-[490px] text-blackC-light'>If you also want discounted prices, the pink ads are fine. Your offer is clearly visible and naturally attracts more customers.
              </p>
            </div>
          </div>
          <button onClick={() => setIsCalculate(true)} className='rounded-lg py-2 w-[493px] text-white bg-primary'>Buy ads</button>
        </div>
      </>}
      {adType === 'campaign' && <>
        {/* campaign --------------------------------------------------------------------------------------- */}
        <h2 className='text-5xl font-semibold'>Types of ads</h2>
        {/* banner ----------------------------------------------------------------- */}
        <div className='relative flex flex-col bg-[#F9FAFF] mt-10 rounded-3xl'>
          <Image src={campaignAds} alt='banner-special' className='overflow-hidden rounded-3xl' />
          <div className='flex justify-end p-10 text-5xl font-semibold overflow-hidden'>Campaign ad</div>
          <div className='absolute bottom-8 left-12'><IconPercent /></div>
          <button onClick={() => setAdType('special')} className='-left-8 top-40 rounded-full w-16 h-16 bg-[#7086FF] absolute pl-4'><IconArrow /></button>
        </div>
        {/* details */}
        <div className='flex flex-col gap-16 items-center mt-10'>
          <h2 className='text-5xl font-semibold'>What is Campaign advertising?</h2>
          <div className="flex gap-4">
            <span><IconPan /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">80% greater chance</h4>
              <p className='w-[490px] text-blackC-light'>It turns out that you have an 80% greater chance that the customer will click on your particular ad when you use our pink ad .</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconTarget /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">see you more than other ads </h4>
              <p className='w-[490px] text-blackC-light'>A pink ad has a pink background color, which makes it stand out so the customer will automatically see you more than other ads when they search your city. The pink ad is also moved up the list.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span><IconPhone /></span>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-semibold">prices</h4>
              <p className='w-[490px] text-blackC-light'>If you also want discounted prices, the pink ads are fine. Your offer is clearly visible and naturally attracts more customers.
              </p>
            </div>
          </div>
          <button onClick={() => setIsCalculate(true)} className='rounded-lg py-2 w-[493px] text-white bg-[#47C666]'>Buy ads</button>
        </div>
      </>}
    </div>
  }

  if (isCalculate) {
    if (calculateContent === 'calculate') {
      return <Calculate setCalculateContent={setCalculateContent} />
    } else if (calculateContent === 'final-cost') {
      return <FinalCost setCalculateContent={setCalculateContent} />
    } else if (calculateContent === 'payment-receipt') {
      return <PaymentReceipt />
    }
  }
}
