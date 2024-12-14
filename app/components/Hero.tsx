import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="my-[66px] mx-auto md:w-[1030px] w-[92%] md:h-[308px] flex items-center justify-between p-6 flex-col-reverse md:flex-row">
      <div className="  md:w-[521px] h-[305px]  flex flex-col md:justify-between items-start justify-evenly">
        <h1
          className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myBlack `}
        >
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className} text-myBlack text-[16px] font-normal `}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} text-[18px] font-medium w-[205px] h-[50px] bg-myPink text-white rounded-sm shadow-md shadow-black/60 `}
        >
          Download Resume
        </button>
      </div>
      {/* img div */}
      <div className="w-[292px] h-[299px] relative">
        <Image
          className="z-50"
          src="/Image/image.png"
          alt="myImage"
          width={292}
          height={299}
        />
        <div className="bg-heroElipse w-[292] h-[299] rounded-full absolute -z-10 top-2 right-2" />
      </div>
    </div>
  );
};

export default Hero;
