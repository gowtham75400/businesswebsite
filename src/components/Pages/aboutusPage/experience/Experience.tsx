import React from "react";
import { Footer } from "../../../common/page/Footer";
import image1 from "../../../../images/AboutUs/experience1.jpg";
import image2 from "../../../../images/AboutUs/experience2.jpg";
import image3 from "../../../../images/AboutUs/experience3.jpg";
import image4 from "../../../../images/AboutUs/Client vector.jpg";
import { CgProfile } from "react-icons/cg";
import { BsMeta } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { Switch } from "antd";

const Experience: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mt-[100px]">
        <p className="text-[#000] font-[Inter] text-[32px] not-italic font-semibold leading-[39px] h-[45px] flex-shrink-0">
          Our Experience Team
        </p>
      </div>

      <div className="flex items-center justify-center mt-[85px] gap-[108px]">
        <div>
          <img src={image1} alt="" />
          <div className="w-[250.281px] h-[68.78px] flex-shrink-0 rounded-tl-none rounded-br-none rounded-tr-[28px] rounded-bl-[28px] bg-[#373c44] pt-0">
            <p className="text-white flex justify-center items-center mt-3 pt-2">
              Nandan Agarwal
            </p>
            <div className="flex text-zinc-300 ml-6 mt-2 text-lg gap-10 cursor-pointer ">
              <CgProfile />
              <BsMeta />
              <AiOutlineTwitter />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
        <div>
          <img src={image2} alt="" />
          <div className="w-[250.281px] h-[68.78px] flex-shrink-0 rounded-tl-none rounded-br-none rounded-tr-[28px] rounded-bl-[28px] bg-[#373c44] pt-0">
            <p className="text-white flex justify-center items-center mt-3 pt-2">
              Harish
            </p>
            <div className="flex text-zinc-300 ml-6 mt-2 text-lg gap-10 cursor-pointer ">
              <CgProfile />
              <BsMeta />
              <AiOutlineTwitter />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
        <div>
          <img src={image3} alt="" />
          <div className="w-[250.281px] h-[68.78px] flex-shrink-0 rounded-tl-none rounded-br-none rounded-tr-[28px] rounded-bl-[28px] bg-[#373c44]">
            <p className="text-white flex justify-center items-center mt-3 pt-2">
              Suraj Sharma
            </p>
            <div className="flex text-zinc-300 ml-6 mt-2 text-lg gap-10 cursor-pointer ">
              <CgProfile />
              <BsMeta />
              <AiOutlineTwitter />
              <BiLogoLinkedin />
            </div>
          </div>
          <Switch />
        </div>
      </div>

      <div className="flex ml-[306px] mt-[250px]">
        <div>
          <h2 className="w-[372px] flex-shrink-0 text-[#000] font-[Inter] text-[24px] not-italic font-semibold leading-[39px] ml-10">
            Proven Track Record
          </h2>
          <p className="w-[430px] h-[179px] flex-shrink-0 text-[rgba(0,_0,_0,_0.55)] font-[Outfit] text-[20px] not-italic font-light leading-[28px] ml-10">
            Our success story is written in the achievements of our clients.
            We've partnered with businesses of all sizes. Our solutions have
            fueled growth, enhanced efficiency, and turned challenges into
            opportunities.
          </p>
        </div>
        <img
          className="flex justify-end  mr-[400px] mt-0 mb-5 ml-20"
          src={image4}
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
