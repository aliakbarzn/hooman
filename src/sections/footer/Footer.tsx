import React from 'react'
import { YoutubeIcon } from '@/assets/icons'
import { InstagramIcon } from '@/assets/icons'
import { XIcon } from '@/assets/icons'
import { LinkedinIcon } from '@/assets/icons'
import { CopyrightIcon } from '@/assets/icons'
import CustomDropDown from '@/sections/footer/CustomDropDown'

const Footer = () => {

	return (
		<div className='w-full h-[788px] flex flex-col gap-y-20 pt-16 pb-[57px] px-8 border-t border-[#D9D9D9]'>
			{/* footer-top--------------------------------------------------------- */}
			<div className='flex justify-between'>
				{/* footer-top-left------------------------------------------------- */}
				<div className='flex flex-col gap-y-8 ml-24'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>choose your country</h2>
					<CustomDropDown />
				</div>
				{/* footer-top-right------------------------------------------------ */}
				<div className='flex flex-col gap-y-8 mr-[70px]'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Subscribe to our news channel</h2>
					<div className="flex items-center gap-x-2">
						<input
							type="text"
							placeholder='you@example.com'
							className='w-[250px] h-10 py-3 px-4 border border-[#D9D9D9] rounded-lg text-base font-normal'
						/>
						<button className='w-[77px] h-10 p-3 flex items-center justify-center bg-[#2C2C2C] rounded-lg text-[#F5F5F5] text-base font-normal hover:bg-slate-700 transition-all'>Submit</button>
					</div>
				</div>
			</div>
			{/* footer-middle-------------------------------------------------------- */}
			<div className='flex justify-between'>
			{/* footer-middle-left--------------------------------------------------- */}
				<div className='flex flex-col gap-y-10 ml-24'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Explore</h2>
					<ul className='flex flex-col gap-y-3'>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Om thaimassage</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Thaimassge nyheter</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Om oss </li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Support</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Gäst konto för att hitta, boka & lämna recension</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Anslut ditt företag</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Logga in/ som salong ägare eller som gäst konto</li>
					</ul>
				</div>
				{/* footer-middle-right------------------------------------------------- */}
				<div className='flex flex-col gap-y-10 mr-56'>
					<h2 className='text-[#1E1E1E] text-base font-semibold'>Resources</h2>
					<ul className='flex flex-col gap-y-3'>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Köp annonsplats</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Alla thai salonger</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Thaimassage stockholm</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Thaimassage göteborg</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Thaimassage malmö</li>
						<li className='hover:underline cursor-pointer text-base text-[#1E1E1E] font-normal'>Webbshop</li>
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
				<div className='flex items-center gap-x-3 text-[#555555] text-[22px] font-medium'>
					Copyright <CopyrightIcon /> 2024 Dscode | All rights reserved
				</div>
			</div>
		</div>
	)
}

export default Footer