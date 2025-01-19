'use client'
import React, { useEffect } from 'react'
import { AdIcon, BellIcon, BookingIcon, CalenderIcon, CircledArrowIcon, CircledDollarIcon, CommentsIcon, EnvelopeIcon, ExitIcon, HeadphoneIcon, HomeIcon, IconBarChart, IconProfile, InventoryIcon, QuoteDollarIcon, SettingsIcon, ShieldIcon, WrenchIcon } from '@/assets/icons'
import { Link, usePathname } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Dashboard() {
  const t = useTranslations("Dashboard.dashboard-items")
  const pathname = usePathname()

  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  useEffect(() => {
    setSelectedItem(`/${pathname.split('/')[2]}`)
    !pathname.split('/')[2] && setSelectedItem('/')
  }, [])

  const dashboardItems = [
    {
      href: '/messages',
      icon: <EnvelopeIcon />,
      title: t('Messages'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/my-profile',
      icon: <IconProfile />,
      title: t('MyProfile'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/analysis',
      icon: <IconBarChart />,
      title: t('Analysis'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/b',
      icon: <QuoteDollarIcon />,
      title: t('Buy ads'),
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      href: '/my-ads',
      icon: <AdIcon />,
      title: t('My ads'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/make-ad',
      icon: <WrenchIcon />,
      title: t('Make an ad'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/comments',
      icon: <CommentsIcon />,
      title: t('User comments'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/my-bookings',
      icon: <InventoryIcon />,
      title: t('MyBookings'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/bookings-history',
      icon: <InventoryIcon />,
      title: t('History bookings'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/payment-history',
      icon: <CircledDollarIcon />,
      title: t('Payment history'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/connect-booking',
      icon: <BookingIcon />,
      title: t('Connect to booking program'),
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
    {
      href: '/booking-plan',
      icon: <CalenderIcon />,
      title: t('Booking planning'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
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
      href: '/security',
      icon: <ShieldIcon />,
      title: t('security.title'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/notifications',
      icon: <BellIcon />,
      title: t('Notifications'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/support',
      icon: <HeadphoneIcon />,
      title: t('Support'),
      hasChevron: false,
      hasBorder: false,
      subItems: [],
    },
    {
      href: '/exit',
      icon: <ExitIcon />,
      title: t('Exit'),
      hasChevron: false,
      hasBorder: true,
      subItems: [],
    },
  ];

  const handleItemClick = (href: string) => {
    setSelectedItem((prev) => (prev === href ? null : href)); // Toggle the selected item
  };

  return (
    <div className="w-[315px] p-2 bg-white border-y border-r border-grayC">
      {dashboardItems.map((item) => (
        <div key={item.href} >
          {item.hasBorder && <div className='h-[1px] w-[282px] bg-grayC ml-3 mb-3'></div>}
          <div className="mb-2">
            {/* Main Menu Item */}
            <Link href={`/dashboard${item.href}`}
              className={`flex items-center justify-between h-12 p-4 rounded-lg cursor-pointer transition-all ${selectedItem === item.href ? 'border-l-2 border-primary bg-[#FFF9F8]' : 'text-blackC'}`}
              onClick={() => handleItemClick(item.href)}>
              <div className="flex items-center gap-x-3">
                <span className={`w-4 h-4 ${selectedItem === item.href ? 'text-primary' : 'text-black'}`}>{item.icon}</span>
                <span className={`${selectedItem === item.href ? 'text-primary' : 'text-black'}`}>{item.title}</span>
              </div>
              {(item.hasChevron) ?
                <span className={`h-5 w-5 transition-transform ${selectedItem === item.href ? 'rotate-90 text-primary' : 'text-gray-500'}`}><CircledArrowIcon /></span>
                : null}
            </Link>
            {/* Sub-Items */}
            {selectedItem === item.href && item.subItems.length > 0 && (
              <div className=" mt-3">
                {item.subItems.map((subItem, index) => (
                  <p key={index} className="text-sm font-normal text-[#757575] mb-3 ml-4 hover:text-primary cursor-pointer">
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}