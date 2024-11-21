"use client";
import ImageCard from "@/assets/images/search-page/i-card.png";
import CardSearch from "@/sections/searchPage/cardSearch";
import Ball from "@/assets/icons/search-page/ic-ball";
import Camera from "@/assets/icons/search-page/ic-camera";
import Car from "@/assets/icons/search-page/ic-car";
import Vector from "@/assets/icons/search-page/Vector";
import Frame from "@/assets/icons/search-page/frame";
import Gift from "@/assets/icons/search-page/ic-gift";
import { useState } from "react";
import FilterButtons from "./filterButtons";
import ModalComponent from "./modalComponent";

const ListCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);


  const cardData = [
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      discount: "125$ off",
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: false,
      isIconActive: [
        { icon: <Gift />, isActive: false },
        { icon: <Vector />, isActive: true },
        { icon: <Frame />, isActive: true },
        { icon: <Ball />, isActive: false },
        { icon: <Car />, isActive: true },
        { icon: <Camera />, isActive: false },
      ],
    },
  ];
  const itemsPerPage = 6;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const currentItems = cardData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col mb-8 mx-6">

      <FilterButtons setIsModalOpen={setIsModalOpen}/>

      <span className="text-[#1E1E1E] font-bold text-xl mt-16">massage parlors in Tyresö</span>

      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-row justify-between   mt-8 flex-wrap">
        {currentItems.map((card, index) => (
          <CardSearch key={index} {...card} />
        ))}
      </div>

      {/* ناوبری صفحات */}
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 mx-2 bg-gray-300 rounded"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <span className="px-4 py-2">{`${currentPage + 1} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 mx-2 bg-gray-300 rounded"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ListCart;