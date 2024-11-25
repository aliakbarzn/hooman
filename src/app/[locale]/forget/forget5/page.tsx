'use client'

import React from 'react'
import { useTranslations } from 'use-intl'


export default function page() {

	const t = useTranslations()

	return (
		<div className='w-1/2 h-full flex flex-col items-center justify-center'>
			<form className='gap-y-14 flex flex-col w-[436px]'>
				<div className="flex flex-col gap-y-3">
					<h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget5.title')}</h2>
					<p className='text-[#5B5B5B]'>{t('ForgetPage.Forget5.message')}</p>
				</div>
				{/* password */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('ForgetPage.Forget5.password')}</p>
					<input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder='Enter your Email Address' type="text" />
				</div>
				{/* confirm password */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('ForgetPage.Forget5.confirmPassword')}</p>
					<input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder={t('ForgetPage.Forget5.confirmPasswordText')} type="text" />
				</div>
				{/* reset password button */}
				<button
					className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
				>{t('ForgetPage.Forget5.button')}</button>
			</form>
		</div>
	)
}
