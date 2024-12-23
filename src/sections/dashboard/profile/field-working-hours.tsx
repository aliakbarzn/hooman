'use client'

import { ChevronDownIcon } from '@/assets/icons';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

type DayWorkingHours = {
  openingHour: string;
  closingHour: string;
};

export default function FieldWorkingHours() {
  const t = useTranslations('Dashboard.profile.field6');

  const [daysOfTheWeekWorkingHours, setDaysOfTheWeekWorkingHours] = useState<Record<string, DayWorkingHours>>({
    [t('Monday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Tuesday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Wednesday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Thursday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Friday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Saturday')]: { openingHour: '9 am', closingHour: '9 pm' },
    [t('Sunday')]: { openingHour: '9 am', closingHour: '9 pm' },
  });

  const timeOptions = (openingOrClosing: string) => {
    if (openingOrClosing === 'openingHour') {
      return ['01 am', '02 am', '03 am', '04 am', '05 am', '06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 am', 'closed']
    }
    return ['01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm', '08 pm', '09 pm', '10 pm', '11 pm', '12 pm', 'closed']
  }

  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({}) // Tracks open/close state for each dropdown

  const handleTimeChange = (day: string, openingOrClosing: string, value: string, dropdownKey: string) => {
    setDaysOfTheWeekWorkingHours((prev) => ({ ...prev, [day]: { ...prev[day], [openingOrClosing]: value } }));
    setDropdownOpen((prev) => ({ ...prev, [dropdownKey]: false })); // Close dropdown after selection
  };

  const toggleDropdown = (key: string) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
      <div className="profile-page-number">6</div>
      <h4 className="mb-6">{t('title')}</h4>
      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-[#ECFFF1]">
            <th className="py-5 px-10 border-r border-[#cccccc] text-left rounded-tl-lg text-greenC-darker w-[40%] text-2xl font-medium"><i>{t('daysOfTheWeek')}</i></th>
            <th className="py-5 px-10 border-r border-[#cccccc] text-greenC-darker text-2xl font-medium w-[30%]"><i>{t('openingHours')}</i></th>
            <th className="py-5 px-10 rounded-tr-lg text-greenC-darker text-2xl font-medium w-[30%]"><i>{t('closingHours')}</i></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(daysOfTheWeekWorkingHours).map(([day, hours]) => (
            <tr key={day} className="odd:bg-[#CBFDD7] even:bg-[#ECFFF1]">
              <td className={`px-10 py-5 text-xl font-medium border-r border-[#cccccc] ${day === 'Sunday' && 'rounded-bl-lg'}`}>{day}</td>
              {Object.entries(hours).map(([openingOrClosing, hour]) => {
                const dropdownKey = `${day}-${openingOrClosing}`;
                return (
                  <td key={openingOrClosing} className={`text-xl font-medium relative ${openingOrClosing === 'openingHour' && 'border-r border-[#cccccc]'} ${(day === 'Sunday' && openingOrClosing === 'closingHour') && 'rounded-br-lg'}`}>
                    <button className="flex gap-3 items-center mx-auto" onClick={() => toggleDropdown(dropdownKey)}>
                      <span>{hour}</span>
                      <span className="text-gray-400"><ChevronDownIcon /></span>
                    </button>
                    {dropdownOpen[dropdownKey] && (
                      <div className="absolute left-1/2 bg-white border border-grayC rounded-lg overflow-y-auto shadow-lg z-10">
                        {timeOptions(openingOrClosing).map((time) => (
                          <div key={time} className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${hour === time ? 'bg-gray-200 font-bold' : ''}`} onClick={() => handleTimeChange(day, openingOrClosing, time, dropdownKey)}>{time}</div>
                        ))}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
