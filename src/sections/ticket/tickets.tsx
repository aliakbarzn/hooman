'use client';

import { useTranslations } from 'next-intl'
import React from 'react'
import TicketCard from './ticket-card'

interface TicketsProps {
  handler: (v: string) => void
}

interface Tickets {
  number: number;
  subject: string;
  status: 'closed' | 'awaiting reply' | 'under review' | 'answered';
  updated: string;
}

export default function Tickets({ handler }: TicketsProps) {

  const t = useTranslations('Ticket.tickets')

  const tickets: Tickets[] = [
    {
      number: 342,
      subject: 'subject of the ticket',
      status: 'closed',
      updated: '04/13/2024'
    },
    {
      number: 125,
      subject: 'subject of the ticket',
      status: 'awaiting reply',
      updated: '04/13/2024'
    },
    {
      number: 987,
      subject: 'subject of the ticket',
      status: 'under review',
      updated: '04/13/2024'
    },
    {
      number: 988,
      subject: 'subject of the ticket',
      status: 'answered',
      updated: '04/13/2024'
    },
  ]

  return (
    <div className='p-20 max-w-[1200px] mx-auto flex flex-col gap-7'>
      {/* title */}
      <div className="flex flex-col gap-3 mb-5">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>
        <h3 className="text-xl text-blackC-light">{t('subtitle')}</h3>
      </div>
      {/* tickets */}
      {tickets.map(t => <TicketCard key={t.number} subject={t.subject} number={t.number} status={t.status} updated={t.updated} />)}
      <button onClick={() => handler('newTicket')} className='rounded-lg bg-[#47C666] py-2 text-white'>{t('button')}</button>
    </div>
  )
}
