import FindSalon from "@/sections/home/find-salon";
import Header from "@/sections/home/header";
import PopularCatagories from "@/sections/home/popular-catagories";

export default function Home() {

  return ( 
    <div className="w-full h-full">
      <Header/>
      <FindSalon/>
      <PopularCatagories/>
    </div>
   );
}