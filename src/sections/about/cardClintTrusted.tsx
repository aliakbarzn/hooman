import React, { useMemo } from "react";
import Image, { StaticImageData } from "next/image";

interface CardClintTrustedProps {
  images: StaticImageData[];
  starCount: number;
}

const CardClintTrusted = ({ images, starCount }: CardClintTrustedProps) => {
  const selectedImages = useMemo(() => images.slice(0, 5), [images]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-[217px] h-[88px] flex flex-col items-center gap-4">
      <span className="font-bold text-lg text-left w-full">Clint Trusted</span>

      <div className="flex flex-row w-full h-[32px] items-center justify-between">
        <div className="flex -space-x-3 w-full">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="w-[32px] h-[32px] border-2 border-white rounded-full overflow-hidden"
              style={{
                transform: `translateX(${index * -0.5}px)`,
              }}
            >
              <Image
                src={image}
                alt={`user-${index}`}
                className="w-full h-full object-cover rounded-full"
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <span className="text-orange-500 text-xl">★</span>
          <span>{starCount.toLocaleString()}+ </span>
        </div>
      </div>
    </div>
  );
};

export default CardClintTrusted;
