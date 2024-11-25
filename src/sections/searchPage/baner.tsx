import React from "react";
import baner from "@/assets/images/search-page/baner.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Baner = () => {
  const t = useTranslations();

  return (
    <div className="relative w-full">
      <Image className="w-full h-[556px]" src={baner} alt="baner" />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center ml-16">
        <h4 className="text-[#FEE9E7] text-3xl font-bold">
          {t("SearchPage.Baner.content.text1")}
        </h4>
        <div className="flex flex-row my-2">
          <h4 className="text-white text-5xl font-bold">
            {t("SearchPage.Baner.content.text2")}
          </h4>
          <h4 className="text-white text-4xl font-bold ml-2">
            {t("SearchPage.Baner.content.text3")}
          </h4>
        </div>
        <span className="text-[#FEE9E7] text-3xl">
          {t("SearchPage.Baner.content.text4")}
        </span>
        <button className="p-3 text-[#F5F5F5] bg-primary text-2xl mt-7 rounded-lg">
          {t("SearchPage.Baner.button")}
        </button>
      </div>
    </div>
  );
};

export default Baner;
