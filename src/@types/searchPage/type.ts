import { StaticImageData } from "next/image";

export interface Filters {
    Sona: boolean;
    openNow?: boolean;
    rating4Plus?: boolean;
    Shower?: boolean;
    Parking?: boolean;
    offer?: boolean;
    filterModal?: {
      fitcher?: string[];
      rating?: string;
      openingHours?: string;
      sort?: string;
    };
  }
  
  export interface FilterModal {
    fitcher?: string[];
    rating?: string;
    openingHours?: string;
    sort?: string;
  }
  
  export interface CardData {
    image: StaticImageData;
    title: string;
    rating: number;
    reviewCount: number;
    description: string;
    isOpen: boolean;
    cost: number;
    discount?: string;
    isIconActive: { icon: JSX.Element; isActive: boolean; label: string }[];
    openingHours: { days: string[]; hours: { open: string; close: string } };
  }