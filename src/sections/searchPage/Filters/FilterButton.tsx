import React from "react";
import CheckIcon from "@/assets/icons/search-page/checkIcon";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${
        isSelected ? "bg-[#2C2C2C] text-white" : "bg-gray-200 text-gray-600"
      }`}
    >
      {isSelected && <CheckIcon />}
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
