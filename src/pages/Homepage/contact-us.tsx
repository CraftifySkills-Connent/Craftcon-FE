import React from "react";
import CustomButton from "../../components/button";
import { ReactComponent as BigStar } from "../../assets/icons/big-star.svg";
import { ReactComponent as ContactImg } from "../../assets/images/contact-us.svg";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[140px] pt-[71px] px-4">
      <div className="flex flex-col w-full md:w-[700px] gap-[18px]">
        <div className="flex gap-[18px] items-start">
          <h5 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-secondary">
            We are available for{" "}
            <span className="text-primary">24/7 emergency</span> service
          </h5>
          <BigStar className="hidden md:block" />
        </div>
        <p className="text-[16px] md:text-[18px] leading-[23px] text-tertiary font-normal">
          We bring reliable professionals right to your door. From plumbers and
          electricians to cleaners and handymen, our platform connects you with
          skilled professionals for all your home service needs.
        </p>
        <div className="">
          <CustomButton
            variant="contained"
            onClick={() => console.log("log")}
            buttonText="Contact Us"
            disableElevation
            className="w-[128px] h-[48px]"
          />
        </div>
      </div>
      <ContactImg className="w-full md:w-auto" />
    </div>
  );
};

export default ContactUs;
