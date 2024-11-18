import React from "react";
import Menu from "./menu";
import Image from "next/image";
import woman from "@/assets/images/header/woman.svg";
import card1 from "@/assets/images/header/card1.svg";
import card2 from "@/assets/images/header/card2.svg";


export default function Header() {
  return (
    <div className="relative w-full h-full">
    <div className="mt-10 flex flex-col justify-center items-center relative"> 
      <div>
        <Image alt="thaimassagegruppen" src={woman} />
      </div>
      <div className="absolute top-20 left-[300px] righ-0">
        <Image alt="card1" src={card1} width={316} height={113} />
      </div>
      <div className="absolute top-42 right-64">
        <Image alt="card2" src={card2} />
      </div>
    </div>
  </div>
  
  );
}
