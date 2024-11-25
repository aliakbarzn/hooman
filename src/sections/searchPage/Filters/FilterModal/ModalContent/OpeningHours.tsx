import React from "react";
import { Filters } from "@/@types/searchPage/type";

interface OpeningHoursProps {
  localFilters: Filters["filterModal"];
  setLocalFilters: React.Dispatch<React.SetStateAction<Filters["filterModal"]>>;
}

const OpeningHours: React.FC<OpeningHoursProps> = ({ localFilters, setLocalFilters }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="p-6 space-y-4">
      {days.map((day) => (
        <label
          key={day}
          className="flex items-center cursor-pointer text-blackC "
        >
          <input
            type="radio"
            value={day}
            checked={localFilters?.openingHours === day}
            onChange={() => setLocalFilters((prev) => ({ ...prev, openingHours: day }))}
            className="hidden"
          />
      
          <span
            className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-4 ${
              localFilters?.openingHours === day
                ? "border-primary bg-white text-primary"
                : "border-gray-300"
            }`}
          >
            {localFilters?.openingHours === day && (
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
            )}
          </span>
          <span className="ml-2 text-xl font-light">{day}</span>
        </label>
      ))}
    </div>
  );
};

export default OpeningHours;
