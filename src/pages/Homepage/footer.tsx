import React from "react";
import { ReactComponent as CraftconLogo } from "../../assets/images/craftcon.svg";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", link: "" },
  { title: "Services", link: "" },
  { title: "About Us", link: "" },
  { title: "Professionals", link: "" },
];

const Footer: React.FC = () => {
  return (
    <div className="relative mt-[20px] md:mt-[50px] lg:mt-[86px] px-[20px] md:px-[50px] lg:px-[88px] bg-light pt-[20px] md:pt-[30px] lg:pt-[50px] pb-[20px] md:pb-[30px] lg:pb-[50px]">
      <div className="grid items-center justify-center pb-[50px] md:pb-[80px] lg:pb-[123px]">
        <div className="flex justify-center">
          <CraftconLogo className="mb-[10px] md:mb-[15px] lg:mb-[20px]" />
        </div>
        <h5 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] leading-[24px] md:leading-[28px] lg:leading-[31.5px] max-w-[100%] md:max-w-[80%] lg:max-w-[597px] text-secondary text-center mt-[10px] md:mt-[15px] lg:mt-[20px]">
          Get top rated service providers give you a solution to your problems
        </h5>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-[10px] md:gap-[30px] lg:gap-[50px]">
        {navItems?.map((item) => (
          <div key={item?.title}>
            <Link to={item?.link} className="text-gray">
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-primary"></div>
    </div>
  );
};

export default Footer;
