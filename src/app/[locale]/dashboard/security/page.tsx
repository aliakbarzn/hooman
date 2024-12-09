'use client'

import React, { useState } from 'react'

interface Settings {
  id: number;
  title: string;
  isActive: boolean;
}

export default function page() {

  const [settings1, setSettings1] = useState<Settings[]>([
    { id: 1, title: 'Two-step login with Google', isActive: false },
    { id: 2, title: 'Two-step login with email ', isActive: false },
    { id: 3, title: 'Two-step login with SMS', isActive: false },
  ])
  const [settings2, setSettings2] = useState<Settings[]>([
    { id: 1, title: 'Change password', isActive: false },
    { id: 2, title: 'User account settings', isActive: false },
  ])

  // handlers
  const toggleSetting1 = (id: number) => {
    setSettings1(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, isActive: !setting.isActive } : setting
      )
    );
  };
  const toggleSetting2 = (id: number) => {
    setSettings2(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, isActive: !setting.isActive } : setting
      )
    );
  };

  return (
    <div className='p-10'>
      <div className="flex flex-col rounded-2xl bg-[#F1FFF4] w-full">
        {/* title */}
        <h2 className="p-8 border-b border-grayC text-xl font-semibold w-full">security</h2>
        <div className="flex flex-col gap-10 p-8">
          {/* settings1 */}
          {settings1.map(s => (
            <div key={s.id} className="flex items-center justify-between w-full">
              <h5>{s.title}</h5>
              <button
                onClick={() => toggleSetting1(s.id)} // Toggle the specific setting
                className={`p-1 w-12 h-6 rounded-full border-2 transition duration-200 flex
              ${s.isActive ? 'border-primary bg-primary' : 'justify-start border-black bg-[#F1FFF4]'}`}
              >
                <div className={`my-auto h-[14px] w-[14px] rounded-full transition duration-200
              ${s.isActive ? 'bg-[#F1FFF4] translate-x-[22px]' : 'bg-black'}`}></div>
              </button>
            </div>
          ))}
          {/* border */}
          <div className="h-px px-6 w-full mx-auto"><div className="h-full w-full bg-grayC"></div></div>
          {/* settings2 */}
          {settings2.map(s => (
            <div key={s.id} className="flex items-center justify-between w-full">
              <h5>{s.title}</h5>
              <button
                onClick={() => toggleSetting2(s.id)} // Toggle the specific setting
                className={`p-1 w-12 h-6 rounded-full border-2 transition duration-200 flex
              ${s.isActive ? 'border-primary bg-primary' : 'justify-start border-black bg-[#F1FFF4]'}`}
              >
                <div className={`my-auto h-[14px] w-[14px] rounded-full transition duration-200
              ${s.isActive ? 'bg-[#F1FFF4] translate-x-[22px]' : 'bg-black'}`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
