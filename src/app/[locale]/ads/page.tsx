import Image, { StaticImageData } from 'next/image';
import React from 'react';
import banner1 from '@/assets/images/ads/banner1.png';
import banner2 from '@/assets/images/ads/banner2.png';
import banner3 from '@/assets/images/ads/banner3.png';
import mainBanner from '@/assets/images/search-page/baner.png'
import salonCardImage from '@/assets/images/search-page/i-card.png'
import { useTranslations } from 'next-intl';
import SalonDataCard from '@/components/cards/card-salon-data';

interface SalonCardsData {
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
      image: salonCardImage,
      title: "Elite Thai Massage",
      rating: 4.5,
      hasHeartTag: true,
      isSponsored: true,
      sponsoredColor: '#FD5950',
      borderColor: '#47C666',
      reviewCount: 120,
      description: "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "20% off",
      features: {
        giftCard: true,
        shower: false,
        sauna: true,
        swish: true,
        parking: false,
        cashPayment: true,
      },
    },
    {
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
        giftCard: true,
        shower: false,
        sauna: false,
        swish: false,
        parking: true,
        cashPayment: true,
      },
    },
    {
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
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
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
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
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
        sauna: true,
        swish: false,
        parking: false,
        cashPayment: true,
      },
    },
    {
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
      {/* cards filters */}
      <div className="flex gap-2 p-14">
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.filter')}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.openNow')}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.offer')}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.rating')} {'+4'}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.sauna')}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.shower')}</button>
        <button className="bg-whiteC-light text-blackC-light p-2 rounded-lg">{t('cards.filterButtons.twoMasseuses')}</button>
      </div>
      {/* cards */}
      <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto p-14">
        {salonCardsData.map(cardData =>
          <SalonDataCard
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
        )}
      </div>
    </div>
  );
}
