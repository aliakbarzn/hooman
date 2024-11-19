import Image from "next/image";
import LeftArrow from "@/assets/images/about/left-arrow.svg";
import rightArrow from "@/assets/images/about/right-arrow.svg";
const TitleAbout = () => {
  return (
    <div className="flex flex-col self-center max-w-[80%] text-center">
      <div className="flex flex-row justify-center ">
        <div className="flex flex-col">
          <div className="flex  justify-center  items-baseline  my-5">
            <Image src={LeftArrow} alt={"LeftArrow"} />
            <h4 className="font-bold text-5xl">The largest center for</h4>
          </div>
          <h4 className="font-bold text-5xl">introducing massage salons</h4>
        </div>

        <Image className="ml-7" src={rightArrow} alt={"rightArrow"} />
      </div>
      <p className="text-[#757575] my-6">our services:</p>

      <ul className="flex flex-row justify-between list-disc">
        <li className="text-[#1E1E1E]">Traditional Thai Massage</li>
        <li className="text-[#1E1E1E]">Spa Services</li>
        <li className="text-[#1E1E1E]">Specialized Techniques</li>
        <li className="text-[#1E1E1E]">Oil-Based Massages</li>
      </ul>
    </div>
  );
};
export default TitleAbout;
