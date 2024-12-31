'use client';

import CheckIcon from '@/assets/icons/search-page/checkIcon';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface SalonCardsData {
  id: number;
  type?: 'timed' | 'pink' | 'free';
  image: StaticImageData;
  title: string;
  rating: number;
  hasHeartTag: boolean;
  isSponsored: boolean;
  sponsoredColor: string;
  borderColor: string;
  reviewCount: number;
  description: string;
  isOpen: boolean;
  discount: string;
  features: {
    [key: string]: boolean;
  };
}

const Filters = ({
  salonCardsData,
  setFinalFilteredData,
}: {
  salonCardsData: SalonCardsData[];
  setFinalFilteredData: React.Dispatch<React.SetStateAction<SalonCardsData[]>>;
}) => {

  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
    'open now': false,
    'offer': false,
    'shower': false,
    'parking': false,
    'sauna': false,
    'rating +4': false,
  });


  const handleFilterChange = (filterName: string) => {
    setActiveFilters(prevState => {
      const updatedFilters = { ...prevState, [filterName]: !prevState[filterName] };

      const filteredData = salonCardsData.filter(salon => {
        const conditions: Record<string, boolean> = {
          'open now': salon.isOpen,
          'offer': salon.discount !== '',
          'shower': salon.features.shower,
          'parking': salon.features.parking,
          'sauna': salon.features.sauna,
          'rating +4': salon.rating >= 4,
        };

        return Object.entries(updatedFilters).every(
          ([key, isActive]) => !isActive || conditions[key]
        );
      });

      setFinalFilteredData(filteredData);

      return updatedFilters;
    });
  };


  return (
    <div className="flex gap-2">
      {Object.entries(activeFilters).map(([filterName, isActive]) => (
        <button
          key={filterName}
          onClick={() => handleFilterChange(filterName)}
          className={`transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-lg ${isActive ? 'bg-[#2C2C2C] text-whiteC-light' : 'bg-whiteC-light text-blackC-light'
            }`}
        >
          <span className={`transition-all duration-200 text-whiteC-light ${isActive ? 'h-4 w-4' : 'w-0 h-0'}`}>
            <CheckIcon />
          </span>
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default Filters;
