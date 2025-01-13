import SalonDataCard from '@/components/cards/card-salon-data'
import { useTranslations } from 'next-intl'
import React from 'react'
import salonImg from '@/assets/images/search-page/i-card.png'
import { IconPaypal, IconVisa, LogoSwish, LogoTrustly } from '@/assets/icons'

const mainSalonData = {
  image: salonImg,
  title: "oiuns Thaimassage",
  discount: '23%',
  rating: 4.5,
  hasHeartTag: false,
  isSponsored: true,
  sponsoredColor: '[#FFBC05]',
  borderColor: 'primary',
  reviewCount: 6,
  description: 'Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...',
  isOpen: true,
  features: { sauna: true },
  showIsConnected: false,
}

const AdFormModal = () => {
  const t = useTranslations('Dashboard.profile.ADFormModal')

  return (
    <div className='fixed inset-0 z-20 bg-opacity-30 bg-black flex items-center justify-center'>
      <div className="max-w-[1000px] rounded-lg flex flex-col p-14 bg-white">

        {/* title and description */}
        <div className="flex flex-col mb-10">
          <h2 className="text-blueC-vibrant font-medium text-[32px] ">{t('title')}</h2>
          <p className="text-2xl">{t('subtitle')}</p>
        </div>

        {/* form card */}
        <div className="flex flex-col gap-6 p-6 rounded-lg border border-grayC">
          <h3 className="font-medium text-xl">{t('formCard.title')}</h3>
          {/* form card body ( the left form and the right card ) */}
          <div className="flex justify-between items-center">
            <form className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h5>{t('formCard.label1')}</h5>
                <input type="text" className="px-4 py-2 rounded-lg border border-grayC outline-none" placeholder={t('formCard.value')} />
              </div>
              <div className="flex flex-col gap-2">
                <h5>{t('formCard.label2')}</h5>
                <input type="text" className="px-4 py-2 rounded-lg border border-grayC outline-none" placeholder={t('formCard.value')} />
              </div>
              <div className="flex flex-col gap-2">
                <h5>{t('formCard.label3')}</h5>
                <input type="text" className="px-4 py-2 rounded-lg border border-grayC outline-none" placeholder={t('formCard.value')} />
              </div>
              <h6 className="text-2xl">$ {t('formCard.cost')}: <span className='text-primary'>350 SEK/{t('formCard.week')}</span></h6>
              <button className='bg-greenC-light rounded-lg py-2 text-xl font-semibold'>{t('formCard.button')}</button>
              <div className="flex items-center justify-between">
                <span className='w-12 h-4'><IconVisa /></span>
                <span className='w-16 h-5'><LogoSwish /></span>
                <span className='w-6 h-7'><IconPaypal /></span>
                <span className='w-20 h-7'><LogoTrustly /></span>
              </div>
            </form>
            <SalonDataCard
              image={mainSalonData.image}
              title={mainSalonData.title}
              discount={mainSalonData.discount}
              rating={mainSalonData.rating}
              hasHeartTag={mainSalonData.hasHeartTag}
              isSponsored={mainSalonData.isSponsored}
              sponsoredColor={mainSalonData.sponsoredColor}
              borderColor={mainSalonData.borderColor}
              reviewCount={mainSalonData.reviewCount}
              description={mainSalonData.description}
              isOpen={mainSalonData.isOpen}
              features={mainSalonData.features}
              showIsConnected={mainSalonData.showIsConnected}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdFormModal 