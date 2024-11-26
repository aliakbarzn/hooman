import React from "react";
import Image from "next/image";
import banerImage from "@/assets/images/baner/products.png"
import { Link } from "@/navigation";


export default function Professional() {

    return (
        <div className="w-screen h-[311px] bg-[#E9FFEC]  relative flex items-center justify-between px-10">
           
            <div
                className="absolute w-[311px] h-[311px] bg-[#C6FAD2] ml-20"
                style={{
                    borderRadius: "43% 57% 70% 30% / 45% 43% 57% 55%",
                }}
            ></div>

      
            <div className="relative z-10 ml-16 ">
                <Image
                    src={banerImage}
                    alt="Banner Image"
                    width={350}
                    height={350}
                    className="rounded-lg"
                />
            </div>

           
            <div className="z-10 text-right w-2/3 h-full items-center justify-center flex flex-col ">
                <h1 className="text-5xl font-bold text-[#0C0C0D]">be the best</h1>
                <p className="text-lg mt-3 text-[#0C0C0D]    ">Professional massage</p>
                <div className="mt-8 flex gap-4">
                    <Link href="/signin">
                    <button className="px-3 py-2 bg-primary text-blackC rounded-lg">
                        login
                    </button>
                    </Link>
                    <Link href="/">
                    <button className="px-3 py-2 bg-[#2C2C2C] text-[#F5F5F5] rounded-lg">
                        shop
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
