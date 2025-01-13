import { CommentsIcon, IconBluntStar, IconCashPayment, IconGiftCard, IconMiniMessage, IconParking, IconSauna, IconShower, IconSwish } from '@/assets/icons'
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface SalonDataCardProps {
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
  showIsConnected: boolean
}

export default function SalonDataCard
  ({
    image,
    title,
    discount,
    rating,
    hasHeartTag,
    isSponsored,
    sponsoredColor,
    borderColor,
    reviewCount,
    description,
    isOpen,
    features,
    showIsConnected
  }: SalonDataCardProps) {
  const t = useTranslations('Ads.card')

  return (
    <div className="relative w-80 max-h-[540px] p-6 flex flex-col border-[1px] bg-white border-[#D9D9D9] rounded-lg">
      {/* Sponsored label */}
      {true
        &&
        <h5 className='absolute z-10 left-0 top-14 px-3 py-[2px] rounded-r-full bg-[#FD5950] font-semibold text-xl text-white'>{t('sponsored')}</h5>
      }
      <div className="relative w-full h-40">
        <Image className="w-full h-full object-cover" src={image} alt="ImageCard" />
        {/* Discount label */}
        {discount &&
          <div className="absolute bottom-0 mb-3 left-0 w-[70%] h-[33px] bg-gradient-to-r from-primary to-transparent  text-white flex items-center justify-start rounded-br-lg text-sm font-bold px-3">
            {discount}
          </div>
        }
      </div>
      <h4 className="text-blackC font-bold text-xl mt-6 mb-2">{title}</h4>
      <div className="flex flex-row">
        <h4 className="text-blackC font-bold text-xl">{rating}</h4>
        <span className="w-6 h-6 ml-2 mr-4 text-[#FFE605]"><IconBluntStar /></span>
        <h4 className="text-blackC-light font-bold text-xl">({reviewCount})</h4>
      </div>

      <p className="text-blackC-light text-base mt-2 text-justify">{description}</p>
      <div className={`flex justify-between my-4 ${isOpen ? 'text-secondary' : 'text-primary'}`}>
        <h4 className="font-bold text-xl">{isOpen ? "open" : "close"}</h4>
        <span className="ml-2 mr-4 w-6 h-5 text-blackC-light"><IconMiniMessage /></span>
      </div>

      <div className="flex justify-around bg-[#FFEDFB]">

        <span className={`w-6 h-6 rounded-full ${features.giftCard ? "text-primary" : "text-blackC-light"}`}><IconGiftCard /></span>
        <span className={`w-6 h-6 rounded-full ${features.shower ? "text-primary" : "text-blackC-light"}`}><IconShower /></span>
        <span className={`w-6 h-6 rounded-full ${features.sauna ? "text-primary" : "text-blackC-light"}`}><IconSauna /></span>
        <span className={`w-6 h-6 rounded-full ${features.swish ? "text-primary" : "text-blackC-light"}`}><IconSwish /></span>
        <span className={`w-6 h-6 rounded-full ${features.parking ? "text-primary" : "text-blackC-light"}`}><IconParking /></span>
        <span className={`w-6 h-6 rounded-full ${features.cashPayment ? "text-primary" : "text-blackC-light"}`}><IconCashPayment /></span>

      </div>

      {showIsConnected && <div className="bg-[#70E38C] rounded-lg text-white p-1 text-sm mt-4">This massage parlor is connected to the booking service</div>}
    </div>
  )
}
