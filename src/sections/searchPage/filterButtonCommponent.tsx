import CheckIcon from "@/assets/icons/search-page/checkIcon";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, isSelected, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-3 py-2 mx-4 rounded-lg transition-all ${
        isSelected
          ? "bg-[#2C2C2C] text-[#F5F5F5]"
          : "bg-[#F5F5F5] text-[#757575]"
      }`}
    >
      {isSelected && <CheckIcon />}
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
