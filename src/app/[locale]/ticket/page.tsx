'use client'

import NewTicket from '@/sections/ticket/new-ticket'
import Tickets from '@/sections/ticket/tickets'
import React, { useState } from 'react'

export default function page() {

  const [isNewTicket, setIsNewTicket] = useState(false)

  return (
    <div>
      {!isNewTicket
        ?
        <Tickets isNewTicket={isNewTicket} handler={setIsNewTicket} />
        :
        <NewTicket />
      }
    </div>
  )
}
