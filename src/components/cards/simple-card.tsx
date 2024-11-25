import React from "react";
import Image from "next/image";
import imag_1 from "@/assets/images/search-page/i-card.png";
import IcStar from "@/assets/icons/search-page/ic-star";

interface Idata {
  title: string;
  subtitle: string;
  status: string;
  rang: number;
  [x: string]: any;
}

const data: Idata[] = [
  {
    title: "Ada Thai Massage",
    subtitle: "in halfhie",
    status: "open",
    rang: 3.9,
  },
  {
    title: "Ada Thai Massage",
    subtitle: "in halfhie",
    status: "open",
    rang: 3.9,
  },
  {
    title: "Ada Thai Massage",
    subtitle: "in halfhie",
    status: "open",
    rang: 3.9,
  },
  {
    title: "Ada Thai Massage",
    subtitle: "in halfhie",
    status: "open",
    rang: 3.9,
  },
];

export default function SimpleCard() {
  return (
    <div className="flex justify-between gap-6">
      {data.map((item: Idata, index) => (
        <div className="w-80 h-[338px] border-2 rounded-lg">
          <div
            key={index}
            className="p-5 flex flex-col justify-start items-center gap-4"
          >
            <div>
              <Image
                alt="woman"
                src={imag_1}
                width={280}
                height={180}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-end w-full ">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
            </div>
            <div className="w-full flex justify-between">
              <div className="text-orange-500">{item.status}</div>
              <div className="flex justify-center items-center gap-3">
                <span className="text-[#FFE605]">
                  <IcStar />
                </span>
                {item.rang}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
