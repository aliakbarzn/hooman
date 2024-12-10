import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { IconReply, IconThumb } from '@/assets/icons';
import Link from 'next/link';

interface CommentCardPropTypes {
  id: number;
  sender: string;
  senderPic: StaticImageData;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
  handleDislike: (id: number) => void;
  handleLike: (id: number) => void;
}

export default function CommentCard({ id, senderPic, sender, date, text, dislikes, likes, isLiked, isDisliked, handleDislike, handleLike }: CommentCardPropTypes) {
  return (
    <div key={id} className='border border-grayC rounded-2xl rounded-br-none p-3'>
      {/* comment header */}
      <div className="flex gap-3 items-center px-3 py-4 border-b border-grayC">
        <Image src={senderPic} alt='sender-image' width={70} height={70} className='rounded-full' />
        <div className="flex flex-col">
          <h3 className="font-semibold">{sender}</h3>
          <h6 className="text-blackC-light text-sm">date: {date}</h6>
        </div>
      </div>
      {/* comment text */}
      <p className="text-blackC-light text-sm py-5 px-3 border-b border-grayC">{text}</p>
      {/* comment footer */}
      <div className="flex items-center justify-between pt-5 pb-3 px-3">
        <Link href='comments/reply' className='cursor-pointer'><IconReply /></Link>
        <div className="flex items-center gap-2">
          <span className='text-blackC-light'>({dislikes})</span>
          <button onClick={() => handleDislike(id)} className={`rotate-180 ${isDisliked ? 'text-blackC' : 'text-white'}`}><IconThumb /></button>
          <button onClick={() => handleLike(id)} className={`${isLiked ? 'text-blackC' : 'text-white'}`}><IconThumb /></button>
          <span className='text-blackC-light'>({likes})</span>
        </div>
      </div>
    </div>
  )
}
