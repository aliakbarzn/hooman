import React from "react";
import Image from "next/image";
import logImage from "@/assets/images/card/logImage.png";
import IcNote from "@/assets/icons/card/note";
import IcEvent from "@/assets/icons/card/event";


interface Idata {
    title: string;
    subtitle: string;
    name: string;
    date: string;
    [x: string]: any;
}

const data: Idata[] = [
    {
        title: "Ada Thai Massage",
        subtitle: "More off this less hello samlande lied much",
        name: "SaberAli",
        date: "21 August,2020",
    },
    {
        title: "Ada Thai Massage",
        subtitle: "More off this less hello samlande lied much",
        name: "SaberAli",
        date: "21 August,2020",
    },
    {
        title: "Ada Thai Massage",
        subtitle: "More off this less hello samlande lied much",
        name: "SaberAli",
        date: "21 August,2020",
    },
    {
        title: "Ada Thai Massage",
        subtitle: "More off this less hello samlande lied much",
        name: "SaberAli",
        date: "21 August,2020",
    },

];

export default function BlagCard() {
    return (
        <div className="flex w-full justify-between gap-6">
            {data.map((item: Idata, index) => (
                <div className="w-80 max-h-[493px] border-2 rounded-lg flex flex-col justify-start items-center gap-4" key={index}>


                    <Image
                        alt="woman"
                        src={logImage}
                        width={320}
                        height={255}
                        className="rounded-lg"
                    />

                    <div className="px-3 w-full h-full ">
                        <div className="flex flex-row  w-full justify-between">
                            <div className="flex items-center justify-center">
                                <IcNote />
                                <span className="text-xs ml-2">{item.name}</span>
                            </div>
                            <div className="flex  items-center justify-center">
                                <IcEvent />
                                <span className="text-xs ml-2">{item.date}</span>
                            </div>
                        </div>


                        <p className="font-medium mt-5">{item.title}</p>
                        <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>

                        <div className="w-full flex my-6">
                            <span className="underline decoration-[#303030] decoration-2 font-light text-sm">Read More</span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
} 