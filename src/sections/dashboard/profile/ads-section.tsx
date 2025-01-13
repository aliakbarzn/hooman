import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef } from 'react';
import imagePinkADs from '@/assets/images/dashboard/profile/image-pink-ADs.png';
import imageSpecialADs from '@/assets/images/dashboard/profile/image-special-ADs.png';
import imageCampaignADs from '@/assets/images/dashboard/profile/image-campaign-ADs.png';
import { CircledArrowIcon } from '@/assets/icons';

type Plan = {
  duration: number;
  price: number;
  pricePerMonth: number;
  save: number;
}
type AD = {
  ADsName: string,
  image: StaticImageData,
  title: string,
  bgColor: string,
  buttonColor: string,
  buttonBgColor: string,
  descriptionTitle: string,
  descriptionText: string,
  plans: Plan[]
}

const ADsSection = () => {
  const t = useTranslations('Dashboard.profile.ADsSection');

  const ADsOptions: AD[] = [
    {
      ADsName: t('pinkADs.name'),
      image: imagePinkADs,
      title: t('pinkADs.title'),
      bgColor: 'bg-pinkC-lightVibrant',
      buttonColor: 'text-primary',
      buttonBgColor: 'bg-primary',
      descriptionTitle: t('pinkADs.descriptionTitle'),
      descriptionText: t('pinkADs.descriptionText'),
      plans: [
        { duration: 1, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 3, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 6, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 12, price: 23_880, pricePerMonth: 1990, save: 60 },
      ],
    },
    {
      ADsName: t('specialADs.name'),
      image: imageSpecialADs,
      title: t('specialADs.title'),
      bgColor: 'bg-blueC-darkPale4',
      buttonColor: 'text-blueC-darkPale3',
      buttonBgColor: 'bg-blueC-darkPale3',
      descriptionTitle: t('specialADs.descriptionTitle'),
      descriptionText: t('specialADs.descriptionText'),
      plans: [
        { duration: 1, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 3, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 6, price: 23_880, pricePerMonth: 1990, save: 88 },
        { duration: 12, price: 23_880, pricePerMonth: 1990, save: 60 },
      ],
    },
    {
      ADsName: t('campaignADs.name'),
      image: imageCampaignADs,
      title: t('campaignADs.title'),
      bgColor: 'bg-greenC-lightPale2',
      buttonColor: 'text-secondary',
      buttonBgColor: 'bg-secondary',
      descriptionTitle: t('campaignADs.descriptionTitle'),
      descriptionText: t('campaignADs.descriptionText'),
      plans: [
        { duration: 1, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 3, price: 23_880, pricePerMonth: 1990, save: 60 },
        { duration: 6, price: 87687, pricePerMonth: 1990, save: 60 },
        { duration: 12, price: 23_880, pricePerMonth: 1990, save: 60 },
      ],
    },
  ];

  const [selectedAD, setSelectedAD] = useState(ADsOptions[0]);
  const contentRef = useRef<HTMLDivElement | null>(null);



  const handleSelectAD = (AD: AD) => {
    setSelectedAD(AD);
    if (contentRef) {
      contentRef.current!.scrollIntoView({ behavior: "smooth", block: 'start' });
    }
  };

  return (
    <div className="flex flex-col gap-10 mt-10">
      {/* Title */}
      <h3 className="font-semibold text-4xl">{t('title')}</h3>

      {/* ADs Options */}
      <div className="ml-10 flex flex-col gap-7">
        {ADsOptions.map((AD) => (
          <div
            key={AD.ADsName}
            className={`flex justify-between items-center p-7 rounded-full ${AD.bgColor}`}
          >
            <Image src={AD.image} alt={`${AD.ADsName}-ads`} width={80} height={80} />
            <p className="font-semibold text-[32px]">{AD.title}</p>
            <button
              className={`w-20 h-20 rounded-full p-4 ${selectedAD.ADsName === AD.ADsName ? AD.buttonBgColor : 'bg-white'
                }`}
              onClick={() => handleSelectAD(AD)}
            >
              <div
                className={`transition-transform duration-500 ${selectedAD.ADsName !== AD.ADsName
                  ? `${AD.buttonColor} -rotate-90`
                  : 'text-white rotate-90'
                  }`}
              >
                <CircledArrowIcon />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* plans section */}
      <div ref={contentRef} className="flex flex-col gap-7 px-14">
        {/* Description */}
        <h4 className="text-xl font-medium">{selectedAD.descriptionTitle}</h4>
        <p>{selectedAD.descriptionText}</p>

        {/* Plans */}
        {selectedAD.plans.map((plan) => (
          <div
            key={plan.duration}
            className="transition duration-500 flex flex-col gap-4 rounded-[30px] border-[3px] border-grayC-light px-10 py-6 bg-white mx-10"
          >
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-2xl text-blackC-light">
                {plan.duration} Month(s)
              </h5>
              <span className="text-secondary text-2xl font-semibold">
                {plan.pricePerMonth} kr / Month
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-xl text-blackC-light">Pay for {plan.duration} month(s) at once</h5>
              <span className="text-xl text-blackC-light">
                <span className="text-primary">(Save {plan.save}%)</span> {plan.price} kr
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ADsSection;
