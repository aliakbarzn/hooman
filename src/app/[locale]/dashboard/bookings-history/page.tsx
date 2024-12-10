'use client'

import { CloseIcon, IconPrinter, PicPayment, QuoteIcon } from '@/assets/icons'
import ChevronDown from '@/assets/icons/ChevronDown'
import Pagination from '@/components/pagination/Pagination';
import React, { useState } from 'react'
import BookingCard from './booking-card';
import { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

interface Booking {
  price: number;
  typeOfService: 'Thai massage' | 'Oil massage'
  date?: string;
  daysLeft?: number;
  userPic: StaticImageData;
}

export default function page() {

  // const bookings: Booking[] = [
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //     date: ' 24/09/2024     23:19',
  //     daysLeft: 5,
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Oil massage',
  //     date: ' 24/09/2024     23:19',
  //     daysLeft: 3,
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //     date: ' 24/09/2024     23:19',
  //     daysLeft: 7,
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //     date: ' 24/09/2024     23:19',
  //     daysLeft: 3,
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Oil massage',
  //     date: ' 24/09/2024     23:19',
  //     daysLeft: 3,
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Oil massage',
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Oil massage',
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //   },
  //   {
  //     price: 1874304,
  //     userPic: profPic,
  //     typeOfService: 'Thai massage',
  //   },
  // ]

  const bookings: Booking[] = []

  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false)

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(bookings?.length / itemsPerPage);

  // Get current page data
  const currentBookings = bookings?.slice(
    (currentPage) * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const t = useTranslations("Dashboard.bookings history")

  return (
    <div className="max-w-[1200px] flex flex-col px-28 py-12 mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className=" flex items-center justify-center gap-x-14">
          <button className="focus:bg-blackC focus:text-whiteC rounded-lg border border-grayC px-6 py-2">
            {t('header.booking paid')}
          </button>
          <button className="focus:bg-blackC focus:text-whiteC rounded-lg border border-grayC px-6 py-2">
            {t('header.unpaid booking')}
          </button>
          <button onClick={() => setIsPrintModalOpen(true)} className="">
            <IconPrinter />
          </button>
          {isPrintModalOpen
            &&
            // print modal ////////////////////////////////////////////////////////////////////////////////////////////////////
            <div onClick={() => setIsPrintModalOpen(false)} className="fixed z-10 inset-0 flex items-center justify-center h-screen w-screen bg-opacity-30 bg-black">
              <div onClick={e => e.stopPropagation()} className="bg-white p-8 rounded-lg shadow-lg w-[466px] flex flex-col gap-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">{t("header.print modal.title")}</h3>
                  <button onClick={() => setIsPrintModalOpen(false)} className="cursor-pointer"><CloseIcon /></button>
                </div>
                <p>{t("header.print modal.text")}</p>
                <div className="flex gap-3">
                  <button className="w-20 rounded-lg p-2 bg-[#C6FAD2] text-center">{t("header.print modal.button yes")}</button>
                  <button className="w-20 rounded-lg p-2 bg-primary text-center">{t("header.print modal.button no")}</button>
                </div>
              </div>
            </div>
            // print modal ////////////////////////////////////////////////////////////////////////////////////////////////////
          }
        </div>
        <button className="text-sm flex items-center gap-x-3 border border-[#79747E] rounded-lg py-[5px] px-3">
          <span>{t('header.filter')}</span>
          <ChevronDown />
        </button>
        {/* modal ---------------------------------------------------------------------------------------------------------------------------------- */}
      </div>

      {/* body */}
      <div className="mt-28 flex flex-col gap-28">
        {
          bookings.length !== 0
            ?
            <>
              {currentBookings.map(booking => (
                <BookingCard price={booking.price} typeOfService={booking.typeOfService} date={booking.date} daysLeft={booking.daysLeft} userPic={booking.userPic} />
              ))}
            </>
            :
            <>
              <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
                <div className='-mb-5 mt-20'><PicPayment /></div>
                <div className='flex flex-col gap-y-3 items-center'>
                  <h3 className='text-2xl font-semibold'>{t("empty booking.title")}</h3>
                  <p className='text-blackC-light text-center'>{t("empty booking.text1")}<br/>{t("empty booking.text2")}</p>
                </div>
                <button className='rounded-lg bg-primary px-8 py-2 text-[#f5f5f5]'>{t("empty booking.button")}</button>
              </div>
            </>
        }
      </div>

      {/* pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>

  )
}
