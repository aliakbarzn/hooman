import { BigCloseIcon, CommentsIcon, PaperClipIcon, SendIcon } from '@/assets/icons';
import React from 'react'

interface ChatBoxPropTypes {
  onClick: any;
  onClose: any;
}

export default function ChatBox({ onClick, onClose }: ChatBoxPropTypes) {
  const messages = [
    {
      id: 1,
      sender: 'admin',
      text: 'Hello! How can I assist you today?',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'admin',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 2,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
  ];

  return (
    <div onClick={onClick} className="h-[660px] w-[1072px] flex flex-col bg-background rounded-md shadow-lg">
      {/* Header */}
      <div className="flex border-b border-blackC-light p-8 justify-between items-center">
        {/* Header - Left */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-grayC rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-semibold">Riman rahi</h1>
              <div className="w-8 h-8">
                <CommentsIcon />
              </div>
            </div>
            <div className="text-blackC-light flex items-center gap-5 text-2xl">
              <p className="font-semibold">23min ago</p>
              <p className="last:font-normal">last seen</p>
            </div>
          </div>
        </div>
        {/* Header - Right */}
        <div className="flex flex-col gap-4 items-end">
          <button onClick={onClose}>
            <BigCloseIcon />
          </button>
          <p className="text-blackC-light">21/07/2024 date of register</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow overflow-y-auto p-8 gap-10">
        {/* Messages Section */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`p-4 rounded-3xl max-w-xs text-blackC-light ${message.sender === 'user'
                  ? 'bg-[#EFFFF3] rounded-bl-none'
                  : 'bg-[#F3F7FF] rounded-br-none'
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="sticky bottom-0 bg-background w-full px-8 py-4 flex flex-col gap-2 rounded-b-md">
        <div className="flex justify-end mb-2">
          <button className="text-white border-2 border-[#226EFF] rounded-full py-2 px-6 bg-[#6EA0FE]">
            Appointment
          </button>
        </div>
        <div className="flex items-center gap-4 w-full px-4 py-3 border border-grayC rounded-lg">
          <button>
            <SendIcon />
          </button>
          <input
            className="focus:outline-none w-full"
            placeholder="Message text"
            type="text"
          />
          <button>
            <PaperClipIcon />
          </button>
        </div>
        <p className="mr-2 text-blackC-light text-right">0/1000</p>
      </div>
    </div>
  );
}

