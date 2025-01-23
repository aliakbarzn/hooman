'use client';

import React from "react";
import SidebarModal from "./section/SidebarModal";
import ContentModal from "./section/ContentModal";
import { useTranslations } from "next-intl";

interface BodyModalProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  localFilters: any;
  setLocalFilters: React.Dispatch<React.SetStateAction<any>>;
}

const BodyModal: React.FC<BodyModalProps> = ({ activeStep, setActiveStep, localFilters, setLocalFilters }) => {
  const t = useTranslations("SearchPage.ListCart.FilterModal");

  const steps = [
    t("steps.sortBy"),
    t("steps.features"),
    t("steps.openingHours"),
    t("steps.rating"),
  ];

  return (
    <div className="flex flex-grow h-full">
    <div className="w-1/5 h-full">
    <SidebarModal steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
    <div className="w-4/5">
    <ContentModal 
      activeStep={activeStep}
      localFilters={localFilters}
      setLocalFilters={setLocalFilters}
    />
    </div>


  
  </div>
  )
}
export default BodyModal;