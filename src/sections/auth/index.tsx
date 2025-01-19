'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import indexImage from '@/assets/images/register-page/register-image.png'
import { TickIcon } from '@/assets/icons'
import SignIn from './signin'
import Register from './register'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const Auth = ({ isSignin }: { isSignin: boolean }) => {
	const t = useTranslations('Auth')

	const [isRegister, setIsRegister] = useState(isSignin);

	return (
		<div className='max-w-[1300px] mx-auto sm:px-0 sm:py-0 px-4 py-4'>
			{/* icon section */}
			<div className='w-full sm:py-12 sm:px-9 sm:flex sm:justify-start'>
				<Link className='' href='/'>
					<Image src={logo} alt='logo' width={114} height={36} className='cursor-pointer' />
				</Link>
			</div>
			{/* content container */}
			<div className='w-full sm:gap-36 lg:gap-36 sm:px-20 sm:py-16 sm:flex sm:justify-center mt-[78px] sm:mt-0'>
				{/* left section */}
				<div className='hidden sm:gap-y-20 xl:flex sm:flex-col'>
					{isRegister ? <Image layout='responsive' className='object-contain' src={indexImage} alt='index-image' /> : <Image layout='responsive' className='object-contain' src={indexImage} alt='index-image' />}
					<div className={`px-11 py-8 flex flex-col gap-8 bg-[#F6F9FF] rounded-md ${isRegister ? '' : null}`}>
						<div className='flex gap-x-8 items-start'>
							<span className='max-w-5 min-w-5 h-5'><TickIcon /></span>
							<p className='mt-[-5px] text-lg xl:text-2xl font-normal leading-[37.5px]'>{t('text1')}</p>
						</div>
						<div className='flex gap-8 items-start'>
							<span className='max-w-5 min-w-5 h-5'><TickIcon /></span>
							<p className='mt-[-5px] text-lg xl:text-2xl font-normal leading-[37.5px]'>{t('text2')}</p>
						</div>
						{isRegister && <div className='flex gap-x-8 items-start'>
							<span className='max-w-5 min-w-5 h-5'><TickIcon /></span>
							<p className='mt-[-5px] text-lg xl:text-2xl font-normal leading-[37.5px] max-w-[464px]'>{t('text3')}</p>
						</div>}
						{isRegister && <div className='flex gap-x-8 items-start'>
							<span className='max-w-5 min-w-5 h-5'><TickIcon /></span>
							<p className='mt-[-5px] text-lg xl:text-2xl font-normal leading-[37.5px]'>{t('text4')}</p>
						</div>}
					</div>
				</div>
				{/* right section */}
				<div className='gap-y-10 flex flex-col items-center'>
					<div className='flex flex-col gap-y-6 items-center'>
						<p className='text-base font-normal'>{t('welcomeText')}</p>
						{/* Toggle --------------- */}
						<div
							className={`relative flex items-center justify-between w-[329px] h-[50px] rounded-[33px] px-2 py-2 cursor-pointer transition-colors duration-300 "bg-[#FFF4F2]"`}
						>
							<div
								className={`absolute z-0 flex items-center justify-center w-[156px] h-9 rounded-full text-white font-semibold transition-transform duration-300 ${isRegister ? "bg-primary translate-x-0" : "bg-secondary translate-x-full"
									}`}
							>
							</div>
							<Link className='z-10' href='/register'>
								<p className={`ml-12 z-1 transition-colors duration-300 ${isRegister ? 'text-white' : 'text-secondary'}`}>{t('register')}</p>
							</Link>
							<Link className='z-10' href='/signin'>
								<p className={`mr-14 transition-colors duration-300 ${isRegister ? 'text-primary' : 'text-white'}`}>{t('login')}</p>
							</Link>
						</div>
					</div>
					{isRegister ? <Register /> : <SignIn />}
				</div>
			</div>
		</div>
	)
}

export default Auth