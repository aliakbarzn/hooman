import Image from "next/image";
import CarFree from "@/assets/icons/about/car-free.svg";
import CashBack from "@/assets/icons/about/cashback.svg";
import Medal from "@/assets/icons/about/medal.svg";
import Call from "@/assets/icons/about/call.svg";
const HowWork = () => {
  return (
    <div className="bg-[#FEFFF6] px-32 py-[60px] flex flex-col items-center w-full">
      <h4 className="text-[#1E1E1E] text-3xl">
        How does <span className="text-[#D367BC]">thaimassage</span> massage
        work?
      </h4>

      <div className="flex flex-row justify-between w-full mt-20">
        <div className="flex flex-col max-w-56 text-center items-center">
          <Image src={CarFree} alt={"CarFree"} />
          <h5 className="text-[#1E1E1E] text-2xl font-bold mt-14 mb-3">
            24/7 Support
          </h5>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>
        <div className="flex flex-col max-w-56 text-center items-center">
          <Image src={CashBack} alt={"CashBack"} />
          <h5 className="text-[#1E1E1E] text-2xl font-bold mt-14 mb-3">
            24/7 Support
          </h5>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>
        <div className="flex flex-col max-w-56 text-center items-center">
          <Image src={Medal} alt={"Medal"} />
          <h5 className="text-[#1E1E1E] text-2xl font-bold mt-14 mb-3">
            24/7 Support
          </h5>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>
        <div className="flex flex-col max-w-56 text-center items-center">
          <Image src={Call} alt={"Call"} />
          <h5 className="text-[#1E1E1E] text-2xl font-bold mt-14 mb-3">
            24/7 Support
          </h5>
          <span className="text-[#757575]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>
      </div>
    </div>
  );
};
export default HowWork;
