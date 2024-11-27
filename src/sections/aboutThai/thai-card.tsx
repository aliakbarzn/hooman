import React from 'react'
import Image from 'next/image'

export default function ThaiCard({ cardTitle, imgSrc, bgColor, buttonBgColor }: any) {
	return (
		<div className={`rounded-2xl w-48 h-64 flex flex-col justify-between items-center ${bgColor}`}>
			<div className='overflow-hidden'>
				<Image
					src={imgSrc}
					alt='Image Description'
					width={821}
					height={272}
					unoptimized
					className='object-cover overflow-hidden rounded-2xl w-[192px] h-[124px]'
				/>
			</div>
			<h3 className='text-[#303030] text-base font-semibold'>{cardTitle}</h3>
			<button className={`mb-8 text-[#F5F5F5] w-[149px] h-10 rounded-lg ${buttonBgColor}`}>More info</button>
		</div>
	)
}
