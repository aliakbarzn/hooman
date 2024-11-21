import Image, { StaticImageData } from "next/image";
import Massage from "@/assets/icons/search-page/ic-massage";
import Star from "@/assets/icons/search-page/ic-star";
import { ReactNode } from "react";

interface CardProps {
  image: StaticImageData;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  isOpen: boolean;
  discount?: string;
  isIconActive: { icon: ReactNode; isActive: boolean }[];
}

const CardSearch = ({
  image,
  title,
  rating,
  reviewCount,
  description,
  isOpen,
  isIconActive,
  discount,
}: CardProps) => {
  return (
    <div className="w-80 max-h-[540px] p-6 mx-3 flex flex-col border-[1px] bg-white border-[#D9D9D9] rounded-lg mt-12">
      <div className="relative w-full h-40">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt="ImageCard"
        />
        {/* Discount label */}
        {discount && (
          <div className="absolute bottom-0 mb-3 left-0 w-[70%] h-[33px] bg-gradient-to-r from-[#F58882] to-transparent  text-white flex items-center justify-start rounded-br-lg text-sm font-bold px-3">
            {discount}
          </div>
        )}
      </div>
      <h4 className="text-[#1E1E1E] font-bold text-xl mt-6 mb-2">{title}</h4>
      <div className="flex flex-row">
        <h4 className="text-[#1E1E1E] font-bold text-xl">{rating}</h4>

        <span className="ml-2 mr-4 text-[#FFE605]">
          <Star />
        </span>
        <h4 className="text-[#757575] font-bold text-xl">({reviewCount})</h4>
      </div>

      <p className="text-[#757575] text-base mt-2">{description}</p>
      <div
        className="flex justify-between my-4"
        style={{ color: isOpen ? "#47C666" : "#F58882" }}
      >
        <h4 className="font-bold text-xl">{isOpen ? "open" : "close"}</h4>

        <span className="ml-2 mr-4 w-6 h-6">
          <Massage />
        </span>
      </div>

      <div className="flex justify-around bg-[#FFEDFB]">
        {isIconActive.map((iconData, index) => (
          <span
            key={index}
            className={`w-6 h-6 flex items-center justify-center rounded-full ${
              iconData.isActive ? "text-[#757575]" : "text-[#F58882]"
            }`}
          >
            {iconData.icon}
          </span>
        ))}
      </div>

      <div className="bg-[#70E38C] rounded-lg text-white p-1 text-sm mt-4">
        This massage parlor is connected to the booking service
      </div>
    </div>
  );
};

export default CardSearch;
