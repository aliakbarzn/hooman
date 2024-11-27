'use client'
import React from 'react'
import { AdIcon, BookingIcon, CalenderIcon, CircledArrowIcon, CircledDollarIcon, CommentsIcon, EnvelopeIcon, HomeIcon, InventoryIcon, QuoteDollarIcon, SettingsIcon, WrenchIcon } from '@/assets/icons'
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
      subItems: [],
    },
    {
      id: 'dashboard',
      href: '/',
      icon: <HomeIcon />,
      title: 'Dashboard',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'buy-ads',
      href: '/',
      icon: <QuoteDollarIcon />,
      title: 'Buy ads',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'my-ads',
      href: '/',
      icon: <AdIcon />,
      title: 'My ads',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'make-an-ad',
      href: '/',
      icon: <WrenchIcon />,
      title: 'Make an ad',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'user-comments',
      href: '/',
      icon: <CommentsIcon />,
      title: 'User comments',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'history-bookings',
      href: '/',
      icon: <InventoryIcon />,
      title: 'History bookings',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'payment-history',
      href: '/',
      icon: <CircledDollarIcon />,
      title: 'Payment history',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'connect-booking',
      href: '/',
      icon: <BookingIcon />,
      title: 'Connect to booking program',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'booking-plan',
      href: '/',
      icon: <CalenderIcon />,
      title: 'Booking planning',
      hasChevron: false,
      subItems: [],
    },
    {
      id: 'settings',
      href: '/',
      icon: <SettingsIcon />,
      title: 'User account setting',
      hasChevron: true,
      subItems: [
        t('Services.servicesDashboard.items.item1.subItem1'),
        t('Services.servicesDashboard.items.item1.subItem2'),
        t('Services.servicesDashboard.items.item1.subItem3')
      ],
    },
  ];

  const handleItemClick = (id: string) => {
    setSelectedItem((prev) => (prev === id ? null : id)); // Toggle the selected item
  };

  return (
    <div className="w-[315px] p-2 bg-white border-y border-r border-[#D9D9D9]">

      {dashboardItems.map((item) => (
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
      ))}
    </div>
  );
}
