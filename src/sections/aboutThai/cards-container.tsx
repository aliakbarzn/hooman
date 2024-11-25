import React from 'react';
import ThaiCard from './thai-card';

export default function CardsContainer({ cardsData }: { cardsData: any }) {
  return (
    <div className="flex py-20 px-36 gap-28 justify-start w-full flex-wrap">
      {cardsData.map((cd: any, index: number) => {
        // Determine the column index (0-based)
        const columnIndex: number = index % 3;

        // Assign background colors based on the column index
        const bgColor =
          columnIndex === 0
            ? 'bg-[#FFF3F1]' // light Pink for column 1
            : columnIndex === 1
            ? 'bg-[#E9FEEB]' // Blue for column 3
            : 'bg-[#DADEE9]' // Green for column 2

        // assign button bgColors based on the column index
        const buttonBgColor = 
        columnIndex === 0
        ? 'bg-[#F58882]'
        : 'bg-[#2C2C2C]'

        return (
          <div key={index} className="overflow-hidden">
            <ThaiCard imgSrc={cd.imgSrc} cardTitle={cd.cardTitle} bgColor={bgColor} buttonBgColor={buttonBgColor} />
          </div>
        );
      })}
    </div>
  );
}
