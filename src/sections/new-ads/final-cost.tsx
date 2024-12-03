import React from 'react'
import { FinalCostBg } from '@/assets/icons';

interface CalculatePropTypes {
  setCalculateContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function FinalCost({ setCalculateContent }: CalculatePropTypes) {
  return (
    <div className="pt-24 pb-44">
      <div className="w-screen h-screen relative">
        {/* Background Image */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><FinalCostBg /></div>
        {/* Centered Content */}
        <div className="flex flex-col gap-10 items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {/* title */}
          <h1 className="whitespace-nowrap text-5xl font-semibold">67.000,000 $</h1>
          <div className="flex flex-col items-center">
            <h5 className='text-2xl font-semibold'>cost of your chosen plan</h5>
            <p className="px-4 py-2 text-blackC-light text-center">You have to pay the above amount<br />for every 22 days of pink ad</p>
          </div>
          <div className="flex items-center gap-10 text-2xl">
            <button onClick={() => setCalculateContent('calculate')} className="py-1 px-16 rounded-lg border border-blackC-light">Edit plan</button>
            <button onClick={() => setCalculateContent('payment-receipt')} className="py-1 px-16 text-whiteC rounded-lg bg-[#47C666]">payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
