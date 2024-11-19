import Image, { StaticImageData } from "next/image";
import Massage from "@/assets/icons/search-page/ic-massage.svg";
import Star from "@/assets/icons/search-page/ic-star.svg";

interface CardProps {
  image: StaticImageData;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  isOpen: boolean;
  isIconActive: { icon: StaticImageData; isActive: boolean }[];
}

const CardSearch = ({
  image,
  title,
  rating,
  reviewCount,
  description,
  isOpen,
  isIconActive,
}: CardProps) => {
  return (
    <div className="w-80 max-h-[540px] p-6 flex flex-col border-[1px] bg-white border-[#D9D9D9] rounded-lg">
      <Image className="w-full h-40" src={image} alt={"ImageCard"} />
      <h4 className="text-[#1E1E1E] font-bold text-xl mt-6 mb-2">{title}</h4>
      <div className="flex flex-row">
        <h4 className="text-[#1E1E1E] font-bold text-xl">{rating}</h4>
        <Image
          className="ml-2 mr-4"
          src={Star}
          alt={"Star"}
          width={23}
          height={23}
        />
        <h4 className="text-[#757575] font-bold text-xl">({reviewCount})</h4>
      </div>

      <p className="text-[#757575] text-base mt-2">{description}</p>
      <div
        className="flex justify-between my-4"
        style={{ color: isOpen ? "#47C666" : "#F58882" }}
      >
        <h4 className="font-bold text-xl">{isOpen ? "open" : "close"}</h4>
        <Image src={Massage} alt={"Massage"} width={24} height={24} />
      </div>

      <div className="flex justify-around bg-[#FFEDFB]">
        {isIconActive.map((iconData, index) => (
          <Image
            key={index}
            src={iconData.icon}
            alt={`Icon ${index + 1}`}
            style={{ fill: iconData.isActive ? "#47C666" : "#F58882" }}
            width={24}
            height={24}
          />
        ))}
      </div>

      <div className="bg-[#70E38C] rounded-lg text-white p-1 text-sm mt-4">
        This massage parlor is connected to the booking service
      </div>
    </div>
  );
};

export default CardSearch;
