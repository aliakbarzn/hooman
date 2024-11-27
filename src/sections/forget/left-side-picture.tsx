import Image from 'next/image'
import React from 'react'
import womanFlower from '@/assets/images/forget/woman-flower.png'

export default function LeftSidePicture() {
	return (
		<div className='relative w-1/2 h-full p-10'>
			<Image src={womanFlower} alt='forget-password-image' width={737} height={916} className='rounded-[29px]' />
			<div className='absolute z-10 left-24 bottom-24'>
				<h1 className='text-3xl font-bold'>Lorem Ipsum is simply </h1>
				<p>Lorem Ipsum is simply </p>
			</div>
		</div>
	)
}
