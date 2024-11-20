import ImageCard from "@/assets/images/search-page/i-card.png";
import CardSearch from "@/sections/searchPage/cardSearch";
import Ball from "@/assets/icons/search-page/ic-ball.svg";
import Camera from "@/assets/icons/search-page/ic-camera.svg";
import Car from "@/assets/icons/search-page/ic-car.svg";
import Vector from "@/assets/icons/search-page/Vector.svg";
import Frame from "@/assets/icons/search-page/frame.svg";
import Gift from "@/assets/icons/search-page/ic-gift.svg";

const SearchPage = () => {
  const cardData = [
    {
      image: ImageCard,
      title: "Luleå Thaimassage",
      rating: 3.9,
      reviewCount: 234,
      description:
        "Best Thai massage salon in Tyresö. Welcome to Kanlaya Thai Massage salon. Call to make an appointment or...",
      isOpen: true,
      isIconActive: [
        { icon: Ball, isActive: false },
        { icon: Camera, isActive: false },
        { icon: Car, isActive: true },
        { icon: Vector, isActive: true },
        { icon: Frame, isActive: true },
        { icon: Gift, isActive: false },
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
        { icon: Ball, isActive: false },
        { icon: Camera, isActive: false },
        { icon: Car, isActive: true },
        { icon: Vector, isActive: true },
        { icon: Frame, isActive: true },
        { icon: Gift, isActive: false },
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
        { icon: Ball, isActive: false },
        { icon: Camera, isActive: false },
        { icon: Car, isActive: true },
        { icon: Vector, isActive: true },
        { icon: Frame, isActive: true },
        { icon: Gift, isActive: false },
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
        { icon: Ball, isActive: false },
        { icon: Camera, isActive: false },
        { icon: Car, isActive: true },
        { icon: Vector, isActive: true },
        { icon: Frame, isActive: true },
        { icon: Gift, isActive: false },
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
        { icon: Ball, isActive: false },
        { icon: Camera, isActive: false },
        { icon: Car, isActive: true },
        { icon: Vector, isActive: true },
        { icon: Frame, isActive: true },
        { icon: Gift, isActive: false },
      ],
    },
  ];

  return (
    <div className="flex flex-row justify-between px-24 mt-8">
      {cardData.map((card, index) => (
        <CardSearch key={index} {...card} />
      ))}
    </div>
  );
};

export default SearchPage;
