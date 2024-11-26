import Image from "next/image";
import React from "react";
import baner1 from "@/assets/images/search-page/banner1.png";
import baner2 from "@/assets/images/search-page/banner2.png";
import baner3 from "@/assets/images/search-page/banner3.png";

export default function Header() {
  return (
    <div className="flex p-16 bg-[#EDFFF1] justify-between">
      <Image className="ml-2 mr-4 w-[30%] max-w-96  h-36" src={baner1} alt={"baner1"} />

      <Image className="ml-2 mr-4 w-[30%] max-w-96  h-36" src={baner2} alt={"baner2"} />

      <Image className="ml-2 mr-4 w-[30%] max-w-96 h-36" src={baner3} alt={"baner3"} />
    </div>
  );
}
