import React from "react";
import CardClintTrusted from "@/sections/about/cardClintTrusted";
import man1 from "@/assets/images/about/man1.png";
import man2 from "@/assets/images/about/man2.png";
import man3 from "@/assets/images/about/man3.png";
import man4 from "@/assets/images/about/man4.png";
import man5 from "@/assets/images/about/man5.png";
import CardChartWeeklyGrowth from "@/sections/about/cardChartWeeklyGrowth";
import StartBooking from "@/sections/about/startBooking";
import TitleAbout from "@/sections/about/titleAbout";
import HowWork from "@/components/baners/HowWork";
import Trust from "@/sections/about/baner/trust";

export default function About() {
  const images = [man1, man2, man3, man4, man5];
  const starCount = 1234;

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between px-24 mt-8">
        <CardChartWeeklyGrowth />
        <p className="text-[#757575] flex items-end">you use</p>
        <CardClintTrusted images={images} starCount={starCount} />
      </div>
      <TitleAbout />
      <StartBooking />
      <HowWork />
      <Trust />
    </div>
  );
}
