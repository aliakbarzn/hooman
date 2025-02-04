'use client';

import Image from 'next/image'
import React from 'react'
import banner from '@/assets/images/search-page/baner.png'
import { CalenderIcon, CommentsIcon, EnvelopeIcon, HomeIcon, IconArrow, IconColoredPayment, IconFlag, IconHeart, IconMiniPicture, IconRingingBell, IconShare, IconVisa, InventoryIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import IcStar from '@/assets/icons/search-page/ic-star'
import IconPaypal from '@/assets/icons/single/payment-methods/icon-paypal'
import SinglePageComment from '@/sections/single/single-page-comment'
import SinglePageAddComment from '@/sections/single/single-page-add-comment'
import SinglePageWorkingHours from '@/sections/single/single-page-working-hours'
import SinglePageLocation from '@/sections/single/single-page-location'
import Discounts from '@/sections/single/discounts'

export default function page() {

  const t = useTranslations("Single")

  const salonMassagePrices = [
    {
      massageName: 'Back massage',
      time: '1 over',
      price: '230 $',
    },
    {
      massageName: 'Mix Thai massage',
      time: '45 min',
      price: '230 $',
    },
    {
      massageName: 'Foot massage',
      time: '90 min',
      price: '230 $',
    },
    {
      massageName: 'Body scrub',
      time: '45 min',
      price: '230 $',
    },
    {
      massageName: 'Child Thai massage',
      time: '90 min',
      price: '230 $',
    },
    {
      massageName: '2 masseuse thai oil massage',
      time: '1 over',
      price: '230 $',
    },
  ]

  const comments = [
    {
      id: 1,
      sender: 'gaslin mina',
      stars: 5,
      time: 3,
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.',
      likes: 23
    },
    {
      id: 1,
      sender: 'gaslin mina',
      stars: 5,
      time: 3,
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.',
      likes: 23
    },
    {
      id: 1,
      sender: 'gaslin mina',
      stars: 5,
      time: 3,
      text: 'your masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  myour masage type in there. your masage type in there, your masage type in there m your masage type in there. your masage type in there, your masage type in there  m.',
      likes: 23
    },
  ]

  return (
    <div className='flex flex-col '>
      {/* header -------------------------------------------------------------------------------------------------------- */}
      <div className="border-b border-grayC flex flex-col">
        {/* banner */}
        <Image src={banner} alt='salon picture' className="w-full h-[650px]" />
        {/* content */}
        <div className=" relative p-14">
          <div className="absolute z-10 -top-12 left-12 flex items-center gap-4">
            <IconMiniPicture />
            <span className='text-whiteC text-2xl font-semibold'>4/234</span>
          </div>
          <div className="absolute z-10 -top-10 right-12 flex gap-10">
            <button className="rounded-full w-20 h-20 shadow-xl flex items-center justify-center bg-white"><IconFlag /></button>
            <button className="rounded-full w-20 h-20 shadow-xl flex items-center justify-center bg-white"><IconShare /></button>
            <button className="rounded-full w-20 h-20 shadow-xl flex items-center justify-center bg-white"><IconHeart /></button>
          </div>
          <div className="flex flex-col gap-4 max-w-[1300px] mx-auto">
            <h2 className="text-3xl font-semibold">{t("header.title")}</h2>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 items-center">
                  <span className='text-2xl font-semibold'>3.9</span>
                  <span className='text-[#FFE605]'><IcStar /></span>
                </div>
                <div className="flex gap-2 items-center text-blackC-light">
                  <span className='text-2xl font-semibold'>(234)</span>
                  {t("header.label")}
                </div>
              </div>
              <div className="flex items-center gap-2 text-blackC-light">
                <span className='text-[#5A5A5A] w-8 h-8'><CommentsIcon /></span>
                <span className='text-2xl'>{43} {t("header.comments")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* facilities -------------------------------------------------------------------------------------------------------- */}
      <div className=" p-14 flex flex-col w-full gap-14 max-w-[1300px] mx-auto">
        <h2 className="font-semibold text-3xl">{t("facilities.title")}</h2>
        <div className="flex gap-10 justify-between">
          {/* column */}
          <div className="flex flex-col gap-14">
            <div className="flex items-center gap-3"><span><EnvelopeIcon /></span>sauna</div>
            <div className="flex items-center gap-3"><span><InventoryIcon /></span>gift card</div>
            <div className="flex items-center gap-3"><span><HomeIcon /></span>payment by cash</div>
            <div className="flex items-center gap-3"><span><CalenderIcon /></span>free internet</div>
          </div>
          {/* column */}
          <div className="flex flex-col gap-14">
            <div className="flex items-center gap-3"><span><EnvelopeIcon /></span>wifi</div>
            <div className="flex items-center gap-3"><span><InventoryIcon /></span>parking lot</div>
            <div className="flex items-center gap-3"><span><HomeIcon /></span>massage with oil</div>
            <div className="flex items-center gap-3"><span><CalenderIcon /></span>thai massage</div>
          </div>
          {/* column */}
          <div className="flex flex-col gap-14">
            <div className="flex items-center gap-3"><span><EnvelopeIcon /></span>mini health care</div>
            <div className="flex items-center gap-3"><span><InventoryIcon /></span>shower</div>
            <div className="flex items-center gap-3"><span><HomeIcon /></span>WC</div>
            <div className="flex items-center gap-3"><span><CalenderIcon /></span>swish</div>
          </div>
        </div>
      </div>
      {/* booking -------------------------------------------------------------------------------------------------------- */}
      <div className="w-full bg-[#EFF5FF]">
        <div className='flex items-center justify-between px-14 py-8 max-w-[1300px] mx-auto'>
          <span><IconRingingBell /></span>
          <h2 className="font-semibold text-[40px] text-[#06286A]">{t("booking")}</h2>
          <button className='w-12 h-12 rotate-180 flex justify-center items-center rounded-full bg-[#06286A]'><IconArrow /></button>
        </div>
      </div>
      {/* about salon -------------------------------------------------------------------------------------------------------- */}
      <div className="border-b border-grayC ">
        <div className="max-w-[1300px] mx-auto p-14 flex flex-col gap-14 ">
          <h3 className="text-3xl font-semibold">{t("about.title")}</h3>
          <p className="text-blackC-light text-xl">{t("about.text")}</p>
        </div>
      </div>
      {/* prices table -------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col p-14 gap-14 w-full max-w-[1300px] mx-auto">
        <h3 className="font-semibold text-3xl">{t("prices.title")}</h3>

        <table className="min-w-full rounded-lg mb-14">
          <thead>
            <tr className="bg-[#ECFFF1]">
              <th className="py-5 px-10 border-r border-[#cccccc] text-left rounded-tl-lg text-[#08601D] text-2xl font-bold w-3/5">Type of service</th>
              <th className="py-5 px-10 border-r border-[#cccccc] text-[#08601D] text-2xl font-bold w-1/5">time</th>
              <th className="py-5 px-10 rounded-tr-lg text-[#08601D] text-2xl font-bold w-1/5">price</th>
            </tr>
          </thead>
          <tbody>
            {salonMassagePrices.map((massageType, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-[#CBFDD7]' : 'bg-[#ECFFF1]'}`}>
                <td className={`px-10 py-5 text-xl font-medium text-left border-r border-[#cccccc] ${index === salonMassagePrices.length - 1 && 'rounded-bl-lg'}`}>{massageType.massageName}</td>
                <td className={`px-10 py-5 text-xl font-medium text-center border-r border-[#cccccc]`}>{massageType.time}</td>
                <td className={`px-10 py-5 text-xl font-medium text-center ${index === salonMassagePrices.length - 1 && 'rounded-br-lg'}`}>{massageType.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* payment methods -------------------------------------------------------------------------------------------------------- */}
      <div className="bg-[#FFF0F0] ">
        <div className="flex items-center justify-between px-14 py-8 max-w-[1300px] mx-auto">
          <h2 className="text-[40px] font-semibold text-[#762925]">{t("payment-methods")}</h2>
          <div className="flex items-center gap-8">
            <span className='h-12 w-26'><IconVisa /></span>
            <span className='w-12 h-14'><IconPaypal /></span>
            <span className='h-[62px] w-[62px]'><IconColoredPayment /></span>
          </div>
        </div>
      </div>
      {/* comments -------------------------------------------------------------------------------------------------------- */}
      <div className="px-2 flex flex-col">
        <div className="px-12 py-14 text-3xl font-semibold border-b border-grayC">
          <h3 className='max-w-[1300px] mx-auto w-full px-14'>{t('comments.title')}</h3>
        </div>
        {comments.map(c => (
          <SinglePageComment id={c.id} sender={c.sender} stars={c.stars} time={c.time} text={c.text} likes={c.likes} />
        ))}
        {/* see more */}
        <div className="py-6 flex items-center justify-center border-b border-grayC">
          <button className="flex gap-4 items-center">
            <h3 className="font-medium text-[40px] text-primary">{t("comments.see-more")}</h3>
            <div className="bg-[#FFF0F0] rounded-full w-10 h-10 text-primary text-4xl pt-[2px]">{'>'}</div>
          </button>
        </div>
        {/* add a comment */}
        <SinglePageAddComment />
      </div>
      {/* working hours -------------------------------------------------------------------------------------------------------- */}
      <SinglePageWorkingHours />
      {/* location */}
      <SinglePageLocation />
      {/* discounts */}
      <Discounts />
    </div>
  )
}
