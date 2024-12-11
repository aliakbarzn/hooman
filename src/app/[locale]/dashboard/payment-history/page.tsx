'use client'

import ChevronDown from '@/assets/icons/ChevronDown'
import Pagination from '@/sections/dashboard/messages/Pagination';
import PaymentCard from '@/sections/dashboard/payment-history/payment-card';
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

interface Payment {
  type: string;
  date: string;
  price: number;
  typeOfService: "Thai massage" | "Oil massage";
  description: string;
  isSuccessful: boolean
}

export default function page() {

  // language
  const t = useTranslations("Dashboard.payment-history")

  // sample data
  const payments: Payment[] = [
    {
      type: 'receive',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Get for the prize",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: true
    },
    {
      type: 'payment',
      date: 'date: 24/09/2024     23:19',
      price: 1874304,
      typeOfService: "Thai massage",
      description: "Deposit for booking",
      isSuccessful: false
    },
  ]

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(payments?.length / itemsPerPage);

  // Get current page data
  const currentPayments = payments?.slice(
    (currentPage) * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='max-w-[1200px] p-20 flex flex-col gap-12 mx-auto'>
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{t("header.title")}</h2>
        <button className="text-sm flex items-center gap-x-3 border border-[#79747E] rounded-lg py-[5px] px-3">
          <span>filter</span>
          <ChevronDown />
        </button>
      </div>
      {/* body */}
      <div className="flex flex-col">
        {payments.length !== 0
          ?
          currentPayments.map(p =>
            <PaymentCard
              type={p.type}
              date={p.date}
              price={p.price}
              typeOfService={p.typeOfService}
              description={p.description}
              isSuccessful={p.isSuccessful}
            />
          )
          :
          <></>
        }
        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}


