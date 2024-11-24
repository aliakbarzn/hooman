import React, { useState } from "react";
import FilterButton from "./filterButtonCommponent";

interface Filters {
  [key: string]: boolean;
}
interface FilterButtonsProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setIsModalOpen: (isOpen: boolean) => void;
}


const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilters,setIsModalOpen }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { label: "filter", key: "filter" },
    { label: "Open Now", key: "openNow" },
    { label: "Offer", key: "offer" },
    { label: "Rating 4+", key: "rating4Plus" },
    { label: "Sona", key: "Sona" },
    { label: "Shower", key: "Shower" },
    { label: "two massagers", key: "twoMassagers" },
  ];

  const toggleFilter = (filterKey: string) => {

    if (filterKey == "filter") {
      setIsModalOpen(true);
    }

    setSelectedFilters((prev) =>
      prev.includes(filterKey)
        ? prev.filter((item) => item !== filterKey)
        : [...prev, filterKey]
    );

    setFilters((prev: any) => ({
      ...prev,
      [filterKey]: !prev[filterKey], 
    }));
  };

  return (
    <div className="flex gap-3 my-16">
      {filters.map((item) => (
        <FilterButton
          key={item.key}
          label={item.label}
          isSelected={selectedFilters.includes(item.key)}
          onClick={() => toggleFilter(item.key)}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
