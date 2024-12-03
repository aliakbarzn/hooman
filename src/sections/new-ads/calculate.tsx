import React from 'react'
import { CalculateBg } from '@/assets/icons'
import AdDropdown from './AdDropdown'

interface CalculatePropTypes {
  setCalculateContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function Calculate({ setCalculateContent }: CalculatePropTypes) {
  return (
    <div className="pt-24 pb-44">
      <div className="w-screen h-screen relative">
        {/* Background Image */}
        <div className="w-screen"><CalculateBg /></div>
        {/* Centered Content */}
        <div className="flex flex-col gap-10 items-center justify-center absolute left-1/4 top-1/4  z-10">
          <h1 className="whitespace-nowrap text-5xl font-semibold mb-14">
            Calculate the cost of advertising
          </h1>
          <div className="w-full flex flex-col gap-7 border border-grayC rounded-lg p-8 pb-12">
            <div className="flex flex-col gap-2">
              <h5>Type of ads</h5>
              <AdDropdown />
            </div>
            <div className="flex flex-col gap-2">
              <h5>time</h5>
              <input className="px-4 py-2 border border-grayC rounded-lg text-[#565656]" placeholder='write your ads time' />
            </div>
          </div>
          <button onClick={() => setCalculateContent('final-cost')} className="py-2 text-whiteC rounded-lg w-full bg-[#47C666]">
            Calculate
          </button>
        </div>
      </div>
    </div>
  )
}
