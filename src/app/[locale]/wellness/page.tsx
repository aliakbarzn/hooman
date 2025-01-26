'use client'

import { IconTriangle, PaperClipIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React, { useRef, useState } from 'react'

const Page = () => {
  const t = useTranslations('WellnessPage')

  const [credits, setCredits] = useState([
    { id: 1, amount: 500, isSelected: false },
    { id: 2, amount: 1000, isSelected: false },
    { id: 3, amount: 1500, isSelected: false },
    { id: 4, amount: 2000, isSelected: false }
  ])
  const [wordsCount, setWordsCount] = useState(0)
  const ImageInputRef = useRef<HTMLInputElement>(null)
  const [imageError, setImageError] = useState<string | null>(null)

  const handleWordsCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWordsCount(e.target.value.split(' ').length)
  }

  const transactions = [
    { id: 1, date: '2025-01-01', amount: 1000, status: 'approve' },
    { id: 2, date: '2025-01-02', amount: 500, status: 'pending' },
    { id: 3, date: '2025-01-01', amount: 1000, status: 'approve' },
  ]

  const handleCredit = (id: number) => {
    setCredits(prev =>
      credits.map(credit =>
        credit.id === id ? { ...credit, isSelected: !credit.isSelected } : { ...credit, isSelected: false }
      )
    )
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      if (file.size > 26_214_400) {
        setImageError('Size')
        return;
      }
      if (!['image/png', 'image/jpg'].includes(file.type)) {
        setImageError('Format')
        return;
      }
      setImageError('successful')
    }
  }

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
            {credits.map((credit) => (
              <div
                onClick={() => handleCredit(credit.id)}
                key={credit.id}
                className={`relative cursor-pointer w-[225px] h-[213px] transition-all duration-200 rounded-md
                  ${credit.isSelected ? 'p-1 bg-gradient-to-br from-secondary to-yellowC' : 'p-0'}`}
              >
                <span className={`absolute -top-2 left-1/2 -translate-x-1/2 w-[35px] text-secondary transition-all duration-200
                  ${credit.isSelected ? 'h-[31px]' : 'h-0'}`}>
                  <IconTriangle />
                </span>
                <div className={`flex flex-col items-center gap-10 p-7 h-full rounded-md bg-gradient-to-br from-blueC-green to-blueC-greenDarker`}>
                  <span className="font-medium text-2xl mt-9 text-white">{credit.amount} $</span>
                  <button className="text-2xl font-medium text-blackC rounded-md py-1 w-40 bg-white">
                    {credit.isSelected ? t('creditPlans.inUse') : t('creditPlans.use')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* credit management */}
        <div className="w-full bg-blueC-gray flex flex-col items-center gap-5 rounded-md p-8">
          <h3 className="text-xl font-medium">{t('creditManagement.title')}</h3>
          <div className="flex items-center justify-between w-full">
            <h6>{t('creditManagement.key1')}</h6>
            <span>2000 {t('creditManagement.units')}</span>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-white via-blueC-vibrant to-white"></div>
          <div className="flex items-center justify-between w-full">
            <h6>{t('creditManagement.key2')}</h6>
            <span>500 {t('creditManagement.units')}</span>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-white via-blueC-vibrant to-white"></div>
          <div className="flex items-center justify-between w-full font-semibold">
            <h6>{t('creditManagement.key3')}</h6>
            <span>1500 {t('creditManagement.units')}</span>
          </div>
        </div>

        {/* form */}
        <div className="w-full bg-white flex flex-col items-center gap-14 rounded-md p-16">
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-xl font-medium">{t('form.title')}</h3>
            <h4 className='text-xl'>{t('form.subtitle')}</h4>
          </div>
          <form className="w-full pt-5 px-6 pb-9 flex flex-col gap-5 border border-grayC rounded-lg">
            {/* image input */}
            <div className="flex flex-col gap-2">
              <h5>{t('form.label1')}</h5>
              <button
                type='button'
                onClick={() => ImageInputRef.current && ImageInputRef.current.click()}
                className={`p-2 border border-grayC rounded-lg flex items-center justify-between transition duration-200
                  ${imageError === 'successful' ? 'bg-greenC-lightPale3 text-blackC' : 'text-blackC-light'}`}
              >
                <h6>{imageError === 'successful' ? t('form.imagePlaceholder2') : t('form.imagePlaceholder1')}</h6>
                <span className={imageError === 'successful' ? 'hidden' : 'inline'}><PaperClipIcon /></span>
                <input onChange={handleImageChange} accept='.png, .jpg' type="file" className="hidden" ref={ImageInputRef} />
              </button>
              <div className="flex items-center justify-between mt-3">
                <h6 className={`${imageError === 'Size' ? 'text-primary font-bold' : 'text-blackC-light'}`}>{t('form.fileErrorExtension')}</h6>
                <h6 className={`${imageError === 'Format' ? 'text-primary font-bold' : 'text-blackC-light'}`}>{t('form.fileErrorSize')}</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h6>{t('form.label2')}</h6>
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