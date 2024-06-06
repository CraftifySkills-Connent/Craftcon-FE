import React from "react";
import CustomButton from "../../components/button";
import { ReactComponent as BigStar } from "../../assets/icons/big-star.svg";
import { ReactComponent as ContactImg } from "../../assets/images/contact-us.svg";

const ContactUs: React.FC = () => {
  return (
    <div className="flex items-center gap-[140px] pt-[71px]">
      <div className="flex flex-col w-[700px] gap-[18px]">
        <div className="flex gap-[18px]">
          <h5 className="font-bold text-[36px] leading-[47px] text-secondary">
            We are available for{" "}
            <span className="text-primary">24/7 emergency</span> service
          </h5>
          <BigStar />
        </div>
        <p className="text-[18px] leading-[23px] text-tertiary font-normal">
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
      <ContactImg />
    </div>
  );
};

export default ContactUs;
