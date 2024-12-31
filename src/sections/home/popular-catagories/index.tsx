import EmojiIcon from "@/assets/icons/emojiIcon";
import React from "react";

export default function PopularCatagories() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-3xl font-bold">Popular Catagories</div>
      <div className="sm:flex gap-3">
        <div className="flex flex-col justify-center items-center min-w-60  shadow-xl  mt-12 pb-5  cursor-pointer">
          <div className="">
            <span className="text-[#47C666]">
           <EmojiIcon/>
            </span>
          </div>
          <div className="mt-6">
            <p className="font-bold">our products</p>
            <span className="font-bold">22 product</span>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center w-60 shadow-xl h-56 mt-12 pb-5 cursor-pointer">
         <div>
          <span className="text-[#F58882]">

           <EmojiIcon/>
          </span>
         </div>
          <div className="mt-6">
            <p className="font-bold">our products</p>
            <span className="font-bold">22 product</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-56 shadow-xl mt-12 pb-5 cursor-pointer">
          <span className="text-[#DD9BCF]">
          <EmojiIcon/>
          </span>
          <div className="mt-6">
            <p className="font-bold">our products</p>
            <span className="font-bold">22 product</span>
          </div>
        </div>
      </div>
    </div>
  );
}
