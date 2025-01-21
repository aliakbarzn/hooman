'use client'

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const Page = () => {
  const t = useTranslations('WellnessPage')

  const [wordsCount, setWordsCount] = useState(0)

  const handleWordsCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWordsCount(e.target.value.split(' ').length)
  }

  const transactions = [
    { id: 1, date: '2025-01-01', amount: 1000, status: 'approve' },
    { id: 2, date: '2025-01-02', amount: 500, status: 'pending' },
    { id: 3, date: '2025-01-01', amount: 1000, status: 'approve' },
  ]

  return (
    <div className='bg-whiteC-light'>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 p-10">

        {/* title and subtitle */}
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-blueC-green font-medium text-[32px]">{t('title')}</h1>
          <h2 className="text-xl text-center">{t('subtitle1')}<br />{t('subtitle2')}</h2>
        </div>

        {/* credit plans */}
        <div className="w-full bg-white flex flex-col items-center gap-14 rounded-md p-16">
          <h3 className="text-xl font-medium">{t('creditPlans.title')}</h3>
          <div className="flex items-center gap-12 justify-between">
            {[500, 1000, 1500, 2000].map(credit =>
              <div key={credit} className='bg-blueC-green flex flex-col items-center gap-10 p-7 rounded-md'>
                <span className="font-medium text-2xl mt-9 text-white">{credit} $</span>
                <button className="text-2xl font-medium text-blackC rounded-md py-1 px-14 bg-white">{t('creditPlans.use')}</button>
              </div>
            )}
          </div>
        </div>

        {/* form */}
        <div className="w-full bg-white flex flex-col items-center gap-14 rounded-md p-16">
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-xl font-medium">{t('form.title')}</h3>
            <h4 className='text-xl'>{t('form.subtitle')}</h4>
          </div>
          <form className="w-full pt-5 px-6 pb-9 flex flex-col gap-5 border border-grayC rounded-lg">
            <div className="flex flex-col gap-2">
              <h6>{t('form.label1')}</h6>
              <input type="text" className="px-3 py-2 rounded-lg border border-grayC outline-none" placeholder={t('form.value')} />
            </div>
            <div className="flex flex-col gap-2">
              <h6>{t('form.label1')}</h6>
              <textarea onChange={e => handleWordsCount(e)} className="h-20 px-3 py-2 rounded-lg border border-grayC outline-none" placeholder={t('form.value')} maxLength={1000} />
              <span className="text-blackC-light">{wordsCount} {t('form.to')} 1000 {t('form.word')}</span>
            </div>
          </form>
        </div>

        {/* table */}
        <div className="w-full bg-white flex flex-col items-center gap-14 rounded-md p-16 mb-32">
          <h3 className="font-medium text-xl">{t('table.title')}</h3>
          <table className="min-w-full rounded-lg mb-14">
            <thead>
              <tr className="bg-[#ECFFF1]">
                <th className="py-5 px-10 border-r border-[#cccccc] text-left rounded-tl-lg text-greenC-darker text-2xl font-medium w-[40%]"><i>{t('table.date')}</i></th>
                <th className="py-5 px-10 border-r border-[#cccccc] text-greenC-darker text-2xl font-medium w-[30%]"><i>{t('table.amount')}</i></th>
                <th className="py-5 px-10 rounded-tr-lg text-greenC-darker text-2xl font-medium w-[30%]"><i>{t('table.status')}</i></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.id} className={`${index % 2 === 0 ? 'bg-[#CBFDD7]' : 'bg-[#ECFFF1]'}`}>
                  <td className={`px-10 py-5 text-xl font-medium text-left border-r border-[#cccccc] ${index === transactions.length - 1 && 'rounded-bl-lg'}`}>{transaction.date}</td>
                  <td className={`px-10 py-5 text-xl font-medium text-center border-r border-[#cccccc]`}>{transaction.amount}</td>
                  <td className={`px-10 py-5 text-xl font-medium text-center ${index === transactions.length - 1 && 'rounded-br-lg'}`}>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Page