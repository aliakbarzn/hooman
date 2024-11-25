import React from "react";
import { Filters } from "@/@types/searchPage/type";

interface SortByProps {
  localFilters: Filters["filterModal"];
  setLocalFilters: React.Dispatch<React.SetStateAction<Filters["filterModal"]>>;
}

const SortBy: React.FC<SortByProps> = ({ localFilters, setLocalFilters }) => {
  const options = ["Popularity" , "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"];

  return (
    <div className="p-6 space-y-4">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center cursor-pointer"
          onClick={() =>
            setLocalFilters((prev) => ({
              ...prev,
              sort: option,
            }))
          }
        >
        
          <span
            className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-4 ${
              localFilters?.sort === option
                ? "border-primary bg-white text-primary"
                : "border-gray-300"
            }`}
          >
            {localFilters?.sort === option && (
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
            )}
          </span>
        
          <span
            className="text-xl font-light"
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SortBy;