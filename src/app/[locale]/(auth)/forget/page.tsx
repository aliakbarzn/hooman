import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
    // hooks
    const t = useTranslations()

    return (
        <div className='w-1/2 h-full flex flex-col items-center justify-center'>
            <form className='gap-y-10 flex flex-col w-[436px]'>
                <div className="flex flex-col gap-y-3">
                    <h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget2.forgot')}</h2>
                    <p className='text-[#5B5B5B]'>{t('ForgetPage.Forget2.message')}</p>
                </div>
                {/* email */}
                <div className='gap-y-3 flex flex-col'>
                    <p>{t('ForgetPage.Forget2.emailAddress')}</p>
                    <input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder={t('ForgetPage.Forget2.enterEmail')} type="text" />
                </div>
                {/* reset password button */}
                <Link href='/forget/email-code'>
                    <button
                        className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
                    >{t('ForgetPage.Forget2.button')}</button>
                </Link>
            </form>
        </div>
    )
}
