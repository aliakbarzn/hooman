
import React from 'react'
import MyBookingsThaiCard from './my-bookings-thai-card';

export default function MyBookingsCardsContainer({cardsData}: any) {
  return (



    <div className="flex mt-10 gap-5 self-center md:justify-center lg:justify-between w-full flex-wrap">
      {cardsData.map((CardData: any, index: number) => {
        // Determine the column index (0-based)
        const columnIndex: number = index % 3;

        // Assign background colors based on the column index
        const bgColor =
          columnIndex === 0
            ? 'bg-[#FFF3F1]' // light Pink for column 1
            : columnIndex === 1
            ? 'bg-[#E9FEEB]' // Blue for column 3
            : 'bg-[#DADEE9]' // Green for column 2

        return (
          <div key={index} className="overflow-hidden">
            <MyBookingsThaiCard id={CardData.id} imgSrc={CardData.imgSrc} cardTitle={CardData.cardTitle} bgColor={bgColor} date={CardData.date} />
          </div>
        );
      })}
    </div>
  );
}

