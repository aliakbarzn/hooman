'use client'
import NotificationCard from '@/sections/dashboard/notifications/notification-card';
import { useTranslations } from 'next-intl';
import React from 'react'

interface Notifications {
  salonName: string;
  date: string;
  text: string
}

export default function page() {

  const t = useTranslations("Dashboard.notifications.empty-notifications")

  const notifications: Notifications[] = [
    {
      salonName: 'salon name here',
      date: 'date: 24/09/2024     23:19',
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.',
    },
  ]

  // const notifications = []

  return (
    <div className="max-w-[1200px] flex flex-col px-28 py-20 mx-auto">
      {notifications.length !== 0
        ?
        notifications.map(n => <NotificationCard salonName={n.salonName} date={n.date} text={n.text} />)
        :
        <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
          <div>icon</div>
          <h2 className="text-2xl font-semibold">{t("title")}</h2>
          <p className="text-blackC-light w-64 text-center">{t("text")}</p>
        </div>
      }
    </div>
  )
}
