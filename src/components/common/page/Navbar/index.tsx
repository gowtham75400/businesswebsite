import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import image1 from "../../../../images/landingpage/logo01.png.png"

const Navbar: React.FC = () => {
  return (
    <div>
      <Menu theme="dark" defaultSelectedKeys={["1"]}>
        <div className="bg-[#5c2351] px-[48.5px] py-0 h-[10vh] flex-space-between-center">
          <div>
            <p className="text-[#FAF8F1] font-[Baloo_Thambi_2] ">
              <img src={image1} alt="" />
            </p>
          </div>
          <div className="flex-flex-start-center ">
            <div className="text-[#FFF] font-Inter text-[16px] not-italic font-semibold leading-normal px-24px py-16px mr-10px cursor-p text-xl pl-12">
              <div className="mr-10 flex">
                <Link className="hover:text-amber-400 mr-10" to="/aboutus">
                  About us
                </Link>
                <Link className="hover:text-amber-400 mr-10" to="/products">
                  Products
                </Link>
                <Link className="hover:text-amber-400 mr-10" to="/solution">
                  Solutions
                </Link>
                <Link className="hover:text-amber-400 mr-10" to="/resources">
                  Resources
                </Link>
                <Link className="hover:text-amber-400 mr-10" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="hover:text-amber-400 mr-10" to="/prices&plans">
                  Prices & Plans
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-flex-start-center">
            <div className="bg-[#3B82F6] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] px-[24px] py-[16px] text-[#FFF] font-[Inter] text-[16px] not-italic font-medium leading-[normal] cursor-pointer mr-8px ">
              Get a Demo
            </div>
            <div className="bg-[#FAC800] text-[#221717] font-[Inter] text-[16px] not-italic font-medium leading-[normal] px-[24px] py-[16px] cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
