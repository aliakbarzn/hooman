'use client'

import NewTicket from '@/sections/ticket/new-ticket'
import SendTicket from '@/sections/ticket/send-ticket'
import Tickets from '@/sections/ticket/tickets'
import React, { useState } from 'react'

export default function page() {

  const [ticketPage, setTicketPage] = useState('tickets') // State to change the content

  return (
    <div>
      {ticketPage === 'tickets' ? <Tickets handler={setTicketPage} />
        : ticketPage === 'newTicket' ? <NewTicket handler={setTicketPage} />
          : <SendTicket />
      }
    </div>
  )
}
