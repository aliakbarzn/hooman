'use client';

import { CloseIcon } from '@/assets/icons';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ModalChooseLanguage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Start with closed modal
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for the 'modalLanguage' flag
    const hasBeenShown = localStorage.getItem('modalLanguage') === 'true';

    if (!hasBeenShown) {
      setIsModalOpen(true); // Show the modal if it hasn't been shown
      localStorage.setItem('modalLanguage', 'true'); // Set the flag to true
    }
  }, []);

  const handleChangeLanguage = (lang: string) => {
    router.replace(`/${lang}/dashboard/my-profile`); // Navigate to the selected language route
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div
      className={`fixed inset-0 z-10 bg-opacity-30 bg-black items-center justify-center ${
        isModalOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="rounded-lg shadow-md flex flex-col p-5 bg-white">
        <div className="flex justify-end">
          <button onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        {/* Modal Content */}
        <div className="flex flex-col gap-3 mx-4">
          <h3 className="text-2xl font-semibold text-blackC">Choose your language</h3>
          <p className="text-blackC">Which language do you prefer to continue?</p>
          <div className="flex items-center gap-3 mb-6 mt-3">
            <button
              onClick={() => handleChangeLanguage('th')}
              className="w-[195px] py-2 rounded-lg bg-greenC-light"
            >
              Thai
            </button>
            <button
              onClick={() => handleChangeLanguage('se')}
              className="w-[195px] py-2 rounded-lg bg-greenC-light"
            >
              Swedish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChooseLanguage;
