import React from "react";
import CustomCard from "../../../../common/CustomCard";
import Button from "../../../../common/Button";

const CustomerSection: React.FC = () => {
  return (
    <div>
      <div className="w-[1828px] pb-[80px] flex-shrink-0 bg-[#d9d9d9]">
        <div className="w-screen flex-shrink-0 text-[#000] text-center text-[34px] not-italic font-bold leading-[normal] pt-[2%]">
          <p className="main-heading1">Here From Our Customers</p>
        </div>
        <div className="customer-box">
          <CustomCard />
        </div>
        <div className="flex justify-center pt-[5%]">
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

export default CustomerSection;
