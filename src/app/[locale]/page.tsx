import FindSalon from "@/sections/home/find-salon";
import Header from "@/sections/home/header";
import LatestReview from "@/sections/home/latest-review";
import NewMassage from "@/sections/home/new-massage";
import PapularSalons from "@/sections/home/papular-salons";
import PopularCatagories from "@/sections/home/popular-catagories";

export default function Home() {

  return ( 
    <div className="w-full h-full flex flex-col justify-center items-center pt-8">
      <Header/>
      <FindSalon/>
      <PopularCatagories/>
      <NewMassage/>
      <PapularSalons/>
      <LatestReview/>
    </div>
   );
}