import React from "react";
import { ReactComponent as FaqImg } from "../../assets/images/faq.svg";

const FAQ: React.FC = () => {
  return (
    <div className="flex items-center gap-[140px] pt-[71px]">
      <FaqImg />
      <div className="flex flex-col w-[700px] gap-[18px]">
        <div className="flex gap-[18px]">
          <h5 className="font-bold text-[36px] leading-[47px] text-secondary">
            FAQ
          </h5>
        </div>
        <p className="text-[18px] leading-[23px] text-tertiary font-normal">
          We bring reliable professionals right to your door. From plumbers and
          electricians to cleaners and handymen, our platform connects you with
          skilled professionals for all your home service needs.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
