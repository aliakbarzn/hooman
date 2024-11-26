import Header from "@/sections/searchPage/header/Header";
import Banner from "@/sections/searchPage/banner/Banner";
import ListCart from "@/sections/searchPage/listCart/ListCart";
import BanerOff from "@/components/baners/BanerOff";

export default function SearchPageView() {
  return (
    <div className="flex flex-col">
    <Header />
    <Banner />
    <ListCart />
    <BanerOff />
  </div>
  )
}
