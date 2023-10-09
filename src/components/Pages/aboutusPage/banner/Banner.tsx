import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Navbar from "../../../common/page/Navbar";
import image1 from "../../../../images/AboutUs/Aboutus1.jpg";
import image2 from "../../../../images/AboutUs/business01.jpg";

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <div className="main-nav-a">
        <Navbar />
        <div
          style={{
            height: "calc(100% - 77px)",
            padding: "0px 10%",
            display: "flex",
          }}
          className="main-para flex-center-flex-start flex-column "
        ></div>
      </div>
      <img
        src={image1}
        alt=""
        className="w-screen  bg-no-repeat bg-cover h-[357px]"
      />

      <div className="pt-[250px] pl-[324px] absolute top-8">
        <p className="w-[229px] h-[51px] flex-shrink-0 text-[rgba(255,_255,_255,_0.84)] font-[Inter] text-[24px] not-italic font-bold leading-[normal]">
          About us
        </p>
        <div className="flex">
          <p className="text-[#fff] font-[Inter] text-[15px] not-italic font-medium leading-[normal]">
            Home{" "}
          </p>
          <p className="text-[#fec120] font-[Inter] text-[15px] not-italic font-medium leading-[normal] hover:underline cursor-pointer">
            {" "}
            <FaGreaterThan /> about us
          </p>
        </div>
      </div>

      {/* business */}
      <div className="flex-space-between-flex-start">
        <div className="grid w-[418px] ml-[450px] mt-[173px]">
          <h2 className="text-[#000] font-[Inter] text-[24px] not-italic font-semibold leading-[39px]">
            Our success is the inspiration for your Business
          </h2>
          <p className="w-[379px] flex-shrink-0 text-[#848181] font-[Outfit] text-[20px] not-italic font-light leading-[28px]">
            We are a team of experienced engineers and designers who are
            passionate about building scalable and extensible software
            solutions.{" "}
          </p>
          <div className="flex mt-14 gap-3">
            <p className="w-[161px] h-[80px] flex-shrink-0 text-[#3b82f6] font-[Inter] text-[96px] not-italic font-extrabold leading-[39px] ">
              7 +
            </p>
            <p className="w-[225px] h-[94px] flex-shrink-0 text-[#000] font-[Inter] text-[24px] not-italic font-semibold leading-[39px]">
              Years <br /> Experience
            </p>
          </div>
        </div>

        <div style={{ marginRight: "22%" }} className="pt-[10px]">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
