import Image from 'next/image';
import React from 'react';
import banner1 from '@/assets/images/ads/banner1.png';
import banner2 from '@/assets/images/ads/banner2.png';
import banner3 from '@/assets/images/ads/banner3.png';
import mainBanner from '@/assets/images/search-page/baner.png'
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Ads')

  return (
    <div className="flex flex-col w-full bg-greenC-lightPale">
      {/* 3 banners */}
      <div className="max-w-[1600px] mx-auto flex gap-12 p-14 ">
        <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner1} width={650} height={325} alt='banner1' /></div>
        <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner2} width={650} height={325} alt='banner2' /></div>
        <div className="w-1/3 rounded-lg overflow-hidden"><Image src={banner3} width={650} height={325} alt='banner3' /></div>
      </div>
      {/* main banner */}
      <div className="relative w-full">
        <Image className="w-full h-[556px]" height={556} src={mainBanner} alt="mainBanner" />
        <div className="absolute top-0 left-0 h-full flex flex-col justify-center ml-16">
          <h4 className="text-[#FEE9E7] text-3xl font-bold">
            {t("mainBanner.getUpTo")}
          </h4>
          <div className="flex flex-row my-2">
            <h4 className="text-white text-5xl font-bold">
              {'50%'}
            </h4>
            <h4 className="text-white text-4xl font-bold ml-2">
              {t("mainBanner.off")}
            </h4>
          </div>
          <span className="text-[#FEE9E7] text-3xl">
            {t("mainBanner.text")}
          </span>
          <button className="p-3 text-[#F5F5F5] bg-primary text-2xl mt-7 rounded-lg">
            {t("mainBanner.button")}
          </button>
        </div>
      </div>
    </div>
  );
}
