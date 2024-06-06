import React from "react";
import { ReactComponent as HeroBanner } from "../../assets/images/banner.svg";
import CustomButton from "../../components/button";
import { Box } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box className="flex py-[20px] items-center justify-center">
      <Box className="flex flex-col gap-[38px]">
        <Box className="flex flex-col gap-[15px] w-[580px]">
          <h1 className="text-primary font-bold leading-[63px] text-[48px] capitalize">
            top-rated professionals
            <br />
            <span className="text-secondary capitalize">At your doorstep.</span>
          </h1>
          <p className="text-[18px] leading-[23px] text-tertiary">
            We bring reliable professionals right to your door, from plumbers
            and electricians to cleaners and handymen.
          </p>
        </Box>
        <Box className="flex items-center gap-[16px]">
          <CustomButton
            variant="contained"
            onClick={() => console.log("login")}
            buttonText="Get Started"
            disableElevation
            className="w-[128px] h-[48px]"
          />
          <CustomButton
            variant="outlined"
            onClick={() => console.log("signup")}
            buttonText="Sign in"
            className="w-[81px] h-[48px]"
          />
        </Box>
      </Box>
      <HeroBanner />
    </Box>
  );
};

export default Hero;
