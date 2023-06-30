import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex pl-[175px] pr-[175px]">
      <div className="pt-[91px] pb-[187px]">
        <div className="flex w-[580px] h-[127.703px] flex-col flex-shrink-0">
          <h1 className="text-white text-6xl font-inter font-semibold z-20">
            Learn how to launch a successful podcast
          </h1>
        </div>
        <div className="flex w-[433px] h-[63px] flex-col flex-shrink-0 pt-[24px]">
          <p className="text-white text-base font-inter font-normal z-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="pt-40">
          <button className="rounded-lg bg-gradient-to-r text-white from-blue-500 to-purple-600 inline-flex h-[74.86px] px-[56px] py-[19px] pb-[25.861px] pl-[55px] justify-center items-center flex-shrink-0 text-xl font-poppins font-bold leading-normal ">
            Sign Up Now
          </button>
        </div>
      </div>
      <div className="ml-28">
        <div className="relative">
          <Image width={501} height={281} className="absolute top-[100px] mt-5 ml-0" src="/assests/smile2.png" alt="smile2" />
          <Image width={65} height={65} src="/assests/micopen.png" className="relative left-[100%] top-52 pl-4" alt="top" />
        </div>
        <div>
          <Image width={551} height={281} className="top-[200px] relative right-[50px]" src="/assests/smile1.png" alt="smile1" />
        </div>
        <div>
          <Image width={555} height={370 } className="absolute top-[192px] right-[8%] z-[-10]" src="/assests/smallcircle.png" alt="smallcircle" />
          <Image width={63} height={62} className="absolute top-[450px] right-[9.5%] bg-white p-1 " src="/assests/mic.png" alt="mic" />
        </div>
        <Image width={65} height={65} className="top-[200px] right-[-40%] relative" src="/assests/micbig.png" alt="micbig" />
      </div>
    </div>
  );
};

export default Hero;
