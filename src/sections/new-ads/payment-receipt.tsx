import { Link } from '@/navigation';
import React from 'react'

export default function PaymentReceipt() {
  return (
    <div className='flex flex-col gap-12 items-center py-40'>
      <h1 className='font-semibold text-5xl'>payment receipt</h1>
      <p className='text-2xl text-blackC-light text-center'>Your ad with the following specifications will be activated<br /> on <strong>12/03/2025</strong></p>
      <div className="mt-14 mb-6 w-[850px] flex flex-col p-3 border border-grayC rounded-2xl relative">
        <div className="flex items-center justify-between border-b border-grayC px-4 pt-3 pb-4 mb-1">
          <h4 className='font-semibold'>type of ad</h4>
          <span className='text-blackC-light'>date: 24/09/2024     23:19</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h5 className=''>price</h5>
          <span className='text-blackC-light'>1,874,304 $</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h5 className=''>time</h5>
          <span className='text-blackC-light'>Thai massage</span>
        </div>
        {/* successful tag */}
        <div className="right-7 -top-px transform -translate-y-full absolute bg-[#70E38C] rounded-t-lg text-center text-[#F3F3F3] py-2 px-3">
          successful
        </div>
      </div>
      <div className="flex items-center justify-between gap-14 text-2xl w-[850px]">
        <Link href='/dashboard/my-ads' className="text-center py-1 grow rounded-lg border border-blackC-light">All my ads</Link>
        <button className="py-1 grow text-whiteC rounded-lg bg-[#47C666]">Make ad</button>
      </div>
    </div>
  )
}
