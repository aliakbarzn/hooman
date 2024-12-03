'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/assets/icons';

const options = ['Special', 'Pink', 'Campaign']

const AdDropdown: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex items-center justify-between rounded-lg border py-2 px-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <div>
          {/* the screen bg to close the dropdown when clicked */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 " onClick={() => setIsOpen(false)}></div> 
          <div className="px-3 absolute z-20 border rounded-lg shadow-lg w-[748px] mt-2 overflow-hidden bg-white">
            {options.map((option) => (
              <div key={option} className="px-2 py-2 hover:text-primary cursor-pointer z-30 bg-white border-b bo" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdDropdown;
