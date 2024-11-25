import React from 'react'
import Image, { StaticImageData } from 'next/image'
// import womanImage2 from '@/assets/images/about-thai/woman-2.png'


export default function ContentContainer({ data }: { data: any }) {
  return (
    <div className='py-20 border-t'>
      {data.map((item: any, index: any) => (
        <div key={index} className='flex flex-col gap-y-16  px-48 items-center'>
          {/* container top --------------------------------------------------------------------------- */}
          <div className='flex gap-x-16'>
            {/* container-top-left -------------------------------------------------------------------- */}
            <div className='flex flex-col gap-y-6 max-w-[403px] min-w-[300px]'>
              {/* title */}
              <div className='gap-y-2 flex flex-col'>
                <h2>{item.title}</h2>
                <p className='text-[#757575]'>{item.subtitle}</p>
              </div>
              {/* content */}
              <p className='text-base font-normal text-[#1E1E1E]'>{item.text}</p>
            </div>
            {/* container-top-right -------------------------------------------------------------------- */}
            <div className='p-5 rounded-lg border border-[#D9D9D9] w-[325px] flex flex-col gap-y-5'>
              <h4>Advantages</h4>
              {item.advantages.map((item2:any, index:any) => (
                <div key={index}>
                  <p>{item2.first}</p>
                  <p>{item2.second}</p>
                  <p>{item2.third}</p>
                </div>
              ))}
            </div>
          </div>
          {/* container bottom ------------------------------------------------------------------------- */}
          <div className=''>
            <Image
              src={item.src}
              alt='Image Description'
              width={821}
              height={272}
              unoptimized
              className='object-cover overflow-hidden rounded-lg w-[821px] h-[272px]'
            />
          </div>
        </div>
      ))}
    </div>
  )
}
