import React from 'react'
import { CircledArrowIcon } from '@/assets/icons'
import { Link } from '@/navigation';

export default function Dashboard() {
	return (
		<div className="p-2 w-[301px] border border-[#D9D9D9] bg-white">
			{/* Content Header */}
			<div className="px-4 py-2">
				<h3>Our Services</h3>
				<h6 className="text-[#757575]">Category</h6>
			</div>
			{/* Border Top */}
			<div className="mx-2 bg-[#D9D9D9] w-[253px] h-[1px] inline-block"></div>
			{/* Content items */}
			<div className="py-1 flex flex-col gap-y-3">
				{/* item */}
				<details className="group">
					<summary className="flex items-center justify-between py-3 px-4 cursor-pointer rounded-lg hover:bg-[#FFF9F8] group-open:border-l group-open:border-[#F58882]">
						<h5 className="text-base font-normal group-open:text-[#F58882]"><Link href='/about-thai/traditional'>Traditional Thai Massage</Link></h5>
						<div className="transform transition-transform group-open:rotate-90 group-open:text-[#F58882]"><Link href='/about-thai/traditional'><CircledArrowIcon /></Link></div>
					</summary>
					<div className="mt-3 flex flex-col gap-y-2 px-4 text-sm font-normal text-[#757575]">
						<p className="hover:text-[#F58882]">Herb (Thai Massage)</p>
						<p className="hover:text-[#F58882]">Thai Massage</p>
						<p className="hover:text-[#F58882]">Child Thai Massage</p>
					</div>
				</details>

				{/* item */}
				<details className="group">
					<summary className="flex items-center justify-between py-3 px-4 cursor-pointer rounded-lg hover:bg-[#FFF9F8] group-open:border-l group-open:border-[#F58882]">
						<h5 className="text-base font-normal group-open:text-[#F58882]"><Link href='/about-thai/oil'>Oil-Based Massages</Link></h5>
						<div className="transform transition-transform group-open:rotate-90 group-open:text-[#F58882]"><Link href='/about-thai/oil'><CircledArrowIcon /></Link></div>
					</summary>
					<div className="mt-3 flex flex-col gap-y-2 px-4 text-sm font-normal text-[#757575]">
						<p className="hover:text-[#F58882]">2 Masseuse Thai Oil Massage</p>
						<p className="hover:text-[#F58882]">Thai Oil Massage</p>
					</div>
				</details>
				{/* item */}
				<details className="group">
					<summary className="flex items-center justify-between py-3 px-4 cursor-pointer rounded-lg hover:bg-[#FFF9F8] group-open:border-l group-open:border-[#F58882]">
						<h5 className="text-base font-normal group-open:text-[#F58882]"><Link href='/about-thai/specialized'>Specialized  Techniques</Link></h5>
						<div className="transform transition-transform group-open:rotate-90 group-open:text-[#F58882]"><Link href='/about-thai/specialized'><CircledArrowIcon /></Link></div>
					</summary>
					<div className="mt-3 flex flex-col gap-y-2 px-4 text-sm font-normal text-[#757575]">
						<p className="hover:text-[#F58882]"> Mix Thai Massage</p>
						<p className="hover:text-[#F58882]">Sports Massage</p>
					</div>
				</details>
			</div>
			{/* Border Bottom */}
			<div className="mx-2 bg-[#D9D9D9] w-[253px] h-[1px] inline-block"></div>
			{/* content bottom */}
			<div className="py-1 flex flex-col gap-y-3">
				{/* item */}
				<details className="group">
					<summary className="flex items-center justify-between py-3 px-4 cursor-pointer rounded-lg hover:bg-[#FFF9F8] group-open:border-l group-open:border-[#F58882]">
						<h5 className="text-base font-normal group-open:text-[#F58882]"><Link href='/about-thai/spa'>Spa Services</Link></h5>
						<div className="transform transition-transform group-open:rotate-90 group-open:text-[#F58882]"><Link href='/about-thai/spa'><CircledArrowIcon /></Link></div>
					</summary>
					<div className="mt-3 flex flex-col gap-y-2 px-4 text-sm font-normal text-[#757575]">
						<p className="hover:text-[#F58882]">Body Scrub</p>
						<p className="hover:text-[#F58882]">Facial Massage</p>
						<p className="hover:text-[#F58882]">Foot Massage</p>
						<p className="hover:text-[#F58882]">Back Massage</p>
						<p className="hover:text-[#F58882]"> Spa Thai Massage</p>
					</div>
				</details>
			</div>
		</div>
	);
}


{/* <div className='flex flex-col'>
<div className='flex items-center justify-between py-3 px-4'>
<span>Specialized Techniques</span>
<CircledArrowIcon />
</div>
<div className='flex flex-col'>

</div>
</div> */}