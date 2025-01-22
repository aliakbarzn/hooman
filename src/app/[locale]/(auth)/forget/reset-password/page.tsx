'use client'

import CloseIcon from '@/assets/icons/CloseIcon'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'
import { Link } from '@/navigation'
import LeftSideSection from '@/sections/forget/left-side-section1'


export default function page() {

	const t = useTranslations('ForgetPage.forget4')

	// states
	const [showPopup, setShowPopup] = useState(false)

	// handlers
	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		setShowPopup(true)
	}

	return (
		<div className="flex">
			<div className="w-1/2"><LeftSideSection secondImage={true} /></div>
			<div className="w-1/2">
				<div className='h-full flex items-center justify-center'>
					<form className={`gap-14 flex flex-col max-w-[436px] ${showPopup ? 'hidden' : 'flex'}`}>
						<div className="flex flex-col gap-3">
							<h2 className='font-bold text-2xl text-blackC-dark'>{t('title')}</h2>
							<p className='text-blackC-dark'>{t('message')}</p>
						</div>
						{/* password */}
						<div className='gap-3 flex flex-col'>
							<p>{t('password')}</p>
							<input className='px-8 py-4 font-light w-[317.15px] sm:w-[435px] border border-secondary rounded-full' placeholder={t('placeholderPassword')} type="text" />
						</div>
						{/* confirm password */}
						<div className='gap-3 flex flex-col'>
							<p>{t('confirmPassword')}</p>
							<input className='px-8 py-4 font-light w-[317.15px] sm:w-[435px] border border-secondary rounded-full' placeholder={t('confirmPasswordText')} type="text" />
						</div>
						{/* reset password button */}
						<button
							className='mt-5 py-4 font-light text-white w-[317.15px] sm:w-[435px] bg-secondary rounded-full'
							onClick={e => handleSubmit(e)}
						>{t('button')}</button>
					</form>
					{/* pop-up -------------------------------------------------------------------------------------------------------------------- */}
					<div className={`z-10 w-screen h-screen items-center justify-center ${showPopup ? 'flex' : 'hidden'}`}>
						<div className="bg-white p-8 rounded-lg shadow-lg w-[600px] flex flex-col gap-4 border border-grayC">
							<div className="flex justify-between">
								<h3 className="text-2xl font-semibold text-blackC">{t('popup.title')}</h3>
								{/* <!-- Close icon that toggles the checkbox --> */}
								<label htmlFor="popupToggle" className="cursor-pointer"><CloseIcon /></label>
							</div>
							<p>{t('popup.message1')}<br />{t('popup.message2')}</p>
							<div className="flex gap-3 justify-end">
								<button className="rounded-lg py-2 px-3 bg-[#E3E3E3]">{t('popup.button1')}</button>
								<Link href='/signin'><button className="rounded-lg py-2 px-3 bg-secondary text-white">{t('popup.button2')}</button></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}