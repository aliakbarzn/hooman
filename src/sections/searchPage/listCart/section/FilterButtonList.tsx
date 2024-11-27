import React, { useState } from "react";
import CheckIcon from "@/assets/icons/search-page/checkIcon";
import { Filters } from "@/@types/searchPage/type";
import { useTranslations } from "next-intl";

interface FilterButtonListProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setIsModalOpen: (isOpen: boolean) => void;
}

const FilterButtonList: React.FC<FilterButtonListProps> = ({
  setFilters,
  setIsModalOpen,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const t = useTranslations("SearchPage.ListCart.filterOptions");

  const filterOptions = [
    { label: t("filter"), key: "filter" },
    { label: t("openNow"), key: "openNow" },
    { label: t("offer"), key: "offer" },
    { label: t("rating4Plus"), key: "rating4Plus" },
    { label: t("Sona"), key: "Sona" },
    { label: t("Shower"), key: "Shower" },
    { label: t("Parking"), key: "Parking" },
  ];

  const toggleFilter = (key: string) => {
    if (key === "filter") {
      setIsModalOpen(true);
      return;
    }

    setSelectedFilters((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );

    setFilters((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex gap-3 my-6">
      {filterOptions.map(({ label, key }) => (
        <button
          key={key}
          onClick={() => toggleFilter(key)}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all ${
            selectedFilters.includes(key)
              ? "bg-[#2C2C2C] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {selectedFilters.includes(key) && <CheckIcon />}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtonList;
