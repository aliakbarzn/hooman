'use client'

import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import LeftSideSection from '@/sections/forget/left-side-section1'

export default function page() {
	const t = useTranslations('ForgetPage.forget1')

	return (
		<div className="flex">
			<div className="w-1/2"><LeftSideSection secondImage={false} /></div>
			<div className="w-1/2">
				<div className='h-full flex flex-col gap-20 items-center p-20'>
					{/* logo */}
					<Link className='self-end' href={"/"}><Image alt="logo" src={logo} width={150} height={160} /></Link>
					{/* form */}
					<form className='gap-8 flex flex-col'>
						<div className="flex flex-col gap-3 text-blackC-dark">
							<h2 className='font-bold text-2xl'>{t('title')}</h2>
							<p>{t('message')}</p>
						</div>
						{/* email input */}
						<div className='gap-3 flex flex-col'>
							<p>{t('emailAddress')}</p>
							<input className='px-8 py-4 font-light w-[318px] sm:w-[435px] border border-secondary rounded-full outline-none' placeholder={t('enterEmail')} type="text" />
						</div>
						{/* reset password button */}
						<Link href='/forget/email-code' className='py-[14px] text-center text-white w-[317.15px] sm:w-[435px] bg-secondary rounded-full'>
							{t('button')}
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

