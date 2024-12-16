'use client'

import React, { useState } from 'react'
import backgroundLeft from '@/assets/images/contact-page/BG-8.png'
import backgroundRight from '@/assets/images/contact-page/BG-9.png'
import manAndLaptop from '@/assets/images/contact-page/Telecommuting-pana-1.png'
import { CloseIcon } from '@/assets/icons'
import Image from 'next/image'
import { Link } from '@/navigation'


const ContactIndex = () => {
	//states
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [inputCharacters, setInputCharacters] = useState(0)

	// handlers
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// what should the click do ? :
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputCharacters(e.target.value.length)
	}

	return (
		// background-container
		<div className='relative w-full h-[907px] flex overflow-hidden bg-[#C6FAD2] bg-opacity-10'>
			{/* background left */}
			<div className='w-3/5 flex-grow-1'>
				<Image src={backgroundLeft} alt='background-left' width={920} height={1200} className='' />
			</div>
			{/* background right */}
			<div className='w-2/5'>
				<Image src={backgroundRight} alt='background-right' width={660} height={1200} className='' />
			</div>
			{/* form section */}
			<div className='absolute left-[115px] top-[189.5px] flex flex-col'>
				<h1 className='text-7xl font-bold text-[#2C2C2C] tracking-[-3%] leading-[86.4px]'>We hear you</h1>
				<p className='mt-1 text-xl text-[#2C2C2C] leading-6'>Share your comments and suggestions with us</p>
				{/* form */}
				<form className=' mt-8 flex flex-col gap-y-6 border border-[#D9D9D9] rounded-lg bg-white w-[442px] px-6 py-[38.5px]'>
					{/* type of use */}
					{!isLoggedIn && // check if user is logged in or not to show the options
						<div className='flex flex-col gap-y-2'>
							<span className='text-[#1E1E1E]'>Type of use</span>
							<select className='text-[#1E1E1E] w-[394px] h-10 rounded-lg border border-[#D9D9D9] px-4 py-2'>
								<option value="visitor">visitor</option>
								<option value="user">user</option>
								<option value="patient">patient</option>
							</select>
						</div>
					}
					{/* email */}
					<div className='flex flex-col gap-y-2'>
						<span className='text-[#1E1E1E]'>Email</span>
						<input className='w-[394px] h-10 rounded-lg border border-[#D9D9D9] px-4 py-3' type="text" placeholder='Value' />
					</div>
					{/* message */}
					<div className='flex flex-col gap-y-2'>
						<span className='text-[#1E1E1E]'>Message</span>
						<textarea maxLength={1000} className='h-20 rounded-lg border border-grayC px-4 py-3' placeholder='Value' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)} />
						<span className='text-blackC-light font-normal'>{inputCharacters} to 1000 word</span>
					</div>
					{/* button */}
					{isLoggedIn
						?
						<button className='w-[394px] h-10 bg-[#47C666] text-[#F5F5F5] rounded-lg hover:bg-green-400 transition-all' onClick={handleClick}>Submit</button>
						:
						<label htmlFor='popupToggle' className='h-10 bg-[#47C666] text-[#F5F5F5] rounded-lg hover:bg-green-400 text-center pt-2 cursor-pointer'>Submit</label>
					}
				</form>
			</div>
			{/* picture man and laptop */}
			<div className='absolute bottom-[74px] right-[46px]'>
				<Image src={manAndLaptop} alt='man-and-laptop' width={629} height={476} />
			</div>
			{/* login message pop-up */}
			{/*  Checkbox to control the pop-up */}
			<input type="checkbox" id="popupToggle" className="hidden peer" />
			{/*  The pop-up container */}
			<div id="popup"
				className="fixed top-0 left-0 w-screen h-screen items-center justify-center bg-[rgba(0,0,0,0.3)] hidden peer-checked:flex">
				<div className="bg-white p-8 rounded-lg shadow-lg w-[466px] flex flex-col gap-4 border border-gray-300">
					<div className="flex justify-between">
						<h3 className="text-2xl font-semibold text-gray-900">Please log in first</h3>
						{/* <!-- Close icon that toggles the checkbox --> */}
						<label htmlFor="popupToggle" className="cursor-pointer"><CloseIcon /></label>
					</div>
					<p>Become a member of the website to send a message</p>
					<div className="flex gap-3">
						<Link href='/signin' className="w-20 rounded-lg p-2 bg-[#C6FAD2] text-center">Sign in</Link>
						<Link href='/register' className="w-20 rounded-lg p-2 bg-primary text-center">Register</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactIndex