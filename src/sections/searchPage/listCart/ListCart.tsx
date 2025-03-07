'use client';

"use client";
import ImageCard from "@/assets/images/search-page/i-card.png";
import CardSearch from "@/components/cards/cardSearch";
import Swish from "@/assets/icons/search-page/ic-swish";
import CashPayment from "@/assets/icons/search-page/ic-cash-payment";
import Parking from "@/assets/icons/search-page/ic-parking";
import Shower from "@/assets/icons/search-page/ic-shower";
import Sona from "@/assets/icons/search-page/ic-sona";
import GiftCard from "@/assets/icons/search-page/ic-giftCard";
import { useState, useMemo, useCallback } from "react";
import FilterButtonList from "@/sections/searchPage/listCart/section/FilterButtonList";
import FilterModal from "./section/modal/FilterModal";
import { CardData, Filters } from "@/@types/searchPage/type";
import { FilterConditions } from "./filterConditions/FilterConditions";
import { useTranslations } from "next-intl";
import Pagination from "@/components/pagination/Pagination";


const ListCart: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    Sona: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const t = useTranslations("SearchPage.ListCart");
  const cardData: CardData[] = [
    {
      image: ImageCard,
      title: "Elite Thai Massage",
      rating: 4.5,
      reviewCount: 120,
      description: "Relax and rejuvenate with our professional Thai massage.",
      isOpen: true,
      discount: "20% off",
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: true, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: false, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: false, label: "Parking" },
      ],
      cost: 60,
      openingHours: {
        days: ["Monday", "Tuesday", "Wednesday", "Friday"],
        hours: { open: "09:00", close: "17:00" },
      },
    },
    {
      image: ImageCard,
      title: "Stockholm Spa Center",
      rating: 3.8,
      reviewCount: 80,
      description: "Experience tranquility with our premium spa services.",
      isOpen: false,
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: false, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 80,
      openingHours: {
        days: ["Saturday", "Sunday"],
        hours: { open: "10:00", close: "20:00" },
      },
    },
    {
      image: ImageCard,
      title: "Luxury Swedish Massage",
      rating: 5.0,
      reviewCount: 200,
      description: "Indulge in a luxurious Swedish massage session.",
      isOpen: true,
      discount: "50% off",
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: true, label: "Gift Card" },
        { icon: <Shower />, isActive: false, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: false, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 100,
      openingHours: {
        days: ["Monday", "Thursday", "Friday"],
        hours: { open: "08:00", close: "18:00" },
      },
    },
    {
      image: ImageCard,
      title: "Urban Massage Studio",
      rating: 3.2,
      reviewCount: 45,
      description: "Affordable and relaxing urban massage services.",
      isOpen: false,
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: false, label: "Gift Card" },
        { icon: <Shower />, isActive: false, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: false, label: "Swish" },
        { icon: <Parking />, isActive: false, label: "Parking" },
      ],
      cost: 40,
      openingHours: {
        days: ["Wednesday", "Friday", "Saturday"],
        hours: { open: "12:00", close: "21:00" },
      },
    },
    {
      image: ImageCard,
      title: "Nature's Touch Therapy",
      rating: 5.0,
      reviewCount: 300,
      description: "Reconnect with nature through our holistic therapies.",
      isOpen: true,
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: true, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 120,
      openingHours: {
        days: ["Tuesday", "Thursday", "Saturday"],
        hours: { open: "09:00", close: "19:00" },
      },
    },
    {
      image: ImageCard,
      title: "Serenity Spa",
      rating: 3.5,
      reviewCount: 100,
      description: "Discover inner peace with our customized spa packages.",
      isOpen: false,
      discount: "10% off",
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: false, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: false, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 70,
      openingHours: {
        days: ["Monday", "Wednesday", "Friday"],
        hours: { open: "11:00", close: "20:00" },
      },
    },
    {
      image: ImageCard,
      title: "Zen Massage Lounge",
      rating: 4.0,
      reviewCount: 150,
      description: "Unwind with our specialized Zen massage techniques.",
      isOpen: true,
      discount: "15% off",
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: false, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: false, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 90,
      openingHours: {
        days: ["Tuesday", "Thursday", "Sunday"],
        hours: { open: "10:00", close: "22:00" },
      },
    },
    {
      image: ImageCard,
      title: "Haven Spa Retreat",
      rating: 2.5,
      reviewCount: 30,
      description: "Escape the chaos with our serene spa treatments.",
      isOpen: false,
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: true, label: "Gift Card" },
        { icon: <Shower />, isActive: false, label: "Shower" },
        { icon: <Sona />, isActive: false, label: "Sona" },
        { icon: <Swish />, isActive: false, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 30,
      openingHours: {
        days: ["Saturday", "Sunday"],
        hours: { open: "14:00", close: "18:00" },
      },
    },
    {
      image: ImageCard,
      title: "Blissful Spa",
      rating: 3.9,
      reviewCount: 70,
      description: "Enjoy a blissful massage session tailored just for you.",
      isOpen: true,
      discount: "25% off",
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: false, label: "Gift Card" },
        { icon: <Shower />, isActive: true, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 50,
      openingHours: {
        days: ["Monday", "Wednesday", "Friday"],
        hours: { open: "10:00", close: "19:00" },
      },
    },
    {
      image: ImageCard,
      title: "Tranquility Spa",
      rating: 4.2,
      reviewCount: 90,
      description: "Achieve complete relaxation with our special packages.",
      isOpen: false,
      isIconActive: [
        { icon: <CashPayment />, isActive: true, label: "Cash Payment" },
        { icon: <GiftCard />, isActive: true, label: "Gift Card" },
        { icon: <Shower />, isActive: false, label: "Shower" },
        { icon: <Sona />, isActive: true, label: "Sona" },
        { icon: <Swish />, isActive: true, label: "Swish" },
        { icon: <Parking />, isActive: true, label: "Parking" },
      ],
      cost: 60,
      openingHours: {
        days: ["Thursday", "Friday"],
        hours: { open: "12:00", close: "21:00" },
      },
    },
  ];

  const applyFilters = (newFilters: Filters) => {
    const filledFilters = Object.fromEntries(
      Object.entries(newFilters.filterModal || {}).filter(([_, value]) => value !== undefined && value !== "")
    );

    if (Object.keys(filledFilters).length === 0) {
      alert("Please select at least one filter before applying.");
      return;
    }

    setFilters((prev) => ({
      ...prev,
      filterModal: { ...prev.filterModal, ...filledFilters },
    }));
  };

  const filteredData = useMemo(() => FilterConditions(cardData, filters), [cardData, filters]);

  const itemsPerPage = 6;
  const currentItems = useMemo(() => {
    return filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  }, [filteredData, currentPage]);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <section className="flex flex-col mb-8 mx-6">
      <FilterButtonList setFilters={setFilters} setIsModalOpen={setIsModalOpen} />

      <span className="text-[#1E1E1E] font-bold text-xl mt-16">{t("titleCard")}</span>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        applyFilters={applyFilters}

      />

      <div className="flex flex-row justify-between mt-8 flex-wrap">
        {currentItems.map((card, index) => (
          <CardSearch key={index} {...card} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />

    </section>
  );
};

export default ListCart;