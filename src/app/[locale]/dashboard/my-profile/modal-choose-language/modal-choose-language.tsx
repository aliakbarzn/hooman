'use client'

import { CloseIcon } from '@/assets/icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ModalChooseLanguage = () => {

  const [isModalOpen, setIsModalOpen] = useState(true)
  const router = useRouter()

  const handleChangeLanguage = (lang: string) => {
    router.replace(`/${lang}/dashboard/my-profile`)
    setIsModalOpen(false)
  }

  return (
    <div className={`fixed inset-0 z-10 bg-opacity-30 bg-black items-center justify-center ${isModalOpen ? 'flex' : 'hidden'}`}>
      <div className='rounded-lg shadow-md flex flex-col p-5 bg-white'>
        <div className="flex justify-end"><button onClick={() => setIsModalOpen(false)}><CloseIcon /></button></div>
        {/* content */}
        <div className="flex flex-col gap-3 mx-4">
          <h3 className="text-2xl font-semibold text-blackC">choose your language</h3>
          <p className="text-blackC">Which language do you prefer to continue?</p>
          <div className="flex items-center gap-3 mb-6 mt-3">
            <button onClick={() => handleChangeLanguage('th')} className='w-[195px] py-2 rounded-lg bg-greenC-light'>Thai</button>
            <button onClick={() => handleChangeLanguage('se')} className='w-[195px] py-2 rounded-lg bg-greenC-light'>Swedish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalChooseLanguage