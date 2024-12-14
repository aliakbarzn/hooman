import { IconSharpStar, IconLike2 } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React from 'react'

interface SinglePageCommentPropTypes {
  id: number;
  sender: string;
  stars: number;
  time: number;
  text: string;
  likes: number;
}

export default function SinglePageComment({ id, sender, stars, time, text, likes }: SinglePageCommentPropTypes) {

  const t = useTranslations('Single.comments')

  return (
    <div key={id} className="flex flex-col gap-6 border-b border-grayC py-8 px-12">
      <h5 className="text-2xl font-medium">{sender}</h5>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-[2px] px-[6px] rounded-lg bg-[#0C521E] text-xl font-medium text-white">
          {stars}<span className='-mt-[2px]'><IconSharpStar /></span>
        </div>
        <h6 className='text-xl text-[#B3B3B3]'>{time} {t('comment-time')}</h6>
      </div>
      <p className="text-xl text-blackC-light">{text}</p>
      <div className="flex items-center gap-2 text-xl text-[#B3B3B3]">
        <IconLike2 />
        <span className='mt-1'>{likes}{t('person')}</span>
      </div>
    </div>
  )
}
