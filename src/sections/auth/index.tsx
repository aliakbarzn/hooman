'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import indexImage from '@/assets/images/register-page/register-image.png'
import { TickIcon } from '@/assets/icons'
import SignIn from './signin'
import Register from './register'
import { Link } from '@/navigation'

const Auth = ({isSignin}:{isSignin:boolean}) => {
	const [isRegister, setIsRegister] = useState(isSignin);
	console.log(isRegister)
	return (
		<div className='bg-white sm:px-0 sm:py-0 px-9 py-4'>
			{/* icon section */}
			<div className='sm:py-12 sm:px-9 sm:flex sm:justify-end'>
				<Image src={logo} alt='logo' width={114} height={36} className='cursor-pointer' />
			</div>
			{/* content container */}
			<div className='sm:gap-x-36 sm:px-20 sm:py-16 sm:flex mt-[78px] sm:mt-0'>
				{/* left section */}
				<div className='hidden sm:gap-y-20 sm:flex sm:flex-col'>
					{isRegister ? <Image src={indexImage} alt='index-image' /> : <Image width={488} height={411} src={indexImage} alt='index-image' />}
					<div className={`px-11 py-8 w-[615px] flex flex-col gap-y-8 bg-[#F6F9FF] rounded-md ${isRegister ? 'h-[425px]' : null}`}>
						<div className='flex gap-x-8 items-start'>
							<TickIcon />
							<p className='mt-[-5px] text-2xl font-normal leading-[37.5px]'>Prova helt gratis i 14 dagar.</p>
						</div>
						<div className='flex gap-x-8 items-start'>
							<TickIcon />
							<p className='mt-[-5px] text-2xl font-normal leading-[37.5px]'>Digital bokningskalender med onlinebokning.</p>
						</div>
						{isRegister && <div className='flex gap-x-8 items-start'>
							<TickIcon />
							<p className='mt-[-5px] text-2xl font-normal leading-[37.5px] max-w-[464px]'>Synlighet på sveriges största marknadsplats för tjänster inom skönhet och hälsa.</p>
						</div>}
						{isRegister && <div className='flex gap-x-8 items-start'>
							<TickIcon />
							<p className='mt-[-5px] text-2xl font-normal leading-[37.5px]'>Fri support</p>
						</div>}
					</div>
				</div>
				<div className='flex flex-col '></div>
				{/* right section */}
				<div className='gap-y-10 flex flex-col items-center'>
					<div className='flex flex-col gap-y-6 items-center'>
						<p className='text-base font-normal'>Welcome to thaimassagegruppen..!</p>
						{/* Toggle --------------- */}
						<div
							className={`relative flex items-center justify-between w-[329px] h-[50px] rounded-[33px] px-2 py-2 cursor-pointer transition-colors duration-300 "bg-[#FFF4F2]"`}
						>
							<div
								className={`absolute z-0 flex items-center justify-center w-[156px] h-9 rounded-full text-white font-semibold transition-transform duration-300 ${isRegister ? "bg-[#F58882] translate-x-0" : "bg-[#47C666] translate-x-full"
									}`}
							>
							</div>
							<Link className='z-10' href='/register'>
							<p className={`ml-12 z-1 transition-colors duration-300 ${isRegister ? 'text-white' : 'text-[#47C666]'}`}>Register</p>
							</Link>
							<Link className='z-10' href='/signin'>
							<p className={`mr-14 transition-colors duration-300 ${isRegister ? 'text-[#F58882]' : 'text-white'}`}>Login</p>
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