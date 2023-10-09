import React from "react";
import Navbar from "../../../../common/page/Navbar";
import image1 from "../../../../../images/landingpage/landing page vectors.jpg"

const Banner: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#541c5b_0%,_#985810_100%)] pt-[10px] h-screen w-screen">
      <Navbar />
      <div
        style={{
          height: "calc(100% - 77px)",
          padding: "0px 10%",
          display: "flex",
        }}
        className="flex-center-flex-start flex-column"
      >
        <div className="w-[516px] text-[#fff] font-[Inter] text-[40px] not-italic font-semibold leading-[normal]">
          Elevate Your Business
          <br /> with Our Advanced
          <br /> Platform
        </div>
        <h3 className="text-[#fff] font-[Inter] text-[24px] not-italic font-normal leading-[normal] mt-4 ">
          Unlock the Future of Backend Management
        </h3>
        <div className="flex-flex-start-center mt-4">
          <input
            type="text"
            placeholder="Enter Email ID.."
            className="w-[336px] h-[30px] flex-shrink-0 bg-transparent border-[2px] border-[solid] border-[#fff] text-[#fff] outline-[none] pl-[5px] mr-8px"
          />
          <button className="inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3b82f6] bg-[#3b82f6] text-[#ffffff] cursor-pointer">
            Get Demo
          </button>
        </div>
        <div className="flex justify-end  absolute ml-[800px]">
            <img src={image1} alt="" className="w-[500px] h-[500px]" />
          </div>
      </div>
    </div>
  );
};

export default Banner;
