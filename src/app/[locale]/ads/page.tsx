'use client'

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import banner1 from '@/assets/images/ads/banner1.png';
import banner2 from '@/assets/images/ads/banner2.png';
import banner3 from '@/assets/images/ads/banner3.png';
import mainBanner from '@/assets/images/search-page/baner.png'
import salonCardImage from '@/assets/images/search-page/i-card.png'
import { useTranslations } from 'next-intl';
import SalonDataCard from '@/components/cards/card-salon-data';
import Filters from '@/components/filters/Filters';

interface SalonCardsData {
  id: number
  type?: 'timed' | 'pink' | 'free';
  image: StaticImageData;
  title: string;
  rating: number;
  hasHeartTag: boolean;
  isSponsored: boolean;
  sponsoredColor: string;
  borderColor: string;
  reviewCount: number;
  description: string;
  isOpen: boolean;
  discount: string;
  features: {
    [key: string]: boolean;
  };
}

export default function Page() {
  const t = useTranslations('Ads')

  const salonCardsData: SalonCardsData[] = [
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: true,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      discount: "20% off",
      features: {
        giftCard: true,
        shower: true,
        sauna: true,
        swish: true,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "",
      features: {
        giftCard: true,
        shower: false,
        sauna: false,
        swish: false,
        parking: true,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 2,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "44% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      discount: "",
      features: {
        giftCard: false,
        shower: false,
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "",
      features: {
        giftCard: false,
        shower: false,
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 3,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "65% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 1,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "100% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "20% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "20% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
      id: Math.random(),
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: false,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "20% off",
      features: {
        giftCard: false,
        shower: false,
        sauna: false,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
  ]

  const [finalFilteredData, setFinalFilteredData] = useState<SalonCardsData[]>(salonCardsData)

  return (
    <div className="flex flex-col">
      {/* 3 banners */}
      <div className="bg-greenC-lightPale">
        <div className="max-w-[1600px] mx-auto flex gap-12 p-14 ">
          <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner1} width={650} height={325} alt='banner1' /></div>
          <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner2} width={650} height={325} alt='banner2' /></div>
          <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner3} width={650} height={325} alt='banner3' /></div>
        </div>
      </div>
      {/* main banner */}
      <div className="relative w-full">
        <Image className="w-full h-[556px]" height={556} src={mainBanner} alt="mainBanner" />
        <div className="absolute top-0 left-0 h-full flex flex-col justify-center ml-16">
          <h4 className="text-[#FEE9E7] text-3xl font-bold">{t("mainBanner.getUpTo")}</h4>
          <div className="flex flex-row my-2">
            <h4 className="text-white text-5xl font-bold">{'50%'}</h4>
            <h4 className="text-white text-4xl font-bold ml-2">{t("mainBanner.off")}</h4>
          </div>
          <span className="text-[#FEE9E7] text-3xl">{t("mainBanner.text")}</span>
          <button className="p-3 text-[#F5F5F5] bg-primary text-2xl mt-7 rounded-lg">{t("mainBanner.button")}</button>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto p-14 flex flex-col gap-10 items-start w-full">
        {/* cards filters */}
        <Filters
          setFinalFilteredData={setFinalFilteredData}
          salonCardsData={salonCardsData}
        />

        {/* cards */}
        <h3 className="font-semibold text-2xl mt-20">massage parlors in Tyresö</h3>
        <div className="flex flex-wrap w-full gap-10">
          {finalFilteredData.length
            ?
            finalFilteredData?.map(cardData =>
              <SalonDataCard
                key={cardData.id}
                image={cardData.image}
                title={cardData.title}
                discount={cardData.discount}
                rating={cardData.rating}
                hasHeartTag={cardData.hasHeartTag}
                isSponsored={cardData.isSponsored}
                sponsoredColor={cardData.sponsoredColor}
                borderColor={cardData.borderColor}
                reviewCount={cardData.reviewCount}
                description={cardData.description}
                isOpen={cardData.isOpen}
                features={cardData.features}
              />
            )
            :
            <h3 className="w-full text-center text-blackC-light">No matches found. try adjusting your filters.</h3>
          }
        </div>
      </div>
    </div>
  );
}


