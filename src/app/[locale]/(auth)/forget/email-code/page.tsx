'use client'

import { Link } from '@/navigation';
import CodeInput from '@/sections/forget/special-input';
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react'

export default function page() {

  // states
  const [confirm, setConfirm] = useState({
    code: '12345',
    finish: false,
  })

  const [verificationCode, setVerificationCode] = useState('0')


  // hooks
  const t = useTranslations() // multilingual texts
  const buttonRef = useRef<HTMLButtonElement | null>(null);  // Reference to the button

  // handlers
  const handleComplete = (code: string) => {
    setVerificationCode(code)
    console.log(code)
    // Proceed with verification
    buttonRef.current ? buttonRef.current.disabled = false : null
  }

  const handleIncomplete = (): void => {
    buttonRef.current ? buttonRef.current.disabled = false : null
  }

  const handleVerify = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('a')
    event.preventDefault()
    if (confirm.code === verificationCode) {
      console.log('b')
      setConfirm({ ...confirm, finish: true })
    }
  }

  return (
    <div className='w-1/2 h-full flex flex-col items-center justify-center'>
      {/* show email pin code input form ------------------------------------------------------------------------------------------- */}
      <div className={`gap-y-10 flex-col w-[436px] ${confirm.finish ? 'hidden' : 'flex'}`}>
        <div className="flex flex-col gap-y-3">
          <h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget3.check')}</h2>
          <p className='text-[#5B5B5B]'>{t('ForgetPage.Forget3.message1')}<br />
            {t('ForgetPage.Forget3.message2')}</p>
        </div>
        {/* input for entering the sent code */}
        <CodeInput length={5} onComplete={handleComplete} onImcomplete={handleIncomplete} />

        {/* verify code button */}
        <div className='gap-y-7 flex flex-col'>
          <button
            className='disabled:opacity-30 mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
            ref={buttonRef}
            type='button'
            // disabled
            onClick={e => handleVerify(e)}
          >{t('ForgetPage.Forget3.button')}</button>
          <p className='text-[#5B5B5B]'>{t('ForgetPage.Forget3.subtext')}<span className='text-[#F58882]'>{t('ForgetPage.Forget3.subtextColored')}</span></p>
        </div>
      </div>
      {/* show password reset done ------------------------------------------------------------------------------------------------------- */}
      <div className={`w-1/2 h-full flex-col items-center justify-center ${confirm.finish ? 'flex' : 'hidden'}`}>
        <form className='gap-y-10 flex flex-col w-[436px]'>
          <div className="flex flex-col gap-y-3">
            <h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget4.title')}</h2>
            <p className='text-[#5B5B5B]'>{t('ForgetPage.Forget4.message')}</p>
          </div>
          {/* confirm button */}
          <Link href='/forget/reset-password/'>
            <button
              className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
            >{t('ForgetPage.Forget4.button')}</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
