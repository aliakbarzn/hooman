'use client'
import React, { useEffect } from 'react'
import { AdIcon, BellIcon, BookingIcon, CalenderIcon, CircledArrowIcon, CircledDollarIcon, CommentsIcon, EnvelopeIcon, ExitIcon, HeadphoneIcon, HomeIcon, InventoryIcon, QuoteDollarIcon, SettingsIcon, ShieldIcon, WrenchIcon } from '@/assets/icons'
import { Link, usePathname } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const t = useTranslations("Dashboard.dashboard-items")

  const dashboardItems = [
    {
      id: 'messages',
      href: '/messages',
      icon: <EnvelopeIcon />,
      title: t('Messages'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'dashboard',
      href: '/',
      icon: <HomeIcon />,
      title: t('Dashboard'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'buy-ads',
      href: '/',
      icon: <QuoteDollarIcon />,
      title: t('Buy ads'),
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      id: 'my-ads',
      href: '/my-ads',
      icon: <AdIcon />,
      title: t('My ads'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'make-an-ad',
      href: '/',
      icon: <WrenchIcon />,
      title: t('Make an ad'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'user-comments',
      href: '/comments',
      icon: <CommentsIcon />,
      title: t('User comments'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'my-bookings',
      href: '/my-bookings',
      icon: <InventoryIcon />,
      title: t('MyBookings'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'history-bookings',
      href: '/bookings-history',
      icon: <InventoryIcon />,
      title: t('History bookings'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'payment-history',
      href: '/payment-history',
      icon: <CircledDollarIcon />,
      title: t('Payment history'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'connect-booking',
      href: '/connect-booking',
      icon: <BookingIcon />,
      title: t('Connect to booking program'),
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      id: 'booking-plan',
      href: '/',
      icon: <CalenderIcon />,
      title: t('Booking planning'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'settings',
      href: '/settings',
      icon: <SettingsIcon />,
      title: t('User account setting.title'),
      hasChevron: true,
      hasBorder: true,
      subItems: [
        t('User account setting.subItem1'),
        t('User account setting.subItem2'),
        t('User account setting.subItem3'),
      ],
    },
    {
      id: 'security',
      href: '/security',
      icon: <ShieldIcon />,
      title: t('security.title'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'notifications',
      href: '/notifications',
      icon: <BellIcon />,
      title: t('Notifications'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'support',
      href: '/support',
      icon: <HeadphoneIcon />,
      title: t('Support'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      id: 'exit',
      href: '/',
      icon: <ExitIcon />,
      title: t('Exit'),
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
          {item.hasBorder && <div className='h-[1px] w-[282px] bg-grayC ml-3 mb-3'></div>}
          <div key={item.id} className="mb-2">
            {/* Main Menu Item */}
            <Link href={`/dashboard${item.href}`}
              className={`flex items-center justify-between h-12 p-4 rounded-lg cursor-pointer transition-all ${selectedItem === item.id ? 'border-l-2 border-primary bg-[#FFF9F8]' : 'text-[#1E1E1E]'}`}
              onClick={() => handleItemClick(item.id)}>
              <div className="flex items-center gap-x-3">
                <span className={`w-4 h-4 ${selectedItem === item.id ? 'text-primary' : 'text-black'}`}>{item.icon}</span>
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