import CloseIcon from '@/assets/icons/CloseIcon'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

	const t = useTranslations()

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<div className="bg-white p-8 rounded-lg shadow-lg w-[600px] flex flex-col gap-4 border border-gray-300">
				<div className="flex justify-between">
					<h3 className="text-2xl font-semibold text-gray-900">{t('ForgetPage.Forget6.title')}</h3>
					{/* <!-- Close icon that toggles the checkbox --> */}
					<label htmlFor="popupToggle" className="cursor-pointer"><CloseIcon /></label>
				</div>
				<p>{t('ForgetPage.Forget6.message1')}<br />
				{t('ForgetPage.Forget6.message2')}</p>
				<div className="flex gap-3 justify-end">
					<button className="rounded-lg py-2 px-3 bg-[#E3E3E3] text-base font-normal">{t('ForgetPage.Forget6.button1')}</button>
					<button className="rounded-lg py-2 px-3 bg-[#47C666] text-white text-base font-normal">{t('ForgetPage.Forget6.button2')}</button>
				</div>
			</div>
		</div>
	)
}
