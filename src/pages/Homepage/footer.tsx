import React from "react";
import { ReactComponent as CraftconLogo } from "../../assets/images/craftcon.svg";

const Footer: React.FC = () => {
  return (
    <div className="mt-[86px] px-[88px] border-gray-200 bg-light pt-[50px]">
      <div className="grid items-center justify-center pb-[46px]">
        <div className="flex justify-center">
          <CraftconLogo className="mb-[20px]" />
        </div>
        <h5 className="font-semibold text-[24px] leading-[31.5px] max-w-[597px] text-secondary text-center mt-[20px]">
          Get top rated service providers give you a solution to your problems
        </h5>
      </div>
    </div>
  );
};

export default Footer;
