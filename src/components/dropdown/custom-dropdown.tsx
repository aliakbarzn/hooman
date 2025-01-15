'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@/assets/icons';


const CustomDropDown2 = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[200px] w-full bg-white">
      <div
        className="flex items-center justify-between rounded-full border border-primary py-4 px-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="flex items-center gap-2 text-[15px] font-light">{selectedOption}</h6>
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 w-screen h-screen z-20 bg-black bg-opacity-30" onClick={() => setIsOpen(false)}></div>
          <div className={`absolute z-20 bg-white border-2 border-primary rounded-3xl shadow-lg w-full mt-1 transition-all duration-500 ${isOpen ? 'h-auto' : 'h-0'}`}>
            {options.map((option) => (
              <div
                key={option}
                className="px-6 mx-2 py-4 flex items-center gap-3 p-2 hover:text-primary cursor-pointer border-b border-grayC last:border-none text-[15px] font-light"
                onClick={() => handleOptionClick(option)}
              >
                <h6>{option}</h6>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomDropDown2;
