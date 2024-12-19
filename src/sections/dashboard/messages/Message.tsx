import { BigCloseIcon, ClockwiseIcon, MassageIcon, OfficialIcon, PriceTagIcon, TimeIcon } from '@/assets/icons'
import IcStar from '@/assets/icons/search-page/ic-star'
import React from 'react'

interface MessagePropTypes {
  onClick: any;
  onClose: any
}

export default function Message({ onClick, onClose }: MessagePropTypes) {
  return (
    <div onClick={onClick} className='w-[1072px] flex flex-col bg-background rounded-md shadow-lg'>
      {/* header */}
      <div className="gap-y-3 flex flex-col border-b border-blackC-light px-10 py-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-4"><h1 className='text-[32px] font-semibold tracking-tight'>shum Thaimassage</h1><OfficialIcon /></div>
          <div className='cursor-pointer' onClick={onClose}><BigCloseIcon /></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-2">
              <span className='font-semibold text-2xl'>3.2</span>
              <span className='-mt-1 text-[#FFE605]'><IcStar /></span>
            </div>
            <p className='text-blackC-light font-semibold text-2xl'>(234) COMMENT</p>
          </div>
          <p className='text-blackC-light'>21/07/2024, 13:00</p>
        </div>
      </div>
      {/* body */}
      <div className="px-10 py-5 flex flex-col">
        <h2 className='mb-8 text-[28px] font-semibold'>Congratulations! Your time is set</h2>
        {/* table */}
        <div className="flex flex-col bg-[#f8f8f8] rounded-lg mb-5">
          <div className='border-b border-grayC p-5'>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center"><MassageIcon /><span>Type of service</span></div>
              <p>90 minutes of Thai massage</p>
            </div>
          </div>
          <div className='p-5'>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center"><TimeIcon /><span>time</span></div>
              <p>21/07/2024, 13:00</p>
            </div>
          </div>
          <div className='border-t border-grayC p-5'>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center"><PriceTagIcon /><span>price</span></div>
              <p>$432</p>
            </div>
          </div>
        </div>
        {/* note :  */}
        <div className='py-3 px-8 border border-greenC bg-greenC-lightPale text-greenC-darkPale rounded-lg mb-8'>
          <p><i>Note:</i> The Thai massage site is not responsible for your appointment and refund. <strong>Be careful in your choice!</strong></p>
        </div>
        {/* validity */}
        <div className='py-3 px-8 bg-[#FFE6E563] text-[#A6544F] rounded-lg flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <div className="flex items-center gap-x-2"><span><ClockwiseIcon /></span><span className='text-xl font-medium'>Validity of your turn</span></div>
          </div>
          <p>00:30:00</p>
        </div>
      </div>
      {/* footer */}
      <div className=" border-t border-blackC-light px-10 py-8 flex items-center justify-end gap-x-8">
        <button onClick={onClose} className='rounded-lg border border-blackC-light py-2 px-16'>cancel</button>
        <button className='rounded-lg border border-blackC-light py-2 px-16'>new turn</button>
        <button className='rounded-lg bg-[#47c666] text-whiteC py-2 px-16'>payment</button>
      </div>
    </div>
  )
}
