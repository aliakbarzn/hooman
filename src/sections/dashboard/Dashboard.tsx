'use client'
import React from 'react'
import { AdIcon, BellIcon, BookingIcon, CalenderIcon, CircledArrowIcon, CircledDollarIcon, CommentsIcon, EnvelopeIcon, ExitIcon, HeadphoneIcon, HomeIcon, InventoryIcon, QuoteDollarIcon, SettingsIcon, ShieldIcon, WrenchIcon } from '@/assets/icons'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const t = useTranslations()

  const dashboardItems = [
    {
      id: 'messages',
      href: '/',
      icon: <EnvelopeIcon />,
      title: 'Messages',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'dashboard',
      href: '/',
      icon: <HomeIcon />,
      title: 'Dashboard',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'buy-ads',
      href: '/',
      icon: <QuoteDollarIcon />,
      title: 'Buy ads',
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      id: 'my-ads',
      href: '/',
      icon: <AdIcon />,
      title: 'My ads',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'make-an-ad',
      href: '/',
      icon: <WrenchIcon />,
      title: 'Make an ad',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'user-comments',
      href: '/',
      icon: <CommentsIcon />,
      title: 'User comments',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'history-bookings',
      href: '/',
      icon: <InventoryIcon />,
      title: 'History bookings',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'payment-history',
      href: '/',
      icon: <CircledDollarIcon />,
      title: 'Payment history',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'connect-booking',
      href: '/',
      icon: <BookingIcon />,
      title: 'Connect to booking program',
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      id: 'booking-plan',
      href: '/',
      icon: <CalenderIcon />,
      title: 'Booking planning',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'settings',
      href: '/',
      icon: <SettingsIcon />,
      title: 'User account setting',
      hasChevron: true,
      hasBorder: true,
      subItems: [
        'Set up payment notifications',
        'Edit information',
        'Set up login notifications'
      ],
    },
    {
      id: 'security',
      href: '/',
      icon: <ShieldIcon />,
      title: 'Security',
      hasChevron: true,
      hasBorder: false,
      subItems: [
        'Set up payment notifications',
        'Edit information',
        'Set up login notifications'
      ],
    },
    {
      id: 'notifications',
      href: '/',
      icon: <BellIcon />,
      title: 'Notifications',
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'support',
      href: '/',
      icon: <HeadphoneIcon />,
      title: 'Support',
      hasChevron: false,
      hasBorder: false,
      subItems: [
        'Set up payment notifications',
        'Edit information',
        'Set up login notifications'
      ],
    },
    {
      id: 'exit',
      href: '/',
      icon: <ExitIcon />,
      title: 'Exit ',
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
  ];

  const handleItemClick = (id: string) => {
    setSelectedItem((prev) => (prev === id ? null : id)); // Toggle the selected item
  };

  return (
    <div className="w-[315px] p-2 bg-white border-y border-r border-[#D9D9D9]">
      {dashboardItems.map((item) => (
        <>
        {item.hasBorder && <div className='h-[1px] w-[265px] bg-grayC ml-3 mb-3'></div>}
          <div key={item.id} className="mb-2">
            {/* Main Menu Item */}
            <Link href={`/dashboard`}
              className={`flex items-center justify-between h-12 p-4 rounded-lg cursor-pointer transition-all ${selectedItem === item.id ? 'border-l-2 border-primary bg-[#FFF9F8]' : 'text-[#1E1E1E]'}`}
              onClick={() => handleItemClick(item.id)}>
              <div className="flex items-center gap-x-3">
                <span className={`${selectedItem === item.id ? 'text-primary' : 'text-black'}`}>{item.icon}</span>
                <span className={`${selectedItem === item.id ? 'text-primary' : 'text-black'}`}>{item.title}</span>
              </div>
              {(item.hasChevron) ?
                <span className={`transition-transform ${selectedItem === item.id ? 'rotate-90 text-primary' : 'text-gray-500'}`}><CircledArrowIcon /></span>
                : null}
            </Link>
            {/* Sub-Items */}
            {selectedItem === item.id && item.subItems.length > 0 && (
              <div className=" mt-3">
                {item.subItems.map((subItem, index) => (
                  <p key={index} className="text-sm font-normal text-[#757575] mb-3 ml-4 hover:text-primary cursor-pointer">
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}