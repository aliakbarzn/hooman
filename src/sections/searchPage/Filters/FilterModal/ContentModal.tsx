import React from "react";
import { Filters } from "@/@types/searchPage/type";
import SortBy from "./ModalContent/SortBy";
import Features from "./ModalContent/Features";
import OpeningHours from "./ModalContent/OpeningHours";
import Rating from "./ModalContent/Rating";

interface ContentProps {
  activeStep: number;
  localFilters: Filters["filterModal"];
  setLocalFilters: React.Dispatch<React.SetStateAction<Filters["filterModal"]>>;
}

const ContentModal: React.FC<ContentProps> = ({ activeStep, localFilters, setLocalFilters }) => {
  
  switch (activeStep) {
    case 0:
      return <SortBy localFilters={localFilters} setLocalFilters={setLocalFilters} />;
    case 1:
      return <Features localFilters={localFilters} setLocalFilters={setLocalFilters} />;
    case 2:
      return <OpeningHours localFilters={localFilters} setLocalFilters={setLocalFilters} />;
    case 3:
      return <Rating localFilters={localFilters} setLocalFilters={setLocalFilters} />;
    default:
      return null;
  }
};

export default ContentModal;
