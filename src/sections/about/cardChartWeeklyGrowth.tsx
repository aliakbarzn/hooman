import React, { useMemo, useCallback } from "react";
import Image from "next/image";
import chartImage from "@/assets/images/about/Vector 585.svg";

const CardChartWeeklyGrowth = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-[213px] min-h-[152px] flex flex-col items-center gap-4">
      <span className="font-bold text-lg text-left w-full">Weekly Growth</span>

      <Image
        src={chartImage}
        alt={"chartImage"}
        className="w-full h-full object-cover rounded-full"
        width={144}
        height={53}
      />

      <div className="flex flex-row w-full h-[32px] items-center justify-around ">
        <div className="flex flex-row">
          <div className="rounded-full bg-red-700 w-3 h-3 mr-1 items-center" />
          <span className="text-sm">12345</span>
        </div>

        <div className="flex flex-row">
          <div className="rounded-full bg-blue-700 w-3 h-3 mr-1 items-center" />
          <span className="text-sm">12345</span>
        </div>
      </div>
    </div>
  );
};

export default CardChartWeeklyGrowth;
