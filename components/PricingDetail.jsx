import React from "react";
import CardPricingDetail from "./CardPricingDetail";
import Image from "next/image";

const cardJsonData = [
  {
    plan: "Basic Plan",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    price: "$54",
    access: "Free access to video class",
    buttonText: "Start Free Trial",
  },
  {
    plan: "Premium Plan",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    price: "$54",
    access: "Free access to video class",
    buttonText: "Start Free Trial",
    className: "bg-[#7A3199]",
    textColor: "text-white",
  },
  {
    plan: "Basic Plan",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    price: "$54",
    access: "Free access to video class",
    buttonText: "Start Free Trial",
  },
];

const PricingDetail = () => {
  return (
    <div className="pt-4 p-[35px] px-[175px]">
      <div className="flex flex-col">
        <Image
        width={100} height={100}
          src="/assests/Podcast.png"
          className="absolute z-[-10] right-4 top-[48%]"
          alt="Podcast"
        />
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[32px] font-inter font-bold leading-normal">
            Choose Your Plan
          </h2>
          <p className="text-sm font-poppins font-normal leading-normal w-[455px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
          </p>
        </div>
        <div className="flex gap-5 border-current justify-center items-center shadow-xl w-[180px] h-[50px] m-auto mt-4 rounded-full">
          <button className="p-1 font-semibold border rounded-full bg-[#E1A6FF] bg-opacity-40">
            monthly
          </button>
          <button className="p-1 border rounded-full">yearly</button>
        </div>
        <div className="flex justify-center gap-24 pt-4">
          {cardJsonData.map((item, index) => {
            return (
              <CardPricingDetail
                key={index + 1}
                plan={item.plan}
                details={item.details}
                access={item.access}
                buttonText={item.buttonText}
                className={item.className}
                textColor={item.textColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingDetail;
