'use client'

import { Link } from '@/navigation';
import EmailDone from '@/sections/auth/email-done';
import LeftSideSection from '@/sections/forget/left-side-section1';
import CodeInput from '@/sections/forget/special-input';
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react'

export default function page() {
  const t = useTranslations('ForgetPage.forget2')

  // states
  const [confirm, setConfirm] = useState({
    code: '12345',
    finish: false,
  })

  const [verificationCode, setVerificationCode] = useState('0')

  const [userEmail, setUserEmail] = useState('contact@dscode...com') // example email to fill user email

  // hooks
  const buttonRef = useRef<HTMLButtonElement | null>(null);  // Reference to the button

  // handlers
  const handleComplete = (code: string) => {
    setVerificationCode(code)
    // Proceed with verification
    buttonRef.current ? buttonRef.current.disabled = false : null
  }

  const handleIncomplete = (): void => {
    buttonRef.current ? buttonRef.current.disabled = false : null
  }

  const handleVerify = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (confirm.code === verificationCode) {
      setConfirm({ ...confirm, finish: true })
    }
  }

  return (
    <div className="flex">

      <div className="w-1/2"><LeftSideSection secondImage={true} /></div>

      <div className="w-1/2">
        <div className='h-full flex items-center justify-center'>
          {!confirm.finish
            ?
            // show email pin code input form -------------------------------------------------------------------------------------------
            <div className={`gap-8 flex-col`}>
              <div className="flex flex-col gap-3 mb-10">
                <h2 className='font-bold text-2xl text-blackC-dark'>{t('title')}</h2>
                <p className='text-blackC-dark'>{t('message1')} <strong>{userEmail}</strong><br />{t('message2')}</p>
              </div>
              {/* input for entering the sent code */}
              <CodeInput length={5} onComplete={handleComplete} onIncomplete={handleIncomplete} />

              {/* verify code button */}
              <div className='gap-7 flex flex-col mt-6'>
                <button
                  className='disabled:opacity-30 font-light text-white w-[317.15px] sm:w-[435px] py-[14px] bg-secondary rounded-full'
                  ref={buttonRef}
                  type='button'
                  // disabled
                  onClick={e => handleVerify(e)}
                >
                  {t('button')}
                </button>
                <p className='text-blackC-dark'>{t('subtext')}<span className='text-primary'>{t('subtextColored')}</span></p>
              </div>
            </div>
            :
            // show password reset done ------------------------------------------------------------------------------------------------------
            <EmailDone />
          }

        </div>
      </div >
    </div>
  )
}
