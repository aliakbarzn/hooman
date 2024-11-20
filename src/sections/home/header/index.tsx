import React from "react";
import Image from "next/image";
import woman from "@/assets/images/header/woman.png";
import circle from '@/assets/images/header/circle.png'
import card1 from "@/assets/images/header/card1.png";
import card2 from "@/assets/images/header/card2.png";


export default function Header() {
  return (
    <div className=" w-full h-full">
    <div className=" relative mt-10 flex flex-col justify-center items-center relative"> 
      <div className="absolute top-0 left-[550px] xl:left-[715px]">
        <Image alt="card1" src={circle} />
      </div>
      <div className="z-10">
        <Image alt="thaimassagegruppen" src={woman}/>
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
