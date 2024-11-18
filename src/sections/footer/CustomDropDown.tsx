"use client"
import React, { useState } from 'react';
import { ChevronDownIcon, ThailandIcon } from '@/assets/icons';
import { GermanyIcon } from '@/assets/icons';
import { SwedenIcon } from '@/assets/icons';
import { BritainIcon } from '@/assets/icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface Option {
	value: string,
	isOpen?: boolean,
	country: React.FC | any,
	lang: string
}

const options = [
	{ value: 'sweden', country: <SwedenIcon />, lang: 'se' },
	{ value: 'germany', country: <GermanyIcon />, lang: 'de' },
	{ value: 'britain', country: <BritainIcon />, lang: 'en' },
	{ value: 'thailand', country: <ThailandIcon />, lang: 'th' },
];

const CustomDropDown = () => {
	// state
	const [selectedOption, setSelectedOption] = useState({
		isOpen: false,
		value: 'sweden',
		country: <SwedenIcon />,
		lang: 'en'
	});

	const { changeLanguage, language } = useLanguage()

	// handler
	const handleOptionClick = (option: Option) => {
		setSelectedOption({
			isOpen: false,
			value: option.value,
			country: option.country,
			lang: option.lang
		});
		changeLanguage(option.lang)
		console.log(option.lang)
	};


	return (
		<div className="relative min-w-60">
			<div
				className="flex items-center justify-between h-[42px] rounded-lg border py-3 pr-3 pl-4 cursor-pointer"
				onClick={() =>
					setSelectedOption((prev) => ({
						...prev,
						isOpen: !prev.isOpen,
					}))
				}
			>
				<div className='w-full flex items-center justify-between'>
					<div className='flex items-center gap-x-2'>
						{selectedOption.country}
						<span>{selectedOption.value}</span>
					</div>
					<ChevronDownIcon />
				</div>
			</div>
			{selectedOption.isOpen && (
				<React.Fragment>
					<div
						className='fixed top-0 left-0 w-screen h-screen z-20 opacity-0'
						onClick={() => setSelectedOption(prev => ({
							...prev,
							isOpen: false
						}))}>
						{/* this is an empty div to help close the language menu */}
					</div>
					<div className="absolute z-30 bg-white border rounded-lg shadow-lg w-full mt-1">
						{options.map((option) => (
							<div
								key={option.value}
								className="pl-4  flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
								onClick={() => handleOptionClick(option)}
							>
								{option.country}
								<span>{option.value}</span>
							</div>
						))}
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default CustomDropDown;
