'use client'

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import profPic from '@/assets/images/dashboard/notifications/user-profile.png';
import { IconPencil } from '@/assets/icons';
import { useTranslations } from 'next-intl';

interface User {
  name: string;
  email: string;
  pic: StaticImageData;
}

interface Settings {
  id: number;
  title: string;
  isActive: boolean;
}

const user: User = {
  name: 'mia kalani',
  email: 'miakalani@gmail.com',
  pic: profPic,
};

export default function Page() {

  const t = useTranslations("Dashboard.settings")

  const [settings, setSettings] = useState<Settings[]>([
    { id: 1, title: t("setting1"), isActive: false },
    { id: 2, title: t("setting2"), isActive: false },
    { id: 3, title: t("setting3"), isActive: false },
    { id: 4, title: t("setting4"), isActive: false },
    { id: 5, title: t("setting5"), isActive: false },
    { id: 6, title: t("setting6"), isActive: false },
    { id: 7, title: t("setting7"), isActive: false },
  ]);

  // handlers
  const toggleSetting = (id: number) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, isActive: !setting.isActive } : setting
      )
    );
  };

  return (
    <div className='max-w-[1100px] mx-auto p-10 flex flex-col gap-20'>
      {/* Profile Card */}
      <div className="p-5 flex gap-6 items-center w-full border border-grayC rounded-lg bg-[rgba(229,199,255,0.25)]">
        <Image src={user.pic} alt='profile-image' width={90} height={90} className='rounded-xl' />
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center justify-between font-semibold">
            {user.name}
            <button className='p-2 bg-white rounded-lg border border-grayC'><IconPencil /></button>
          </div>
          <div className="flex items-center justify-between font-semibold">
            {user.email}
            <button className='p-2 bg-white rounded-lg border border-grayC'><IconPencil /></button>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className='text-xl font-semibold'>Notification settings</h2>

      {/* Settings */}
      <div className="flex flex-col gap-10">

        {settings.map(s => (
          <div key={s.id} className="flex items-center justify-between w-full">
            <h5>{s.title}</h5>
            <button
              onClick={() => toggleSetting(s.id)} // Toggle the specific setting
              className={`p-1 w-12 h-6 rounded-full border-2 transition duration-200 flex
              ${s.isActive ? 'border-primary bg-primary' : 'justify-start border-black bg-white'}`}
            >
              <div className={`mb-px h-[14px] w-[14px] rounded-full transition duration-200
              ${s.isActive ? 'bg-white translate-x-[22px]' : 'bg-black'}`}></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
