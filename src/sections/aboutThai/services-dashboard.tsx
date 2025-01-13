'use client'

import { CircledArrowIcon } from '@/assets/icons'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ServicesDashboard() {
	const [selectedItem, setSelectedItem] = useState<string | null>(null)

	const t = useTranslations()

	const menuItems = [
		{
			id: 'traditional-thai-massage',
			href: 'traditional',
			title: t('Services.servicesDashboard.items.item1.item'),
			subItems: [
				t('Services.servicesDashboard.items.item1.subItem1'),
				t('Services.servicesDashboard.items.item1.subItem2'),
				t('Services.servicesDashboard.items.item1.subItem3')
			],
		},
		{
			id: 'special-techniques',
			href: 'specialized',
			title: t('Services.servicesDashboard.items.item3.item'),
			subItems: [
				t('Services.servicesDashboard.items.item3.subItem1'),
				t('Services.servicesDashboard.items.item3.subItem2')

			]
		},
		{
			id: 'oil-massage',
			href: 'oil',
			title: t('Services.servicesDashboard.items.item2.item'),
			subItems: [
				t('Services.servicesDashboard.items.item2.subItem1'),
				t('Services.servicesDashboard.items.item2.subItem2')
			],
		},
		{
			id: 'spa-services',
			href: 'spa',
			title: t('Services.servicesDashboard.items.item4.item'),
			subItems: [
				t('Services.servicesDashboard.items.item4.subItem1'),
				t('Services.servicesDashboard.items.item4.subItem2'),
				t('Services.servicesDashboard.items.item4.subItem3'),
				t('Services.servicesDashboard.items.item4.subItem4'),
				t('Services.servicesDashboard.items.item4.subItem5'),
			]
		},
	];

	const handleItemClick = (id: string) => {
		setSelectedItem((prev) => (prev === id ? null : id)); // Toggle the selected item
	};

	return (
		<div className="w-full max-w-[310px] mx-auto p-4 bg-white border-r border-[#D9D9D9]">
			<h2 className="font-bold text-lg mb-4 px-4">{t('Services.servicesDashboard.title')}</h2>
			<p className="text-sm text-gray-500 mb-2 px-4">{t('Services.servicesDashboard.subTitle')}</p>
			<hr className="border-gray-300 my-4 mx-4" />

			{menuItems.map((item) => (
				<div key={item.id} className="mb-2">
					{/* Main Menu Item */}
					<Link href={`/about-thai/${item.href}`}
						className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${selectedItem === item.id ? 'border-l-2 border-[#F58882] bg-[#FFF9F8]' : 'text-[#1E1E1E]'}`}
						onClick={() => handleItemClick(item.id)}>
						<span>{item.title}</span>
						{item.subItems.length > 0 ?
							<span className={`h-5 w-5 transition-transform ${selectedItem === item.id ? 'rotate-90 text-red-500' : 'text-gray-500'}`}><CircledArrowIcon /></span>
							: null}
					</Link>
					{/* Sub-Items */}
					{selectedItem === item.id && item.subItems.length > 0 && (
						<div className=" mt-3">
							{item.subItems.map((subItem, index) => (
								<p key={index} className="text-sm font-normal text-[#757575] mb-3 ml-4 hover:text-[#F58882] cursor-pointer">
									{subItem}
								</p>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}