import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profile.png";
import IcStar from "@/assets/icons/search-page/ic-star";
const data = [{
    title:"review Title",
    subtitle:"review Body",
    name:'Reviewer Name',
    data:'data'
},
{
    title:"review Title",
    subtitle:"review Body",
    name:'Reviewer Name',
    data:'data'
},
{
    title:"review Title",
    subtitle:"review Body",
    name:'Reviewer Name',
    data:'data'
},
{
    title:"review Title",
    subtitle:"review Body",
    name:'Reviewer Name',
    data:'data'
},
]
export default function ReviewCard() {
  return (
    <div className="flex justify-between gap-3">
        {data.map((item,index)=>(
      <div key={index} className="flex flex-col gap-6 w-80 h-52 border rounded-md p-6">
        <div className="flex text-yellow-300 ">
          <IcStar />
          <IcStar />
          <IcStar />
          <IcStar />
          <IcStar />
        </div>
        <div>
          <div>
            <h1 className="text-2xl">{item.title}</h1>
            <h4>{item.subtitle}</h4>
          </div>
          <div className="flex  items-center gap-2 pt-6">
            <Image className="rounded-full" alt="prof" src={profile} />
            <h3>{item.name}</h3>
            <p>{item.data}</p>
          </div>
        </div>
      </div>
        ))}
    </div>
  );
}
