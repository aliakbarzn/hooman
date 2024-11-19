import Image from "next/image";
import LinkedIn from "@/assets/images/about/LinkedIn logo.svg";
import instagram from "@/assets/images/about/instagram logo.svg";
import behance from "@/assets/images/about/behance logo.svg";
import Dribbble from "@/assets/images/about/Dribbble logo.svg";
import Baner1 from "@/assets/images/about/Frame 1597883389.svg";
import Baner2 from "@/assets/images/about/Frame 1597883390.svg";
import Baner3 from "@/assets/images/about/Rectangle 100.svg";
const StartBooking = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div
        className="flex items-center justify-center relative bg-transparent z-[-5] rounded-[100%] border-[0.3px] border-gray-400 mt-5
          w-[95%] min-h-52 sm:h-[300px] md:h-[640px] lg:h-[1024px] xl:h-[1280px] 2xl:h-[1536px]"
      >
        <button className="absolute top-[-20px] bg-[#F58882] text-white text-lg font-semibold w-[189px] h-[40px] rounded-lg">
          Start Booking
        </button>

        <div
          className=" w-[100%] min-h-48 sm:h-[260px] md:h-[600px] lg:h-[984px] xl:h-[1240px] 2xl:h-[1506px] rounded-t-[100%]"
          style={{
            background:
              "linear-gradient(180deg, #E8FFEE 0%, rgba(248, 248, 248, 0) 32.89%)",
          }}
        >
          <div className="flex gap-6 mt-6 justify-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer">
              <Image src={Dribbble} alt="Dribbble" width={25} height={25} />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer">
              <Image src={instagram} alt="Instagram" width={25} height={25} />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer">
              <Image src={behance} alt="Behance" width={25} height={25} />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer">
              <Image src={LinkedIn} alt="LinkedIn" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white w-full flex flex-col mt-[50px] sm:mt-[-170px] md:mt-[-400px] lg:mt-[-700px] xl:mt-[-900px] 2xl:mt-[-1100px] px-7"
        style={{
          height: "auto",
        }}
      >
        <div className="flex flex-row justify-between mt-16">
          <div className="max-h-[308px] flex items-center rounded-3xl justify-center overflow-hidden w-[30%]">
            <Image
              src={Baner1}
              alt="Baner"
              width={600}
              height={308}
              layout="responsive"
            />
          </div>

          <div className="max-h-[308px] flex items-center rounded-3xl justify-center overflow-hidden w-[65%]">
            <Image
              src={Baner2}
              alt="Baner"
              width={1200}
              height={308}
              layout="responsive"
            />
          </div>
        </div>

        <span className="mt-32 font-bold text-xl text-[#1E1E1E]">
          Who are we basically?
        </span>
        <span className="mt-6 font-normal text-lg text-[#1E1E1E]">
          Who are we basically? When we started building this site, we were just
          three IT developers with ten years of experience. We had also managed
          to get hold of two smart investors. During the journey, our team has
          grown, we are now 12 people. Together, we have extensive knowledge in
          programming, SEO, marketing, security, UX/UI. We also have skills in
          Thai.
        </span>
        <span className="mt-16 font-bold text-xl text-[#1E1E1E]">
          What did we have to go through to succeed in our goal?
        </span>
        <span className="mt-6 font-normal text-lg text-[#1E1E1E] ">
          As we have mentioned, together we have extensive knowledge in many
          different areas. Sometimes things still go wrong and it hasn't been
          easy to get to where we are today. As a founder, you often ask what
          has actually taken all this time, but you always get the same answer.
          A system that works well for both customers and salon owners is not
          easy to build.
        </span>

        <Image
          className="w-[100%] max-h-[1000px] mt-[78px]"
          src={Baner3}
          alt={"Baner3"}
        />
      </div>
    </div>
  );
};

export default StartBooking;
