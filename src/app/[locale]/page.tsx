import BanerOff from "@/components/baners/BanerOff";
import HowWork from "@/components/baners/HowWork";
import Professional from "@/components/baners/Professional";
import Famoussalons from "@/sections/home/FamousSalons";
import FindSalon from "@/sections/home/find-salon";
import GothenburgSalons from "@/sections/home/GothenburgSalons";
import Header from "@/sections/home/header";
import LastBlog from "@/sections/home/LastBlog";
import LatestReview from "@/sections/home/latest-review";
import NewMassage from "@/sections/home/new-massage";
import PapularSalons from "@/sections/home/papular-salons";
import PopularCatagories from "@/sections/home/popular-catagories";
import StockholmSalons from "@/sections/home/StockholmSalons";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-8 px-32">
      <Header />
      <FindSalon />
      <PopularCatagories />
      <NewMassage />
      <PapularSalons />
      <GothenburgSalons />
      <LatestReview />
      <Professional />
      <Famoussalons />
      <BanerOff />
      <StockholmSalons />
      <LastBlog />
      <HowWork />
    </div>
  );
}
