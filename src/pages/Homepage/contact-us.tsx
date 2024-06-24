import React from "react";
import CustomButton from "../../components/button";
import { ReactComponent as BigStar } from "../../assets/icons/big-star.svg";
import { ReactComponent as ContactImg } from "../../assets/images/contact-us.svg";
import { ReactComponent as ContactImgMobile } from "../../assets/images/contact-us-mobile.svg";
import { Box } from "@mui/material";

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
        <Box className="block md:hidden w-full md:w-auto">
          <ContactImgMobile className="w-full" />
        </Box>
        <div className="">
          <CustomButton
            variant="contained"
            onClick={() => console.log("log")}
            buttonText="Contact Us"
            disableElevation
            className="md:w-[128px] h-[48px] w-full"
          />
        </div>
      </div>
      <Box className="hidden md:block w-full md:w-auto">
        <ContactImg className="w-full" />
      </Box>
    </div>
  );
};

export default ContactUs;
