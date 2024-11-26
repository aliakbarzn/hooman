import { CardData, Filters } from "@/@types/searchPage/type";

export const filterData = (cardData: CardData[], filters: Filters): CardData[] => {
  let result = cardData.filter((card) => {
    if (filters.openNow && !card.isOpen) return false;
    if (filters.rating4Plus && card.rating < 4) return false;
    if (filters.Shower && !card.isIconActive.some((icon) => icon.label === "Shower" && icon.isActive)) return false;
    if (filters.Sona && !card.isIconActive.some((icon) => icon.label === "Sona" && icon.isActive)) return false;
    if (filters.offer && !card.discount) return false;

    if (filters?.filterModal?.fitcher) {
      for (const feature of filters.filterModal.fitcher) {
        if (!card.isIconActive.some((icon) => icon.label === feature && icon.isActive)) {
          return false;
        }
      }
    }

    if (filters?.filterModal?.openingHours) {
      if (!card.openingHours.days.includes(filters.filterModal.openingHours)) return false;
    }

    if (filters?.filterModal?.rating) {
      if (card.rating < parseFloat(filters.filterModal.rating)) return false;
    }

    return true;
  });

  if (filters?.filterModal?.sort) {
    switch (filters.filterModal.sort) {
      case "Rating: High to Low":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case "Cost: Low to High":
        result = result.sort((a, b) => a.cost - b.cost);
        break;
      case "Cost: High to Low":
        result = result.sort((a, b) => b.cost - a.cost);
        break;
    }
  }

  return result;
};
