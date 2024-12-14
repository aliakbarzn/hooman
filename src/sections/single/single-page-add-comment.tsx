'use client'

import { IconHappyFace, IconLovingFace, IconPokerFace, IconStarryFace, IconAngryFace } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function SinglePageAddComment() {

  const t = useTranslations('Single.comments.add-a-comment')

  const [selectedEmoji, setSelectedEmoji] = useState('5')

  return (
    <div className="flex flex-col gap-8 p-14">
      {/* title */}
      <h4 className="text-2xl font-semibold">{t('title')}</h4>
      {/* body */}
      <div className="flex gap-8">
        {/* body left */}
        <div className="flex flex-col gap-8 w-1/2">
          <div className="flex flex-col gap-4">
            <h6>{t('name')}</h6>
            <input className='border border-grayC py-2 px-4 rounded-lg' type="text" placeholder={t('value')} />
          </div>
          <div className="flex flex-col gap-4">
            <h6>{t('surname')}</h6>
            <input className='border border-grayC py-2 px-4 rounded-lg' type="text" placeholder={t('value')} />
          </div>
          <div className="flex flex-col gap-4">
            <h6>{t('email')}</h6>
            <input className='border border-grayC py-2 px-4 rounded-lg' type="text" placeholder={t('value')} />
          </div>
        </div>
        {/* body right */}
        <div className="flex flex-col w-1/2 gap-4">
          <h6>{t('message')}</h6>
          <textarea className='border border-grayC py-2 px-4 rounded-lg h-56' placeholder={t('value')}></textarea>
          <span className='text-blackC-light'>{t('words-count')}</span>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center gap-8">
        <div className="w-5/6 bg-[#f5f5f5] px-6 h-12 flex items-center justify-between rounded-lg">
          <h5 className="text-xl">{t("rate-title")}</h5>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedEmoji('1')}
              className={`transition duration-300 flex items-center gap-2 ${selectedEmoji === '1' ? 'rounded-lg py-1 px-4 bg-[#F58882] text-white' : 'text-[#F58882] p-0 bg-none'}`}
              id='1'
            >
              <IconAngryFace />
              {selectedEmoji === '1' && 'rate'}
            </button>
            <button
              onClick={() => setSelectedEmoji('2')}
              className={`transition duration-300 flex items-center gap-2 ${selectedEmoji === '2' ? 'rounded-lg py-1 px-4 bg-[#FA8231] text-white' : 'text-[#FA8231] p-0 bg-none'}`}
              id='2'
            >
              <IconAngryFace />
              {selectedEmoji === '2' && 'rate'}
            </button>
            <button
              onClick={() => setSelectedEmoji('3')}
              className={`transition duration-300 flex items-center gap-2 ${selectedEmoji === '3' ? 'rounded-lg py-1 px-4 bg-[#F7B731] text-white' : 'text-[#F7B731] p-0 bg-none'}`}
              id='3'
            >
              <IconAngryFace />
              {selectedEmoji === '3' && 'rate'}
            </button>
            <button
              onClick={() => setSelectedEmoji('4')}
              className={`transition duration-300 flex items-center gap-2 ${selectedEmoji === '4' ? 'rounded-lg py-1 px-4 bg-[#45AAF2] text-white' : 'text-[#45AAF2] p-0 bg-none'}`}
              id='4'
            >
              <IconStarryFace />
              {selectedEmoji === '4' && 'rate'}
            </button>            <button
              onClick={() => setSelectedEmoji('5')}
              className={`transition duration-300 flex items-center gap-2 ${selectedEmoji === '5' ? 'rounded-lg py-1 px-4 bg-[#47C666] text-white' : 'text-[#47C666] p-0 bg-none'}`}
              id='5'
            >
              <IconStarryFace />
              {selectedEmoji === '5' && 'rate'}
            </button>
          </div>
        </div>
        <button className="w-1/6 bg-primary rounded-lg h-12">{t('submit')}</button>
      </div>
    </div>
  )
}
