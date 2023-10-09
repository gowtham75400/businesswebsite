import React from "react";
import img1 from "../../../images/landingpage/imgcus1.jpg";
import img2 from "../../../images/landingpage/imgcus2.jpg";
import img3 from "../../../images/landingpage/imgcus3.jpg";
import img4 from "../../../images/landingpage/imgcus4.jpg";

interface Customer {
  icon: string;
  des: string;
  button: string;
  position: string;
}

const customers: Customer[] = [
  {
    icon: img1,
    des:
      "“This is the customer Quote.The customer going to share their opinion about the product or service,Hopefully its going to be a positive one.The social proof is important to increase trust and trustworthiness of the company and the company’s website”",
    button: "Name Lastname",
    position: "Position @Company",
  },
  {
    icon: img2,
    des:
      "“This is the customer Quote.The customer going to share their opinion about the product or service,Hopefully its going to be a positive one.The social proof is important to increase trust and trustworthiness of the company and the company’s website”",
    button: "Name Lastname",
    position: "Position @Company",
  },
  {
    icon: img3,
    des:
      "“This is the customer Quote.The customer going to share their opinion about the product or service,Hopefully its going to be a positive one.The social proof is important to increase trust and trustworthiness of the company and the company’s website”",
    button: "Name Lastname",
    position: "Position @Company",
  },
  {
    icon: img4,
    des:
      "“This is the customer Quote.The customer going to share their opinion about the product or service,Hopefully its going to be a positive one.The social proof is important to increase trust and trustworthiness of the company and the company’s website”",
    button: "Name Lastname",
    position: "Position @Company",
  },
];

const CustomCard: React.FC = () => {
  const CustomerEle: React.FC<Customer> = ({ icon, des, button, position }) => {
    return (
      <div
        className="flex w-303px h-400px p-[25px] flex-col items-center gap-[10px] flex-shrink-0 rounded-[12px] bg-[#f2f2f2] pt-[101px] relative ml-[30px]"
      >
        <div className="flex absolute right-76px -top-[66px] justify-center items-center w-[150px] h-[150px] flex-shrink-0 rounded-[150px] overflow-hidden">
          <img src={icon} alt="" />
        </div>
        <p className="w-[262px] text-[rgba(0,_0,_0,_0.81)] text-center font-[Inter] text-[16px] italic font-light leading-[20px]">
          {des}
        </p>
        <p className="text-[#000] font-[Inter] text-[16px] not-italic font-bold leading-[20px]">
          {button}
        </p>
        <p className="text-[rgba(0,_0,_0,_0.55)] font-[Inter] text-[16px] not-italic font-medium">
          {position}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex w-4/5 items-center justify-between ml-[4%] mt-[7%] gap-[15px] ">
        {customers.map((customer, index) => (
          <CustomerEle
            key={index}
            icon={customer.icon}
            des={customer.des}
            button={customer.button}
            position={customer.position}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCard;
