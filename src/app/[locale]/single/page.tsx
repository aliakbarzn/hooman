import Image from 'next/image'
import React from 'react'
import banner from '@/assets/images/search-page/baner.png'
import { CalenderIcon, CommentsIcon, EnvelopeIcon, HomeIcon, IconArrow, IconFlag, IconHeart, IconMiniPicture, IconRingingBell, IconShare, InventoryIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import IcStar from '@/assets/icons/search-page/ic-star'

export default function page() {

  const t = useTranslations("Single")

  const salonPrices = [
    {
      massageType: 'Back massage',
      time: '1 over',
      price: '230 $',
    },
    {
      massageType: 'Mix Thai massage',
      time: '45 min',
      price: '230 $',
    },
    {
      massageType: 'Foot massage',
      time: '90 min',
      price: '230 $',
    },
    {
      massageType: 'Body scrub',
      time: '45 min',
      price: '230 $',
    },
    {
      massageType: 'Child Thai massage',
      time: '90 min',
      price: '230 $',
    },
    {
      massageType: '2 masseuse thai oil massage',
      time: '1 over',
      price: '230 $',
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
          <div className="flex flex-col gap-4">
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
      <div className=" p-14 flex flex-col gap-14">
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
      <div className="flex items-center justify-between px-14 py-8 bg-[#EFF5FF]">
        <span><IconRingingBell /></span>
        <h2 className="font-semibold text-[40px] text-[#06286A]">{t("booking")}</h2>
        <button className='w-12 h-12 rotate-180 flex justify-center items-center rounded-full bg-[#06286A]'><IconArrow /></button>
      </div>
      {/* about salon -------------------------------------------------------------------------------------------------------- */}
      <div className="p-14 flex flex-col gap-14 border-b border-grayC">
        <h3 className="text-3xl font-semibold">{t("about.title")}</h3>
        <p className="text-blackC-light text-xl">{t("about.text")}</p>
      </div>
      {/* prices table -------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col p-14 gap-14">
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
            {salonPrices.map((mType, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-[#CBFDD7]' : 'bg-[#ECFFF1]'}`}>
                <td className={`px-10 py-5 text-xl font-medium text-left border-r border-[#cccccc] ${index === salonPrices.length - 1 && 'rounded-bl-lg'}`}>{mType.massageType}</td>
                <td className={`px-10 py-5 text-xl font-medium text-center border-r border-[#cccccc]`}>{mType.time}</td>
                <td className={`px-10 py-5 text-xl font-medium text-center ${index === salonPrices.length - 1 && 'rounded-br-lg'}`}>{mType.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* payment methods */}
      <div className="bg-[#FFF0F0] flex items-center p-14">
        <h2 className="text-[40px] font-semibold text-[#762925]">Payment methods for booking</h2>
        <div className="flex items-center gap-8">

        </div>
      </div>
    </div>
  )
}
