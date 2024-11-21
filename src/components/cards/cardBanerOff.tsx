import Image, { StaticImageData } from "next/image";

interface CardBanerOffProps {
  productPhoto: StaticImageData;
  originalPrice: string;
  discountedPrice: number;
  discountPercentage: number;
  productTitle: string;
}

const CardBanerOff = ({
  discountPercentage,
  originalPrice,
  discountedPrice,
  productPhoto,
  productTitle,
}: CardBanerOffProps) => {
  return (
    <div className="bg-white px-3 pt-2 pb-6 max-w-72 sm:max-w-44 lg:max-w-60 md:max-w-52 h-full flex flex-col relative">
      <Image
        src={productPhoto}
        alt={"productPhoto"}
        className="w-full h-56 lg:max-h-40 object-cover"
      />

      <div
        className="absolute top-[50%]  right-[10%] flex flex-col items-center justify-center w-14 h-14 bg-[#F58882] text-white rounded-full"
      >
        <span className="text-sm font-bold">{discountPercentage}%</span>
        <span className="text-xs line-through">off</span>
      </div>

      <h4 className="mt-6 font-bold text-lg">{productTitle}</h4>

      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold text-[#47C666]">
          ${discountedPrice}
        </span>
        <span className="text-base line-through text-[#757575]">
          ${originalPrice}
        </span>
      </div>
    </div>
  );
};

export default CardBanerOff;
