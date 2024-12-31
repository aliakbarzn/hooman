import React from 'react'
import { YoutubeIcon } from '@/assets/icons'
import { InstagramIcon } from '@/assets/icons'
import { XIcon } from '@/assets/icons'
import { LinkedinIcon } from '@/assets/icons'
import { CopyrightIcon } from '@/assets/icons'
import CustomDropDown from '@/sections/footer/CustomDropDown'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'


const Footer = () => {

	const t = useTranslations('Footer')

	const footerItems1 = [
		{ title: t('footerItems1.item1'), href: '' },
		{ title: t('footerItems1.item2'), href: '' },
		{ title: t('footerItems1.item3'), href: '' },
		{ title: t('footerItems1.item4'), href: '' },
		{ title: t('footerItems1.item5'), href: '' },
		{ title: t('footerItems1.item6'), href: '' },
		{ title: t('footerItems1.item7'), href: '' },
	]
	const footerItems2 = [
		{ title: t('footerItems2.item1'), href: '' },
		{ title: t('footerItems2.item2'), href: '' },
		{ title: t('footerItems2.item3'), href: '' },
		{ title: t('footerItems2.item4'), href: '' },
		{ title: t('footerItems2.item5'), href: '' },
		{ title: t('footerItems2.item6'), href: '' },
	]

	return (
		<div className='w-full flex flex-col gap-y-10 md:gap-y-20 pt-10 pb-8 px-5 md:pt-16 md:pb-14 md:px-8 border-t border-grayC'>
			{/* footer-top--------------------------------------------------------- */}
			<div className='flex flex-col items-center md:items-center gap-y-10 md:flex-row md:justify-between'>
				{/* footer-top-left------------------------------------------------- */}
				<div className='w-full max-w-[328px] flex flex-col gap-y-3 md:gap-y-8 md:ml-24 2xl:ml-80 lg:ml-36'>
					<h2 className='text-blackC font-semibold'>choose your country</h2>
					<CustomDropDown />
				</div>
				{/* footer-top-right------------------------------------------------ */}
				<div className='w-full max-w-[328px] flex flex-col gap-y-3 md:gap-y-8 md:mr-32 2xl:mr-[224px] lg:mr-32'>
					<h2 className='text-blackC font-semibold'>Subscribe to our news channel</h2>
					<div className="w-full flex items-center gap-x-2">
						<input
							type="text"
							placeholder='you@example.com'
							className='w-3/4 md:w-48 lg:w-[250px] h-10 py-3 px-4 border border-grayC rounded-lg outline-none'
						/>
						<button className='w-1/4 h-10 p-3 flex items-center justify-center bg-[#2C2C2C] rounded-lg text-[#F5F5F5] text-base font-normal hover:bg-slate-700 transition-all'>Submit</button>
					</div>
				</div>
			</div>
			{/* footer-middle-------------------------------------------------------- */}
			<div className='max-w-[328px] md:max-w-none self-center flex flex-col md:flex-row  justify-center gap-14 md:gap-8 sm:justify-center sm:gap-x-8 md:justify-between lg:justify-between 2xl:justify-between'>
				{/* footer-middle-left--------------------------------------------------- */}
				<div className='md:max-w-[600px]'>
					<div className='flex flex-col gap-4 md:gap-10 md:ml-24 2xl:ml-80 lg:ml-36'>
						<h2 className='text-blackC text-base font-semibold'>{t('footerItems1.title')}</h2>
						<ul className='flex flex-col gap-y-5 md:gap-y-3'>
							{footerItems1.map(footerItem1 =>
								<li key={footerItem1.title} className='hover:underline cursor-pointer text-sm md:text-base text-blackC md:font-normal'><Link href={footerItem1.href}>{footerItem1.title}</Link></li>
							)}
						</ul>
					</div>
				</div>
				{/* footer-middle-right------------------------------------------------- */}
				<div className='md:max-w-[600px]'>
					<div className='flex flex-col gap-3 md:gap-10 md:mr-56 2xl:mr-96 lg:mr-72'>
						<h2 className='text-blackC text-base font-semibold'>{t('footerItems2.title')}</h2>
						<ul className='flex flex-col gap-y-5 md:gap-y-3'>
							{footerItems2.map(footerItem2 =>
								<li key={footerItem2.title} className='hover:underline cursor-pointer text-sm md:text-base text-blackC md:font-normal'><Link href={footerItem2.href}>{footerItem2.title}</Link></li>
							)}
						</ul>
					</div>
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
				<div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-3 font-medium text-[22px] text-[#555555]">
					<div className='flex items-center gap-x-2'>{t('copyright1')} <CopyrightIcon /> {t('copyright2')}</div>
					<div className='flex flex-col md:flex-row gap-3 items-center gap-x-2 md:gap-x-3'>
						<div className='w-64 md:w-[2px] h-px md:h-5 bg-grayC md:bg-[#555555]'></div>
						{t('copyright3')}
					</div>
				</div>
			</div>
		</div>
		// </div >
	)
}

export default Footer