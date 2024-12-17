'use client'

import { QuoteIcon } from '@/assets/icons';
import Pagination from '@/sections/dashboard/messages/Pagination';
import DiscountCodeCard from '@/sections/dashboard/offers/discount-code-card';
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function page() {

  const t = useTranslations('Dashboard.offers')

  const discountCodes = [
    {
      id: 1,
      salonName: 'Zahra',
      percentage: 50,
      remainingTime: 9,
      disposable: true,
      code: 'hdodyws78d0fg4s4adss020'
    },
    {
      id: 2,
      salonName: 'mamad',
      percentage: 40,
      remainingTime: 9,
      disposable: true,
      code: 'hdodyws78d0fg4s4adss020'
    },
    {
      id: 3,
      salonName: 'hasan',
      percentage: 50,
      remainingTime: 5,
      disposable: true,
      code: 'hdodyws78d0fg4s4adss020'
    },
    {
      id: 4,
      salonName: 'nazanin',
      percentage: 70,
      remainingTime: 9,
      disposable: false,
      code: 'hdodyws78d0fg4s4adss020'
    },
    {
      id: 5,
      salonName: 'reza',
      percentage: 50,
      remainingTime: 2,
      disposable: true,
      code: 'hdodyws78d0fg4s4adss020'
    },
    {
      id: 6,
      salonName: 'sara',
      percentage: 18,
      remainingTime: 7,
      disposable: true,
      code: 'hdodyws78d0fg4s4adss020'
    },
  ]
  // const discountCodes = []

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(discountCodes?.length / itemsPerPage);

  // Get current page data
  const currentDiscountCodes = discountCodes?.slice(
    (currentPage) * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='max-w-[1200px] mx-auto p-20 flex flex-col gap-10'>
      {/* title */}
      <h2 className="text-xl font-semibold">{t('title')}</h2>
      {/* code cards */}
      {currentDiscountCodes.length !== 0
        ?
        currentDiscountCodes.map(discountCode =>
          <DiscountCodeCard
            id={discountCode.id}
            salonName={discountCode.salonName}
            percentage={discountCode.percentage}
            remainingTime={discountCode.remainingTime}
            disposable={discountCode.disposable}
            code={discountCode.code}
          />)
        :
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
          <div className='-mb-5 mt-20'><QuoteIcon /></div>
          <div className='flex flex-col gap-y-3 items-center'>
            <h3 className='text-2xl font-semibold'>{t('emptyPage.title')}</h3>
            <p className='text-blackC-light'>{t('emptyPage.text')}</p>
          </div>
        </div>
      }
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}
