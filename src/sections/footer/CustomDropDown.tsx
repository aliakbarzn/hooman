'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@/assets/icons'; 
import { SwedenIcon, GermanyIcon, BritainIcon, ThailandIcon } from '@/assets/icons'; 

interface Option {
  value: string;
  country: React.ReactNode;
  lang: string;
}

const options: Option[] = [
  { value: 'Sweden', country: <SwedenIcon />, lang: 'se' },
  { value: 'Germany', country: <GermanyIcon />, lang: 'de' },
  { value: 'Britain', country: <BritainIcon />, lang: 'en' },
  { value: 'Thailand', country: <ThailandIcon />, lang: 'th' },
];

const CustomDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const router = useRouter();

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    router.replace(`/${option.lang}`);
  };

  return (
    <div className="relative min-w-[200px]">
      <div
        className="flex items-center justify-between h-[42px] rounded-lg border py-3 px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-x-2">
          {selectedOption.country}
          <span>{selectedOption.value}</span>
        </div>
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 w-screen h-screen z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute z-20 bg-white border rounded-lg shadow-lg w-full mt-1">
            {options.map((option) => (
              <div
                key={option.value}
                className="pl-4 flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option.country}
                <span>{option.value}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomDropDown;
