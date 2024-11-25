import React from 'react'
import { ChevronDownIcon, FacebookIcon, GoogleIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'

export default function page() {

	// hooks
	const t = useTranslations()

	return (
		<div className='w-1/2 h-full flex flex-col items-center justify-center'>
			<form className='gap-y-6 flex flex-col w-[436px]'>
				<div className="">
					<p className='text-[#5B5B5B]'> {t('ForgetPage.Forget1.message1')}</p>
					<p className='text-[#5B5B5B]'>{t('ForgetPage.Forget1.message2')}<span className='text-[#F58882] cursor-pointer'>{t('ForgetPage.Forget1.messageColored')}</span></p>
				</div>
				{/* email */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('ForgetPage.Forget1.emailTitle')}</p>
					<input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder={t('ForgetPage.Forget1.emailPlaceholder')} type="text" />
				</div>
				{/* type of use */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('ForgetPage.Forget1.usernameTitle')}</p>
					<div className='relative'>
						<select className='appearance-none px-8 py-4 text-base font-light text-[#ACACAC] w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]'>
							<option className='' value="visitor">visitor</option>
							<option className='' value="visitor">visitor</option>
							<option className='' value="visitor">visitor</option>
						</select>
						<div className='absolute z-10 top-5 right-10 pointer-events-none '>
							<ChevronDownIcon />
						</div>
					</div>
				</div>
				{/* password */}
				<div className='gap-y-3 flex flex-col'>
					<p>{t('ForgetPage.Forget1.passwordTitle')}</p>
					<input className='px-8 py-4 text-base font-light w-[317.15px] sm:w-[435px] h-14 border border-[#47C666] rounded-[40px]' placeholder={t('ForgetPage.Forget1.ifMessage')} type="text" />
					<div className='flex items-center justify-between '>
						<div className="flex items-center gap-x-1">
							<input type="checkbox" id='remember-password' />
							<label htmlFor='remember-password' className='text-xs font-light hover:underline cursor-text'>{t('ForgetPage.Forget1.remember')}</label>
						</div>
						<span className='text-xs font-light cursor-text hover:underline'>{t('ForgetPage.Forget1.forgot')}</span>
					</div>
				</div>
				{/* submit button */}
				<button
					className='mt-5 text-base font-light text-white w-[317.15px] sm:w-[435px] h-14 bg-[#47C666] rounded-[36px]'
				>{t('ForgetPage.Forget1.button')}</button>
			</form>
			{/* register / login with google / facebook */}
			<div className='mt-7 flex flex-col gap-y-8 items-center w-[436px]'>
				<p className='text-base font-normal text-[#ABABAB]'>{t('ForgetPage.Forget1.or')}</p>
				<div className='flex gap-x-4'>
					{/* google */}
					<div className='flex items-center gap-x-1 sm:gap-x-6 bg-[#F7FFEF] w-[237px] sm:w-[362px] h-14 justify-center rounded-[36px] cursor-pointer'>
						<GoogleIcon />
						<p className='text-base text-[#848483]'>{t('ForgetPage.Forget1.loginGoogle')}</p>
					</div>
					{/* facebook */}
					<div className='flex items-center bg-[#F6F6F6] w-14 h-14 justify-center rounded-[36px] cursor-pointer'>
						<FacebookIcon />
					</div>
				</div>
			</div>
		</div>
	)
}
