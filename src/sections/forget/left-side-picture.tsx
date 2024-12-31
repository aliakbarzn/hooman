import Image from 'next/image'
import React from 'react'
import bg from '@/assets/images/forget/forget-bg.png'
import { TickIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'

export default function LeftSidePicture() {
	const t = useTranslations('ForgetPage.leftContent')

	return (
		<div className='h-full py-40 px-20 bg-greenC-light2 flex flex-col items-center justify-center gap-20'>
			{/* content */}
			<div className={`max-w-[600px] px-11 py-8 flex flex-col gap-8 rounded-lg bg-white text-xl`}>
				<div className='flex gap-8'>
					<span className='min-w-5 max-w-5 min-h-5 max-h-5'><TickIcon /></span>
					<p>{t('option1')}</p>
				</div>
				<div className='flex gap-8'>
					<span className='min-w-5 max-w-5 min-h-5 max-h-5'><TickIcon /></span>
					<p>{t('option2')}</p>
				</div>
				<div className='flex gap-8'>
					<span className='min-w-5 max-w-5 min-h-5 max-h-5'><TickIcon /></span>
					<p>{t('option3')}</p>
				</div>
				<div className='flex gap-8'>
					<span className='min-w-5 max-w-5 min-h-5 max-h-5'><TickIcon /></span>
					<p>{t('option4')}</p>
				</div>
			</div>
			{/* bg */}
			<div className='max-w-96 max-h-80'>
				<Image src={bg} alt='forget-password-image' className='object-fill w-full h-full' />
			</div>
		</div>
	)
}
