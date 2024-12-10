'use client'

import React, { useState } from 'react';
import ChevronDown from '@/assets/icons/ChevronDown';
import MessageCard from '@/sections/dashboard/messages/MessageCard';
import Pagination from '@/sections/dashboard/messages/Pagination';
import CloseIcon from '@/assets/icons/CloseIcon';
import { QuoteIcon } from '@/assets/icons';
import Message from '@/sections/dashboard/messages/Message';
import ChatBox from '@/sections/dashboard/messages/ChatBox';

interface MessageTypes {
  id: number;
  selected: boolean;
  name: string;
  date: string;
  time: string;
  content: string;
}

const messages: MessageTypes[] = [
  {
    id: 1,
    selected: true, // Mark the first message as selected for demo
    name: 'mia kalani 1',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 2',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 3',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 4',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 5',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 6',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 7',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 8',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 9',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'mia kalani 10',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 11',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 12',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 13',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 14',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 15',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 16',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 17',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 18',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 19',
    date: `2024-11-09`,
    time: `1012`,
    content: `your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type.`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 20',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa 21',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
  {
    id: Math.floor(Math.random() * 1000),
    selected: false, // Mark the first message as selected for demo
    name: 'aaaaaaaa',
    date: `2024-11-09`,
    time: `1012`,
    content: `This is the content for message This is the content for messageThis is the content for messageThis is the content for message`,
  },
]

// const messages: MessageTypes[] = []

export default function Page() {

  // states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false)
  const [selectedField, setSelectedField] = useState('date')
  const [selectedRadio, setSelectedRadio] = useState('newest')

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(messages?.length / itemsPerPage);

  // Get current page data
  const currentMessages = messages?.slice(
    (currentPage) * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-[1200px] flex flex-col px-28 py-12 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-10">
          <button className="focus:bg-blackC focus:text-whiteC rounded-lg border border-grayC px-6 py-2">
            ALL Messages
          </button>
          <button className="focus:bg-blackC focus:text-whiteC rounded-lg border border-grayC px-6 py-2">
            Booking Paid
          </button>
          <button className="focus:bg-blackC focus:text-whiteC rounded-lg border border-grayC px-6 py-2">
            ALL Booking
          </button>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="text-sm flex items-center gap-x-3 border border-[#79747E] rounded-lg py-[5px] px-3">
          <span>filter</span>
          <ChevronDown />
        </button>
        {/* modal ---------------------------------------------------------------------------------------------------------------------------------- */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
            <div className="bg-background rounded-md shadow-lg w-[1072px]" onClick={(e) => e.stopPropagation()}>
              {/* header */}
              <div className='border-b border-blackC-light flex items-center justify-between p-8'>
                <h1>Filters</h1>
                <span className='cursor-pointer' onClick={() => setIsModalOpen(false)}><CloseIcon /></span>
              </div>
              {/* body */}
              <div className='flex'>
                {/* body left */}
                <div className='w-[353px] h-[497px] flex flex-col bg-[#f5f5f5]'>
                  {/* field */}
                  <div onClick={() => setSelectedField('date')} className={`flex flex-col p-6  border-primary ${selectedField === 'date' ? 'bg-white border-l-4' : null}`}>
                    <h3>Sort by</h3>
                    <span>date</span>
                  </div>
                  {/* field */}
                  <div onClick={() => setSelectedField('status')} className={`flex flex-col p-6 border-primary ${selectedField === 'status' ? 'bg-white border-l-4' : null}`}>
                    <h3>Sort by</h3>
                    <span>status</span>
                  </div>
                </div>
                {/* body right */}
                <div className="flex flex-col gap-y-10 p-20">
                  {selectedField === 'date'
                    ?
                    <>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('newest')}>
                        <div
                          onClick={() => setSelectedRadio('newest')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "newest" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "newest" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>newest</span>
                      </div>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('oldest')}>
                        <div
                          onClick={() => setSelectedRadio('oldest')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "oldest" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "oldest" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>oldest</span>
                      </div>
                    </>
                    :
                    <>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('read')}>
                        <div
                          onClick={() => setSelectedRadio('read')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "read" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "read" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>read</span>
                      </div>
                      <div className="flex items-center gap-x-3 cursor-pointer" onClick={() => setSelectedRadio('unread')}>
                        <div
                          onClick={() => setSelectedRadio('unread')}
                          className={`rounded-full h-10 w-10 border ${selectedRadio === "unread" ? "border-primary border-2" : "border-blackC-light"} flex items-center justify-center cursor-pointer`}
                        >
                          <div className={`rounded-full w-6 h-6 bg-primary ${selectedRadio === "unread" ? "opacity-100" : "opacity-0"}`}></div>
                        </div>
                        <span className='text-xl'>unread</span>
                      </div>
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

      {/* Messages */}
      <div className="flex flex-col gap-y-8 my-10">
        {messages.length !== 0 ? // checks if messages is empty or not to show the proper content
          <> 
            {currentMessages.map((message) => (
              <div key={message.id} onClick={() => setIsChatBoxOpen(true)}><MessageCard key={message.id} selected={message.selected} name={message.name} time={message.time} date={message.date} content={message.content} /></div>
            ))}
          </>
          : // show the empty messages page
          <>
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
              <div className='-mb-5 mt-20'><QuoteIcon /></div>
              <div className='flex flex-col gap-y-3 items-center'>
                <h3 className='text-2xl font-semibold'>No Messages</h3>
                <p className='text-blackC-light'>you have no active chat</p>
              </div>
              <button className='rounded-lg bg-primary px-8 py-2 text-[#f5f5f5]'>start new massage</button>
            </div>
          </>
        }
        {isMessageOpen && <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50' onClick={() => setIsMessageOpen(false)}>
          <Message onClose={() => setIsMessageOpen(false)} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.stopPropagation()} />
        </div>}

        {isChatBoxOpen && <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50' onClick={() => setIsChatBoxOpen(false)}>
          <ChatBox onClose={() => setIsChatBoxOpen(false)} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.stopPropagation()} />
        </div>}

      </div>
      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
