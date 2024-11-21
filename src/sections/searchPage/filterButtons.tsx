import React, { useState } from "react";
import FilterButton from "./filterButtonCommponent";
interface FilterButtonsProps {
  setIsModalOpen: (isOpen: boolean) => void;
}


const FilterButtons = ({ setIsModalOpen }:FilterButtonsProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "filter",
    "open now",
    "offer",
    "rating +0.4",
    "sona",
    "shower",
    "two massagers"
  ];

  const toggleFilter = (filter: string) => {

    if (filter == "filter") {
      setIsModalOpen(true);
    }

    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex  gap-3 my-16">
      {filters.map((item) => (
        <FilterButton
          key={item}
          label={item}
          isSelected={selectedFilters.includes(item)}
          onClick={() => toggleFilter(item)}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
