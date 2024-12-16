
import { useTranslations } from 'next-intl';
import React from 'react'

interface TicketCardProps {
  subject: string;
  number: number;
  status: 'closed' | 'awaiting reply' | 'under review' | 'answered';
  updated: string;
}

export default function TicketCard({ number, subject, status, updated }: TicketCardProps) {

  const t = useTranslations('Ticket.tickets.ticket-card')

  return (
    <div className='flex items-center justify-between p-5 border-grayC border rounded-lg'>
      {/* left */}
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-semibold">{subject}</h4>
        <h5 className="text-blackC-light">{t('ticket-number')}: {number}</h5>
      </div>
      {/* right */}
      <div className="flex flex-col gap-3 items-end">
        <button className={`w-36 p-2 rounded-lg ${status === 'closed' ? 'bg-primary'
          : status === 'awaiting reply' ? 'bg-[#F5E875]'
            : status === 'under review' ? 'bg-[#E3E3E3]'
              : 'bg-[#70E38C]'}`}
        >
          {t(status)}
        </button>
        <h6 className="text-blackC-light">{t('updated')} {updated}</h6>
      </div>
    </div>
  )
}
