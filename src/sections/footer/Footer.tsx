import React from 'react'
import { YoutubeIcon } from '@/assets/icons'
import { InstagramIcon } from '@/assets/icons'
import { XIcon } from '@/assets/icons'
import { LinkedinIcon } from '@/assets/icons'
import { CopyrightIcon } from '@/assets/icons'
import CustomDropDown from '@/sections/footer/CustomDropDown'

const Footer = () => {

	return (
		<div className=' w-full flex flex-col gap-y-10 sm:gap-y-20 pt-10 pb-8 px-5 sm:pt-16 sm:pb-14 sm:px-8 border-t border-[#D9D9D9]'>
			{/* footer-top--------------------------------------------------------- */}
			<div className='flex flex-col items-center sm:items-start gap-y-10 sm:flex-row sm:justify-between'>
				{/* footer-top-left------------------------------------------------- */}
				<div className='items-center sm:items-start flex flex-col gap-y-3 sm:gap-y-8 sm:ml-24 2xl:ml-80 lg:ml-36'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>choose your country</h2>
					<CustomDropDown />
				</div>
				{/* footer-top-right------------------------------------------------ */}
				<div className='items-center sm:items-start flex flex-col gap-y-3 sm:gap-y-8 sm:mr-[70px] 2xl:mr-[224px] lg:mr-32'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Subscribe to our news channel</h2>
					<div className="flex items-center gap-x-2">
						<input
							type="text"
							placeholder='you@example.com'
							className='w-44 sm:w-[250px] h-10 py-3 px-4 border border-[#D9D9D9] rounded-lg text-base font-normal'
						/>
						<button className='w-[77px] h-10 p-3 flex items-center justify-center bg-[#2C2C2C] rounded-lg text-[#F5F5F5] text-base font-normal hover:bg-slate-700 transition-all'>Submit</button>
					</div>
				</div>
			</div>
			{/* footer-middle-------------------------------------------------------- */}
			<div className='flex justify-center gap-x-14 sm:justify-between lg:justify-between 2xl:justify-between'>
				{/* footer-middle-left--------------------------------------------------- */}
				<div className='flex flex-col gap-y-10 sm:ml-24 2xl:ml-80 lg:ml-36'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Explore</h2>
					<ul className='flex flex-col gap-y-5 sm:gap-y-3'>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Om thaimassage</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Thaimassge nyheter</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Om oss </li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Support</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Gäst konto för att hitta, boka & lämna recension</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Anslut ditt företag</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Logga in/ som salong ägare eller som gäst konto</li>
					</ul>
				</div>
				{/* footer-middle-right------------------------------------------------- */}
				<div className='flex flex-col gap-y-10 sm:mr-56 2xl:mr-96 lg:mr-72'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Resources</h2>
					<ul className='flex flex-col gap-y-5 sm:gap-y-3'>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Köp annonsplats</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Alla thai salonger</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Thaimassage stockholm</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Thaimassage göteborg</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Thaimassage malmö</li>
						<li className='hover:underline cursor-pointer text-sm sm:text-base text-[#1E1E1E] font-extralight sm:font-normal'>Webbshop</li>
					</ul>
				</div>
			</div>
			{/* footer-bottom -------------------------------------------------------*/}
			<div className='mt-8 flex flex-col items-center gap-y-8'>
				{/* icons-container------------------------------------------------------ */}
				<div className='flex items-center justify-between w-[186px] h-6'>
					<span className='cursor-pointer'><XIcon /></span>
					<span className='cursor-pointer'><InstagramIcon /></span>
					<span className='cursor-pointer'><YoutubeIcon /></span>
					<span className='cursor-pointer'><LinkedinIcon /></span>
				</div>
				{/* copyright-section------------------------------------------------- */}
				{/* <div className='flex items-center gap-x-3 text-[#555555] text-[22px] font-medium'> */}
				<div className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-3">
					<div className='flex items-center gap-x-2'>Copyright <CopyrightIcon /> 2024 Dscode</div>
					<div className='flex items-center gap-x-2 sm:gap-x-3'><span className='hidden sm:flex'>|</span> All rights reserved</div>
				</div>
			</div>
		</div>
		// </div >
	)
}

export default Footer