import Header from "@/sections/searchPage/Header";
import Baner from "@/sections/searchPage/Baner";
import ListCart from "@/sections/searchPage/ListCart";
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
