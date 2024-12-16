import CardBanerOff from '@/components/cards/cardBanerOff';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import ImageBannerOff from '@/assets/images/search-page/ImageBannerOff.png'
import ImageOff from '@/assets/images/search-page/ImageOff.png'

export default function Discounts() {

  const t = useTranslations("SearchPage.BanerOff");
  return (
    <div className="bg-[#fde5e1] flex flex-col my-16 w-screen md:px-2 sm:px-1 lg:px-10 px-16 pt-12 pb-20 h-full">
      <span className="text-[#1E1E1E] text-xl font-semibold ml-6 ">
        {t("titleProducts")}
      </span>
      <div className="w-full h-[271px] flex justify-between mt-11 items-center sm:max-h-48 md:max-h-56 lg:max-h-72">
        <div className="flex w-2/5 h-full relative overflow-hidden object-fill">
          <Image
            className="absolute h-full object-cover"
            src={ImageBannerOff}
            alt="ImageBannerOff"
          />

          <div className="absolute top-0 left-0 h-full flex flex-col justify-center ml-14 mt-7">
            <button className="bg-[#2C2C2C] text-white p-2 w-32 h-10 rounded-xl">
              {t("button")}
            </button>
            <div className="flex mt-4">
              <span className="text-blackC text-6xl font-semibold">78%</span>
              <span className="text-primary text-2xl font-semibold">{t("discountLabel")}</span>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-wrap items-center justify-around w-3/5">
          <CardBanerOff
            productPhoto={ImageOff}
            originalPrice={"2600"}
            discountedPrice={4200}
            discountPercentage={78}
            productTitle={"Cantilever chair"}
          />
          <CardBanerOff
            productPhoto={ImageOff}
            originalPrice={"2600"}
            discountedPrice={4200}
            discountPercentage={78}
            productTitle={"Cantilever chair"}
          />
        </div>
      </div>
    </div>
  );
};
