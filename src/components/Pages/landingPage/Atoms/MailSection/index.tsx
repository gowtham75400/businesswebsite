import React from "react";
import { Footer } from "../../../../common/page/Footer";
import image3 from "../../../../../images/landingpage/7.jpg.png";

const Mail: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={image3}
        alt=""
        className="w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center flex-column"
      />
      <div className="in-main absolute top-[285px] left-[492px] gap-2 flex-flex-start-center ">
        <input
          type="text"
          placeholder="Name.."
          className="w-[355px] h-[53px] rounded-[12px] flex-shrink-0 text-[rgba(0,_0,_0,_0.66)] font-[Inter] text-[15px] not-italic font-light leading-[normal] [box-shadow:0px_4px_16px_0px_rgba(0,_0,_0,_0.25)] outline-[none] border-[none] pl-[2%] mr-24px"
        />
        <input
          type="text"
          placeholder="Gmail.."
          className="w-[355px] h-[53px] rounded-[12px] flex-shrink-0 text-[rgba(0,_0,_0,_0.66)] font-[Inter] text-[15px] not-italic font-light leading-[normal] [box-shadow:0px_4px_16px_0px_rgba(0,_0,_0,_0.25)] outline-[none] border-[none] pl-[2%]"
        />
      </div>
      <div className="mt-[34px] absolute top-[320px] left-[490px]">
        <textarea
          placeholder="Message.."
          className="flex-shrink-0 rounded-[12px] bg-[#BABABA] [box-shadow:0px_4px_15px_0px_rgba(0,_0,_0,_0.25)] px-[20px] py-[2px] outline-[none] border-[none] flex justify-center items-center text-[20px] h-[200px] w-[715px]"
        />
      </div>
      <div className="mt-[101px] absolute top-[520px] left-[330px]">
        <p className="text-[#FFF] text-center font-[Inter] text-[36px] not-italic font-semibold leading-[normal]">
          Looking for productive business ? get in touch with <br />
          us for a first - class consultant !
        </p>
      </div>
      <div className="mt-[11px] absolute top-[719px] left-[750px]">
        <button className=" text-[#FFF] font-[Inter] text-[16px] not-italic font-medium leading-[normal] inline-flex px-[15px] py-[10px] justify-center items-center gap-[15px] border-[1px] border-[solid] border-[#3B82F6] bg-[#3B82F6] cursor-pointer ">
          Get Demo
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Mail;
