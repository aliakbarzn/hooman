import { CloseIcon, IconSimpleTick, PaperClipIcon, SendIcon } from '@/assets/icons';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

export default function SendTicket() {

  const t = useTranslations('Ticket.sendTicket')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const chatMessages = [
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
      id: 3,
      sender: 'admin',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 4,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 5,
      sender: 'admin',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 6,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
    {
      id: 7,
      sender: 'user',
      text: 'I need help with my account.I need help with my account.I need help with my account.I need help with my account.',
      date: '04/13/2024',
      time: '19:65'
    },
  ];

  return (
    <div className='max-w-[1200px] mx-auto p-20'>
      <div className="border border-grayC rounded-lg">
        <div className="flex flex-col flex-grow overflow-y-auto p-8 gap-10">
          {/* title */}
          <h2 className="text-2xl font-semibold">{t('title')}</h2>
          {/* Messages Section */}
          {chatMessages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className="flex flex-col gap-3">
                <div
                  className={`p-4 rounded-3xl max-w-xs text-blackC-light ${message.sender === 'user'
                    ? 'bg-[#EFFFF3] rounded-bl-none'
                    : 'bg-[#F3F7FF] rounded-br-none'
                    }`}
                >
                  {message.text}
                </div>
                <div className="px-2 flex gap-4 items-center text-blackC-light">
                  <h6>{message.date}</h6>
                  <h6>{message.time}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Input Section */}
        <div className="sticky bottom-0 bg-background w-full px-8 py-4 flex flex-col gap-2 rounded-b-md">
          <div className="flex items-center gap-4 w-full px-4 py-3 border border-grayC rounded-lg">
            <button onClick={() => setIsModalOpen(true)}><SendIcon /></button>
            <input className="focus:outline-none w-full" placeholder="Message text" type="text" />
            <button ><PaperClipIcon /></button>
          </div>
          <p className="mr-2 text-blackC-light text-right">0/1000</p>
        </div>
        {/* modal */}
        {isModalOpen &&
          <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-20 bg-black bg-opacity-30 flex items-center justify-center">
            <div onClick={e => e.stopPropagation()} className='p-5 rounded-lg bg-white'>
              <div className="flex justify-end">
                <div onClick={() => setIsModalOpen(false)} className="cursor-pointer"><CloseIcon /></div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className=""><IconSimpleTick /></div>
                <h3 className="text-2xl font-semibold">{t("modal.success.title")}</h3>
                <p className="mb-4 mx-8 text-center">{t("modal.success.text")}</p>
                <div className="mb-8 flex items-center gap-4">
                  <button className="px-3 py-2 rounded-lg border border-blackC-light ">{t('modal.success.button1')}</button>
                  <button className="px-3 py-2 rounded-lg bg-primary text-white">{t('modal.success.button2')}</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
