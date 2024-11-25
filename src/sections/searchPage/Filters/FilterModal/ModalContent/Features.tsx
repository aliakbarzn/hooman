import React from "react";
import { Filters } from "@/@types/searchPage/type";
import CashPayment from "@/assets/icons/search-page/ic-cash-payment";
import Parking from "@/assets/icons/search-page/ic-parking";
import Shower from "@/assets/icons/search-page/ic-shower";
import Sona from "@/assets/icons/search-page/ic-sona";
import GiftCard from "@/assets/icons/search-page/ic-giftCard";

interface FeaturesProps {
  localFilters: Filters["filterModal"];
  setLocalFilters: React.Dispatch<React.SetStateAction<Filters["filterModal"]>>;
}

const Features: React.FC<FeaturesProps> = ({ localFilters, setLocalFilters }) => {
  const featureOptions = [
    { icon: <CashPayment />, label: "Cash Payment" },
    { icon: <Parking />, label: "Parking" },
    { icon: <Shower />, label: "Shower" },
    { icon: <Sona />, label: "Sona" },
    { icon: <GiftCard />, label: "Gift Card" },
    { icon: null, label: "WC" },
    { icon: null, label: "Massage Bench" },
    { icon: null, label: "Mattress" },
    { icon: null, label: "Card Payment" },
  ];

  const toggleFeature = (label: string) => {
    const updatedFitcher = localFilters?.fitcher?.includes(label)
      ? localFilters.fitcher.filter((f) => f !== label)
      : [...(localFilters?.fitcher || []), label];
    setLocalFilters((prev) => ({ ...prev, fitcher: updatedFitcher }));
  };

  return (
 
      <div className="p-6 grid grid-cols-5">
        {featureOptions.map(({ icon, label }) => (
          <div
            key={label}
            className="flex  mb-5  flex-col items-center cursor-pointer"
            onClick={() => toggleFeature(label)}
          >
           
            <div
              className={`w-16 h-16 text-sm flex items-center justify-center border rounded-lg ${
                localFilters?.fitcher?.includes(label)
                  ? "border-primary  text-primary"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {icon || <span className="w-8 h-8 border rounded-full" />} 
            </div>
          
            <span
              className={`mt-2 text-sm font-medium ${
                localFilters?.fitcher?.includes(label) ? "text-orange-500" : "text-gray-700"
              }`}
            >
              {label.toLowerCase()}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Features;
  