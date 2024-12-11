'use client'

import ChevronDown from '@/assets/icons/ChevronDown'
import React, { useState } from 'react'
import profPic from '@/assets/images/dashboard/notifications/user-profile.png'
import Image, { StaticImageData } from 'next/image';
import { CloseIcon, IconReply, IconThumb, QuoteIcon } from '@/assets/icons';
import Pagination from '@/sections/dashboard/messages/Pagination';
import { useTranslations } from 'next-intl';
import CommentCard from '@/sections/dashboard/comments/comment-card';

interface Comment {
  id: number;
  sender: string;
  senderPic: StaticImageData;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
}

export default function page() {

  const t = useTranslations("Dashboard.comments")

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 5,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 2,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 3,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 4,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 5,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 6,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 7,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 8,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 9,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 10,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 11,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
    {
      id: 12,
      sender: 'mia kalani',
      senderPic: profPic,
      date: '24/09/2024 23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.',
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
    },
  ])

  // const [comments, setComments] = useState<Comment[]>([])

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedField, setSelectedField] = useState('Sort by')
  const [selectedRadio, setSelectedRadio] = useState('dislike')

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


  const handleDislike = (id: number) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) {
          return { ...comment, dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes + 1, isDisliked: !comment.isDisliked }
        } return comment
      })
    )
  }

  const handleLike = (id: number) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) {
          return { ...comment, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1, isLiked: !comment.isLiked }
        } return comment
      })
    )
  }


  return (
    <div className='max-w-[1200px] p-20 flex flex-col gap-12 mx-auto'>
      {/* header -------------------------------------------------------------------------------------- */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{t("title")}</h2>
        <button onClick={() => setIsFilterOpen(true)} className="text-sm flex items-center gap-x-3 border border-[#79747E] rounded-lg py-[5px] px-3">
          <span>{t("filter")}</span>
          <ChevronDown />
        </button>
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50" onClick={() => setIsFilterOpen(false)}>
            <div className="bg-background rounded-md shadow-lg w-[1072px]" onClick={(e) => e.stopPropagation()}>
              {/* header */}
              <div className='border-b border-blackC-light flex items-center justify-between p-8'>
                <h1>Filters</h1>
                <span className='cursor-pointer' onClick={() => setIsFilterOpen(false)}><CloseIcon /></span>
              </div>
              {/* body */}
              <div className='flex'>
                {/* body left */}
                <div className='w-[353px] h-[497px] flex flex-col bg-[#f5f5f5]'>
                  {/* field */}
                  <div onClick={() => setSelectedField('Sort by')} className={`flex flex-col p-6  border-primary ${selectedField === 'Sort by' ? 'bg-white border-l-4' : null}`}>
                    <h3>Sort by</h3>
                    <span>{selectedRadio}</span>
                  </div>
                </div>
                {/* body right */}
                <div className="flex flex-col gap-y-10 p-20">
                  {selectedField === 'Sort by'
                    ?
                    <>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('date')}>
                        <div
                          onClick={() => setSelectedRadio('date')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "date" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "date" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>date</span>
                      </div>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('reply')}>
                        <div
                          onClick={() => setSelectedRadio('reply')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "reply" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "reply" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>reply</span>
                      </div>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('like')}>
                        <div
                          onClick={() => setSelectedRadio('like')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "like" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "like" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>like</span>
                      </div>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('dislike')}>
                        <div
                          onClick={() => setSelectedRadio('dislike')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "dislike" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "dislike" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>dislike</span>
                      </div>
                    </>
                    :
                    <>
                    </>
                  }
                </div>
              </div>
              {/* footer */}
              <div className='border-t border-blackC p-8 flex items-center justify-end gap-x-4'>
                <button className='rounded-lg px-14 py-2'>clear all</button>
                <button className='rounded-lg bg-primary text-whiteC px-14 py-2 '>apply</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* body -------------------------------------------------------------------------------------- */}
      {comments.length !== 0
        ?
        <>
          <div className="flex flex-col gap-10">
            {currentComments.map(comment => (
              <div key={comment.id}>
                <CommentCard
                  id={comment.id}
                  sender={comment.sender}
                  senderPic={comment.senderPic}
                  date={comment.date}
                  text={comment.text}
                  likes={comment.likes}
                  dislikes={comment.dislikes}
                  isLiked={comment.isLiked}
                  isDisliked={comment.isDisliked}
                  handleDislike={handleDislike}
                  handleLike={handleLike}
                />
              </div>
            ))}
          </div>
        </>
        :
        <>
          <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
            <div className='-mb-5 mt-20'><QuoteIcon /></div>
            <div className='flex flex-col gap-y-3 items-center'>
              <h3 className='text-2xl font-semibold'>No Messages</h3>
              <p className='text-blackC-light'>you have no active chat</p>
            </div>
            <button className='rounded-lg bg-primary px-8 py-2 text-[#f5f5f5]'>start new massage</button>
          </div>
        </>}

      {/* pagination -------------------------------------------------------------------------------------- */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
