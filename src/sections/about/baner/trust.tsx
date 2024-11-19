import Image from "next/image";
import BanerTrust from "@/assets/images/about/baner trust.svg";

const Trust = () => {
  return (
    <div className="flex flex-row py-20 justify-between w-full px-7 self-center">
      <div className="w-[66%]">
        <Image src={BanerTrust} alt={"BanerTrust"} />
      </div>
      <div className="w-[30%] flex flex-col justify-center ">
        <h4 className="text-[#202020] text-4xl font-bold">
          Trusted 100% by many people Gradually
        </h4>
        <span className="mt-6 mb-8 text-[#757575] text-lg">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.
        </span>
        <div
          className="px-6 py-3 bg-[#F58882] text-[#F5F5F5] rounded-lg w-36 h-10 flex items-center"
          role="button"
        >
          login/ singup
        </div>
      </div>
    </div>
  );
};
export default Trust;
