import React from "react";
import Image from "next/image";
import woman from "@/assets/images/header/woman.png";
import circle from '@/assets/images/header/circle.png'
import card1 from "@/assets/images/header/card1.png";
import card2 from "@/assets/images/header/card2.png";


export default function Header() {
  return (
    <div className="relative w-full h-full">
    <div className=" mt-10 flex flex-col justify-center items-center relative"> 
      <div>
        <Image alt="card1" src={circle} />
      </div>
      <div className="absolute">
        <Image alt="thaimassagegruppen" src={woman}/>
      </div>
      <div className=" absolute top-20 xl:left-[15%] md:left-[0%] lg:left-[10%] righ-0 2xl:left-[20%]">
        <Image alt="card1" src={card1} width={316} height={113} />
      </div>
      <div className="absolute top-42 xl:right-[14%] md:right-0 lg:right-[8%] 2xl:right-[18%]">
        <Image alt="card2" src={card2} />
      </div>  
    </div>
  </div>
  );
}
