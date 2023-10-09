import React from "react";
import Button from "../../../../common/Button";

interface Feature {
  name: string;
  color: string;
  dis: string;
  button: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      name: "Data Warehousing",
      color: "#C363D3",
      dis: "Seamlessly centralize and scale data storage, empowering businesses with a future-ready foundation for analytics and insights",
      button: "Learn More",
    },
    {
      name: "Data Warehousing",
      color: "#54C8B3",
      dis: "Seamlessly centralize and scale data storage, empowering businesses with a future-ready foundation for analytics and insights",
      button: "Learn More",
    },
    {
      name: "Data Warehousing",
      color: "#E46262",
      dis: "Seamlessly centralize and scale data storage, empowering businesses with a future-ready foundation for analytics and insights",
      button: "Learn More",
    },
    {
      name: "Data Warehousing",
      color: "#6540F8",
      dis: "Seamlessly centralize and scale data storage, empowering businesses with a future-ready foundation for analytics and insights",
      button: "Learn More",
    },
  ];

  const featureEle = () => {
    return features.map((ele, index) => {
      return (
        <div
          className="rounded-[12px] bg-[rgba(234,_234,_234,_0.66)] flex w-[272px] p-[24px] pt-[54px] flex-col items-start gap-[18px] flex-shrink-0 relative"
          key={index}
        >
          <div
            style={{ backgroundColor: ele.color }}
            className="w-[64px] h-[64px] absolute left-[24px] -top-[26px] rounded-[32px] bg-[#C363D3] "
          ></div>
          <p className="w-[281px] h-[29px] text-[#000] text-justify font-[Inter] text-[16px] not-italic font-semibold leading-[normal]">
            {ele.name}
          </p>
          <p className="w-[212px] text-[#707070] font-[Inter] text-[14px] not-italic font-normal leading-[22px]">
            {ele.dis}
          </p>
          <p className="text-[#000] text-justify font-[Inter] text-[16px] not-italic font-semibold leading-[normal] [text-decoration-line:underline] cursor-pointer">
            {ele.button}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="h-[80vh] w-screen pt-[2%]">
      <div className="flex justify-center items-center">
        <h2 className="w-[146px] h-[44px] flex-shrink-0 text-[#000] text-[34px] not-italic font-bold leading-[normal]">
          Features
        </h2>
      </div>
      <div className="flex w-4/5 items-center justify-between ml-[10%] mt-[4%] gap-[20px]">
        {featureEle()}
      </div>
      <div className="items-start flex justify-center pt-[5%]">
        <Button
          text="More About Our Feature"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
    // </div>
  );
};

export default Features;
