'use client'

import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef } from 'react';
import imagePinkADs from '@/assets/images/dashboard/profile/image-pink-ADs.png';
import imageSpecialADs from '@/assets/images/dashboard/profile/image-special-ADs.png';
import imageCampaignADs from '@/assets/images/dashboard/profile/image-campaign-ADs.png';
import { CircledArrowIcon } from '@/assets/icons';

type AD = {
  ADsName: string,
  image: StaticImageData,
  title: string,
  bgColor: string,
  buttonColor: string,
  buttonBgColor: string,
  questions: { id: number, q: string, a: string }[],
}

const MyProfileADsSection = () => {
  const t = useTranslations('Dashboard.myProfile.ADsSection');

  const ADsOptions: AD[] = [
    {
      ADsName: t('pinkADs.name'),
      image: imagePinkADs,
      title: t('pinkADs.title'),
      bgColor: 'bg-pinkC-lightVibrant',
      buttonColor: 'text-primary',
      buttonBgColor: 'bg-primary',
      questions: [
        { id: 1, q: t('pinkADs.question1'), a: t('pinkADs.answer1') },
        { id: 2, q: t('pinkADs.question2'), a: t('pinkADs.answer2') },
        { id: 3, q: t('pinkADs.question3'), a: t('pinkADs.answer3') },
        { id: 4, q: t('pinkADs.question4'), a: t('pinkADs.answer4') },
        { id: 5, q: t('pinkADs.question5'), a: t('pinkADs.answer5') },
      ],
    },
    {
      ADsName: t('specialADs.name'),
      image: imageSpecialADs,
      title: t('specialADs.title'),
      bgColor: 'bg-blueC-darkPale4',
      buttonColor: 'text-blueC-darkPale3',
      buttonBgColor: 'bg-blueC-darkPale3',
      questions: [
        { id: 1, q: t('specialADs.question1'), a: t('specialADs.answer1') },
        { id: 2, q: t('specialADs.question2'), a: t('specialADs.answer2') },
        { id: 3, q: t('specialADs.question3'), a: t('specialADs.answer3') },
        { id: 4, q: t('specialADs.question4'), a: t('specialADs.answer4') },
        { id: 5, q: t('specialADs.question5'), a: t('specialADs.answer5') },
      ],
    },
    {
      ADsName: t('campaignADs.name'),
      image: imageCampaignADs,
      title: t('campaignADs.title'),
      bgColor: 'bg-greenC-lightPale2',
      buttonColor: 'text-secondary',
      buttonBgColor: 'bg-secondary',
      questions: [
        { id: 1, q: t('campaignADs.question1'), a: t('campaignADs.answer1') },
        { id: 2, q: t('campaignADs.question2'), a: t('campaignADs.answer2') },
        { id: 3, q: t('campaignADs.question3'), a: t('campaignADs.answer3') },
        { id: 4, q: t('campaignADs.question4'), a: t('campaignADs.answer4') },
        { id: 5, q: t('campaignADs.question5'), a: t('campaignADs.answer5') },
      ],
    },
  ];

  const [selectedAD, setSelectedAD] = useState(ADsOptions[0]);
  const [selectedQuestion, setSelectedQuestion] = useState<{ id: number, q: string, a: string } | null>(null);
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
      <div className='flex flex-col gap-4'>
        <h3 className="font-semibold text-xl text-blackC">{t('title')}</h3>
        <h4 className='font-light text-lg text-blackC'>{t('subtitle')}</h4>
      </div>

      {/* ADs Options */}
      <div className="flex flex-col gap-7">
        {ADsOptions.map((AD) => (
          <div key={AD.ADsName} className={`flex justify-between items-center p-7 rounded-full ${AD.bgColor}`}>
            <Image src={AD.image} alt={`${AD.ADsName}-ads`} width={70} height={70} />
            <p className="font-semibold text-2xl">{AD.title}</p>
            <button className={`w-[62px] h-[62px] rounded-full p-[14px] ${selectedAD.ADsName === AD.ADsName ? AD.buttonBgColor : 'bg-white'}`} onClick={() => handleSelectAD(AD)}>
              <div className={`transition-transform duration-500 ${selectedAD.ADsName !== AD.ADsName ? `${AD.buttonColor} -rotate-90` : 'text-white rotate-90'}`}>
                <CircledArrowIcon />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* plans section */}
      <div ref={contentRef} className="flex flex-col gap-7 mt-16 px-6">
        {/* Description */}
        <h4 className="text-xl font-semibold">Frequently asked questions</h4>

        {/* Plans */}
        {selectedAD.questions.map(question =>
          <div key={question.id} className="flex flex-col gap-5">
            <button onClick={() => setSelectedQuestion(question)} className={`rounded-lg px-6 py-5 flex items-center justify-between border ${selectedQuestion?.id === question.id ? 'border-primary' : 'border-[#555555]'}`}>
              {question.q}
              <span className={`w-8 h-8 transition-transform duration-500 ${selectedQuestion?.id === question.id ? 'rotate-90 text-primary' : 'text-blackC-light'}`}><CircledArrowIcon /></span>
            </button>
            <p className={`text-blackC transition-all duration-500 px-5 overflow-hidden text-justify ${selectedQuestion?.id === question.id ? 'h-[70px]' : 'h-0'}`}>{question.a}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfileADsSection;