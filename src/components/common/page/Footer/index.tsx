import React from "react";
import twitter from "../../../../images/landingpage/X.jpg";
import youtube from "../../../../images/landingpage/Youtube.jpg";
import instagram from "../../../../images/landingpage/Instagram logo.png";

export const Footer: React.FC = () => {
  return (
    <div className="w-screen flex-shrink-0 bg-[#252225] pb-12">
      <div className="flex w-[888px] justify-between items-center text-[#ffffff] pt-[76px] ml-[223px]">
        <p>Logo</p>
        <p> 2018 - 2023 CompanyName Inc.</p>
        <div className="flex-flex-start-center gap">
          <img
            src={twitter}
            alt=""
            className="flex w-[32px] h-[32px] justify-center items-center bg-[#2daae1] cursor-pointer mr-10px"
          />
          <img
            src={youtube}
            alt=""
            className="flex w-[32px] h-[32px] justify-center items-center cursor-pointer mr-10px"
          />
          <img
            src={instagram}
            alt=" "
            className="flex w-[32px] h-[32px] justify-center items-center cursor-pointer mr-10px"
          />
        </div>
      </div>

      {/* first-row */}

      <div
        style={{ padding: "0px 10%", marginTop: "30px", cursor: "pointer" }}
        className="flex-flex-start-flex-start"
      >
        <div
          className="flex justify-center items-start flex-col w-[300px]"
          style={{ marginRight: "42px" }}
        >
          <p className="text-[#fff] font-[Inter] text-[20px] not-italic font-[557] leading-[normal]">
            Company
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            About us
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Careers
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Get Demo
          </p>
        </div>

        {/* second-row */}

        <div
          className="flex justify-center items-start flex-col w-[300px] "
          style={{ marginRight: "42px" }}
        >
          <p className="text-[#fff] font-[Inter] text-[20px] not-italic font-[557] leading-[normal]">
            Resource
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Documentation
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Testimonials
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Blogs
          </p>
        </div>

        {/* third-row */}

        <div
          className="flex justify-center items-start flex-col w-[300px]"
          style={{ marginRight: "42px" }}
        >
          <p className="text-[#fff] font-[Inter] text-[20px] not-italic font-[557] leading-[normal]">
            Solution
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Data Management
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            No code Solution
          </p>
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-normal leading-[normal] mt-[30px]">
            Integration
          </p>
        </div>
      </div>
    </div>
  );
};
