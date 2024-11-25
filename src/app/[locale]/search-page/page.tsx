import Header from "@/sections/searchPage/header";
import Baner from "@/sections/searchPage/baner";
import ListCart from "@/sections/searchPage/listCart";
import BanerOff from "@/sections/searchPage/BanerOff";

const SearchPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Baner />
      <ListCart />
      <BanerOff />
    </div>
  );
};

export default SearchPage;
