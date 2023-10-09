import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void; //  onClick is a function with no arguments and no return value
  disabled?: boolean; // Optional prop
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button className="bg-[#3B82F6] flex px-[35px] py-[21px] justify-center items-center gap-[28px] border-[1px] border-[solid] border-[#3B82F6] text-[#FFF] font-[Inter] text-[18px] not-italic font-medium leading-[normal] h-[30px] cursor-pointer hover:text-black hover:bg-transparent" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
