'use client'

import React, { useRef } from 'react'
import CodeInput from '@/sections/forget/special-input'
import { useTranslations } from 'next-intl';

export default function page() {

	const buttonRef = useRef<HTMLButtonElement | null>(null);  // Reference to the button

	const t = useTranslations()

	const handleComplete = (code: string) => {
		console.log('Verification Code:', code);
		// Proceed with verification
		buttonRef.current ? buttonRef.current.disabled = false : null
	}

	const handleIncomplete = (): void => {
		buttonRef.current ? buttonRef.current.disabled = true : null
	}

	return (
		<div className='w-1/2 h-full flex flex-col items-center justify-center'>
			<form className='gap-y-10 flex flex-col w-[436px]'>
				<div className="flex flex-col gap-y-3">
					<h2 className='font-bold text-2xl text-[#5B5B5B]'>{t('ForgetPage.Forget3.check')}</h2>
					<p className='text-[#5B5B5B]'>{t('ForgetPage.Forget3.message1')}<br />
					{t('ForgetPage.Forget3.message2')}</p>
				</div>
				{/* input for entering the sent code */}
				<CodeInput length={5} onComplete={handleComplete} onImcomplete={handleIncomplete} />

				{/* reset password button */}
				<div className='gap-y-7 flex flex-col'>
					<button
						className='disabled:opacity-30 mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
						ref={buttonRef}
						disabled>{t('ForgetPage.Forget3.button')}</button>
					<p className='text-[#5B5B5B]'>{t('ForgetPage.Forget3.subtext')}<span className='text-[#F58882]'>{t('ForgetPage.Forget3.subtextColored')}</span></p>
				</div>
			</form>
		</div>
	)
}
