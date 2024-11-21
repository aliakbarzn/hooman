import React, { useState } from "react";
import FilterButton from "./filterButtonCommponent";

const FilterButtons = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "filter",
    "open now",
    "offer",
    "rating +0.4",
    "sona",
    "shower",
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex mt-3 gap-3">
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          label={filter}
          isSelected={selectedFilters.includes(filter)}
          onClick={() => toggleFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
