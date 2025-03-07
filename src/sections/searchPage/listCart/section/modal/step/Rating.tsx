import React from "react";
import { Filters } from "@/@types/searchPage/type";

interface RatingProps {
  localFilters: Filters["filterModal"];
  setLocalFilters: React.Dispatch<React.SetStateAction<Filters["filterModal"]>>;
}

const Rating: React.FC<RatingProps> = ({ localFilters, setLocalFilters }) => {
  const steps = ["any", 3.5, 4, 4.5, 5]; 
  const selectedRating = localFilters?.rating ? parseFloat(localFilters.rating) : 0;

  const handleClick = (value: string | number) => {
    setLocalFilters((prev) => ({
      ...prev,
      rating: value === "any" ? "0" : value.toString(), 
    }));
  };

  const getPercentage = (value: number | string): number => {
    if (value === "any" || value === 0 || value === "0") return 0;
    const stepIndex = steps.findIndex((step) => step === value);
    return stepIndex === -1 ? 0 : (stepIndex / (steps.length - 1)) * 100;
  };

  const handleLineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left; 
    const percentage = clickX / width;

    
    const closestStep = steps.reduce((prev, curr) => {
      const prevDiff = Math.abs(getPercentage(prev) - percentage * 100);
      const currDiff = Math.abs(getPercentage(curr) - percentage * 100);
      return currDiff < prevDiff ? curr : prev;
    });

    handleClick(closestStep); 
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl font-bold mb-2">Rating</h2>
      <span className="text-lg font-bold">{selectedRating || "any"}+</span>
      <div className="relative mt-28 w-full" onClick={handleLineClick}>
        <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>

        <div
          className="absolute h-1 bg-red-500 rounded-full"
          style={{
            width: `${getPercentage(selectedRating)}%`,
          }}
        ></div>

        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); 
                handleClick(step);
              }}
            >
              <div
                className={`w-4 h-4 m-[-5px] rounded-full border-2 ${
                  typeof step === "number" && step <= selectedRating
                    ? "bg-red-500 border-red-500"
                    : "bg-white border-gray-300"
                }`}
              ></div>
              <span
                className={`mt-1 text-sm ${
                  typeof step === "number" && step <= selectedRating
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
