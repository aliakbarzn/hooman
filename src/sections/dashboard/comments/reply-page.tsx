import { IconReply, IconThumb } from '@/assets/icons'
import React, { useState } from 'react'

export default function ReplyPage() {

  const [isDisliked, setIsDisliked] = useState(false)
  const [isLiked, setIsLiked] = useState(true)

  return (
    <div className='flex flex-col'>
      {/* replied message */}
      <div className="pt-20 bg-[#F1FFF4]">
        <div className=" p-3 flex flex-col border border-grayC rounded-2xl rounded-br-none w-[1200px] mx-auto">
          {/* message header */}
          <div className="p-8 flex flex-col border-b border-grayC">
            <h3 className="">salon name here</h3>
            <h6 className=''>date: 24/09/2024     23:19</h6>
          </div>
          {/* message body */}
          <p className="">your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.</p>
          {/* message footer */}
          <div className="flex items-center justify-between pt-5 pb-3 px-3">
            <div className='cursor-pointer'><IconReply /></div>
            <div className="flex items-center gap-2">
              <span className='text-blackC-light'>(0)</span>
              <button onClick={() => setIsDisliked(!isDisliked)} className={`rotate-180 ${isDisliked ? 'text-blackC' : 'text-white'}`}><IconThumb /></button>
              <button onClick={() => setIsLiked(!isLiked)} className={`${isLiked ? 'text-blackC' : 'text-white'}`}><IconThumb /></button>
              <span className='text-blackC-light'>(9)</span>
            </div>
          </div>
        </div>
      </div>
      {/* reply */}
      <div className="pt-20 bg-[#F3F6FF]">
        <div className="p-16 flex flex-col border border-grayC rounded-2xl rounded-br-none w-[1200px] mx-auto">

        </div>
      </div>
    </div>
  )
}
