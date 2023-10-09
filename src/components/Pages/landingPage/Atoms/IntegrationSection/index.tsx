import React from "react";
import img1 from "../../../../../images/landingpage/1.png";
import img2 from "../../../../../images/landingpage/2.png";
import Button from "../../../../common/Button";

const Integration: React.FC = () => {
  return (
    <div>
      <div className="w-screen pt-[3%]">
        <div className="flex justify-center items-center">
          <p className="w-[537px] h-[90px] flex-shrink-0 text-[#000] text-center text-[34px] not-italic font-bold leading-[normal]">
            Experience Seamless Integration
          </p>
        </div>

        <div className="flex-space-between-center">
          <div
            style={{
              height: "calc(100% - 77px)",
              padding: "0px 10%",
              display: "flex",
            }}
            className="main-para flex-center-flex-start flex-column "
          >
            <h2 className="w-[279px] h-[34px] flex-shrink-0 text-[#000] text-center font-[Inter] text-[30px] not-italic font-semibold leading-[normal]">
              API First Approach
            </h2>
            <p className="w-[645px] h-[116px] flex-shrink-0 text-[rgba(0,_0,_0,_0.55)] font-[Inter] text-[20px] not-italic font-normal leading-[33px] mt-4">
              Our platform makes integrating easy and efficient through an
              API-first approach. You can effortlessly connect your existing
              tools and systems using our robust set of APIs.
            </p>
            <div className="flex-flex-start-center"></div>
            <div>
              <button className="inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3B82F6] [box-shadow:0px_4px_4px_0px_rgba(210,_202,_202,_0.25)] cursor-pointer mt-[30px] mr-8px">
                Learn More
              </button>
              <button className="inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3B82F6] bg-[#3B82F6] cursor-pointer">
                Get Demo
              </button>
            </div>
          </div>
          <div className="flex pr-[8%] pt-[2%] ">
            <img src={img1} alt="" className="w-[500px] h-[500px]" />
          </div>
        </div>

        <div className="flex-space-between-center">
          <div className="flex pl-[8%] pt-[2%] ">
            <img src={img2} alt="" className="w-[500px] h-[500px]" />
          </div>

          <div
            style={{
              height: "calc(100% - 77px)",
              padding: "0px 10%",
              display: "flex",
            }}
            className=" flex-center-flex-start flex-column "
          >
            <h2 className="w-[405px] h-[34px] flex-shrink-0 text-[#000] text-center font-[Inter] text-[30px] not-italic font-semibold leading-[normal]">
              Create a Unified Ecosystem
            </h2>
            <p className="w-[632px] h-[121px] flex-shrink-0 text-[rgba(0,_0,_0,_0.55)] font-[Inter] text-[20px] not-italic font-normal leading-[33px] mt-4">
              Our integration solutions help data move smoothly between
              different apps, creating a unified system. This breaks down data
              barriers and promotes teamwork across different parts of your
              business.
            </p>

            <div>
              <button className="inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3B82F6] [box-shadow:0px_4px_4px_0px_rgba(210,_202,_202,_0.25)] cursor-pointer mt-[30px] mr-8px">
                Learn More
              </button>
              <button className="inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3B82F6] bg-[#3B82F6] cursor-pointer">
                Get Demo
              </button>
            </div>
          </div>
        </div>
        <div className="items-start flex justify-center pt-[3%] pb-[3%]">
          <Button
            text="More About Our Feature"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
