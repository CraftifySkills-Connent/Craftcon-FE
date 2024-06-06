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
    <div className="relative mt-[86px] px-[88px] bg-light pt-[50px] pb-[50px]">
      <div className="grid items-center justify-center pb-[123px]">
        <div className="flex justify-center">
          <CraftconLogo className="mb-[20px]" />
        </div>
        <h5 className="font-semibold text-[24px] leading-[31.5px] max-w-[597px] text-secondary text-center mt-[20px]">
          Get top rated service providers give you a solution to your problems
        </h5>
      </div>
      <div className="flex justify-center items-center gap-[50px]">
        {navItems?.map((item) => (
          <div key={item?.title} className="">
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
