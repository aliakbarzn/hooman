'use client'

import ChevronDown from '@/assets/icons/ChevronDown'
import React, { useState } from 'react'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import Image, { StaticImageData } from 'next/image';
import { IconReply, IconThumb } from '@/assets/icons';
import Pagination from '@/sections/dashboard/messages/Pagination';

interface Comment {
  id: number;
  sender: string;
  senderPic: StaticImageData;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
}

export default function page() {

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 5,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 6,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 7,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 8,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 9,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 10,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 11,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
    {
      id: 12,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0
    },
  ])

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(comments?.length / itemsPerPage);
  // Get current page data
  const currentComments = comments?.slice(
    (currentPage) * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className='max-w-[1200px] p-20 flex flex-col gap-12 mx-auto'>
      {/* header -------------------------------------------------------------------------------------- */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">user comments</h2>
        <button onClick={() => setIsFilterOpen(true)} className="text-sm flex items-center gap-x-3 border border-[#79747E] rounded-lg py-[5px] px-3">
          <span>filter</span>
          <ChevronDown />
        </button>
      </div>
      {/* body -------------------------------------------------------------------------------------- */}
      <div className="flex flex-col gap-10">
        {currentComments.map(comment => (
          <div key={comment.id} className='border border-grayC rounded-2xl rounded-br-none p-3'>
            {/* comment header */}
            <div className="flex gap-3 items-center px-3 py-4 border-b border-grayC">
              <Image src={comment.senderPic} alt='sender-image' width={70} height={70} className='rounded-full' />
              <div className="flex flex-col">
                <h3 className="font-semibold">{comment.sender}</h3>
                <h6 className="text-blackC-light text-sm">date: {comment.date}</h6>
              </div>
            </div>
            {/* comment text */}
            <p className="text-blackC-light text-sm py-5 px-3 border-b border-grayC">{comment.text}</p>
            {/* comment footer */}
            <div className="flex items-center justify-between pt-5 pb-3 px-3">
              <div className='cursor-pointer'><IconReply /></div>
              <div className="flex items-center gap-2">
                <span className='text-blackC-light'>({comment.dislikes})</span>
                <button className="rotate-180 text-white"><IconThumb /></button>
                <button className='text-white'><IconThumb /></button>
                <span className='text-blackC-light'>({comment.likes})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* pagination -------------------------------------------------------------------------------------- */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
