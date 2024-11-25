import { useTranslations } from 'next-intl'
import React from 'react'


export default function page() {

	const t = useTranslations()

	return (
		<div className='w-1/2 h-full flex flex-col items-center justify-center'>
			<form className='gap-y-10 flex flex-col w-[436px]'>
				<div className="flex flex-col gap-y-3">
					<h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget4.title')}</h2>
					<p className='text-[#5B5B5B]'>{t('ForgetPage.Forget4.message')}</p>
				</div>
				{/* reset password button */}
				<button
					className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
				>{t('ForgetPage.Forget4.button')}</button>
			</form>
		</div>
	)
}
