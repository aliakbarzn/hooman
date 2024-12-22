import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

export default function FieldWorkingHours() {
  const t = useTranslations('Dashboard.profile.field6')

  const [daysOfTheWeekWorkingHours, setDaysOfTheWeekWorkingHour] = useState({
    'Monday': { openingHour: '9 am', closingHour: '9 pm' },
    'Tuesday': { openingHour: '9 am', closingHour: '9 pm' },
    'Wednesday': { openingHour: '9 am', closingHour: '9 pm' },
    'Thursday': { openingHour: '9 am', closingHour: '9 pm' },
    'Friday': { openingHour: '9 am', closingHour: '9 pm' },
    'Saturday': { openingHour: '9 am', closingHour: '9 pm' },
    'Sunday': { openingHour: '9 am', closingHour: '9 pm' },
  })

  return (
    <div className="relative bg-white rounded-lg px-5 flex flex-col gap-3 pt-14 pb-10">
      <div className='profile-page-number'>
        6
      </div>
      <h4>{t('title')}</h4>
      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-[#ECFFF1]">
            <th className="py-5 px-10 border-r border-[#cccccc] text-left rounded-tl-lg text-[#08601D] text-2xl font-bold w-3/5">Type of service</th>
            <th className="py-5 px-10 border-r border-[#cccccc] text-[#08601D] text-2xl font-bold w-1/5">time</th>
            <th className="py-5 px-10 rounded-tr-lg text-[#08601D] text-2xl font-bold w-1/5">price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(daysOfTheWeekWorkingHours).map(([day, hours]) => (
            <tr key={day} className={`odd:bg-[#CBFDD7]  even:bg-[#ECFFF1]`}>
              <td className={`px-10 py-5 text-xl font-medium text-left border-r border-[#cccccc] ${day === 'Sunday' && 'rounded-bl-lg'}`}>{day}</td>
              <td className={`px-10 py-5 text-xl font-medium text-center border-r border-[#cccccc]`}>{hours.openingHour}</td>
              <td className={`px-10 py-5 text-xl font-medium text-center ${day === 'Sunday' && 'rounded-br-lg'}`}>{hours.closingHour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
}
