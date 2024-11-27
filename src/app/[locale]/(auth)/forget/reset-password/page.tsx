'use client'

import CloseIcon from '@/assets/icons/CloseIcon'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'


export default function page() {

	// states
	const [showPopup, setShowPopup] = useState(false)

	// hooks
	const t = useTranslations()

	// handlers
	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		setShowPopup(true)
	}

	return (
		<div className='w-1/2 h-full flex flex-col items-center justify-center'>
			<form className={`gap-y-14 flex flex-col w-[436px] ${showPopup ? 'hidden' : 'flex'}`}>
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
					onClick={e => handleSubmit(e)}
				>{t('ForgetPage.Forget5.button')}</button>
			</form>
			{/* pop-up -------------------------------------------------------------------------------------------------------------------- */}
			<div className={`z-10 w-screen h-screen items-center justify-center ${showPopup ? 'flex' : 'hidden'}`}>
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
		</div>
	)
}