import React, { useState } from "react";
import { Filters } from "@/@types/searchPage/type";
import IcClose from "@/assets/icons/search-page/ic-close";
import SidebarModal from "./SidebarModal";
import ContentModal from "./ContentModal";
import FooterModal from "./FooterModal";
import { useTranslations } from "next-intl";

interface ModalComponentProps {
  applyFilters: (filters: Filters) => void;
  isOpen: boolean;
  onClose: () => void;
}

const filterModal: React.FC<ModalComponentProps> = ({ applyFilters, isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [localFilters, setLocalFilters] = useState<Filters["filterModal"]>({
    fitcher: [],
    rating: undefined,
    openingHours: undefined,
    sort: undefined,
  });

  const t = useTranslations("SearchPage.ListCart.FilterModal");

  const steps = [
    t("steps.sortBy"),
    t("steps.features"),
    t("steps.openingHours"),
    t("steps.rating"),
  ];

  const handleClear = () => {
    setLocalFilters({ fitcher: [], rating: undefined, openingHours: undefined, sort: undefined });
    setActiveStep(0);
    onClose();
  };

  const handleApply = () => {
    if (!localFilters) return;

    const filledFilters = Object.fromEntries(
      Object.entries(localFilters).filter(([_, value]) => value !== undefined && value !== "")
    );

    applyFilters({
      filterModal: filledFilters as Filters["filterModal"],
      Sona: false
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[80%] max-w-[1072px] h-[85%] rounded-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 h-16 bg-white flex justify-between rounded-t-lg items-center border-b border-[#757575]">
          <span className="text-2xl">{t("title")}</span>
          <button type="button" className="w-14 h-14" onClick={onClose}>
            <IcClose />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-grow h-full">
          <div className="w-1/5 h-full">
          <SidebarModal steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>
          <div className="w-4/5">
          <ContentModal 
            activeStep={activeStep}
            localFilters={localFilters}
            setLocalFilters={setLocalFilters}
          /></div>

     
        
        </div>

        {/* Footer */}
        <FooterModal handleClear={handleClear} handleApply={handleApply} />
      </div>
    </div>
  );
};

export default filterModal;
