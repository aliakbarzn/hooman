'use client'

import { IconReply, IconThumb } from '@/assets/icons'
import React, { useState } from 'react'

export default function page() {

  const [isDisliked, setIsDisliked] = useState(false)
  const [isLiked, setIsLiked] = useState(true)

  return (
    <div className='flex flex-col'>
      {/* replied message */}
      <div className="py-20 bg-[#F1FFF4]">
        <div className="bg-background p-4 flex flex-col border border-grayC rounded-2xl rounded-br-none w-[1000px] mx-auto">
          {/* message header */}
          <div className="p-4 flex flex-col border-b border-grayC">
            <h3 className="">salon name here</h3>
            <h6 className='text-blackC-light'>date: 24/09/2024     23:19</h6>
          </div>
          {/* message body */}
          <p className="p-4 pt-6 text-blackC-light">your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.</p>
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
      <div className="py-20 bg-[#F3F6FF]">
        <div className="bg-background p-4 flex flex-col border border-grayC rounded-2xl rounded-bl-none w-[1000px] mx-auto">
          {/* reply header */}
          <div className="p-4 flex flex-col border-b border-grayC">
            <h3 className="">user name</h3>
            <h6 className='text-blackC-light'>date: 24/09/2024     23:19</h6>
          </div>
          {/* reply body */}
          <p className="p-4 pt-6 text-blackC-light">your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.</p>
          {/* reply footer */}
          <div className="flex items-center justify-end gap-5 pt-5 pb-3 px-5">
            <button className='rounded-lg w-28 h-10 border border-blackC'>cancel</button>
            <button className='rounded-lg w-28 h-10 bg-blackC text-whiteC'>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
