import React from "react";

import { ReactComponent as HeroBanner } from "../../assets/images/banner.svg";
import { ReactComponent as HeroBannerMobile } from "../../assets/images/banner-mobile.svg";
import CustomButton from "../../components/button";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex flex-col md:flex-row pt-24 pb-5 items-center justify-center">
      <Box className="flex flex-col gap-10 mb-8 md:mb-0 md:gap-10 w-full md:w-auto">
        <Box className="flex flex-col gap-4 w-full md:w-[580px]">
          <h1 className="text-primary font-bold leading-tight text-3xl md:text-5xl capitalize">
            top-rated professionals
            <br />
            <span className="text-secondary capitalize">At your doorstep.</span>
          </h1>
          <p className="text-lg leading-6 text-tertiary">
            We bring reliable professionals right to your door, from plumbers
            and electricians to cleaners and handymen.
          </p>
        </Box>
        <Box className="block md:hidden w-full md:w-auto">
          <HeroBannerMobile className="w-full" />
        </Box>
        <Box className="flex flex-col md:flex-row items-center gap-4 w-full">
          <CustomButton
            variant="contained"
            onClick={() => navigate("/signup")}
            buttonText="Get Started"
            disableElevation
            className="w-full md:w-[128px] h-12"
          />
          <CustomButton
            variant="outlined"
            onClick={() => navigate("/login")}
            buttonText="Sign in"
            className="w-full md:w-[81px] h-12"
          />
        </Box>
      </Box>
      <Box className="hidden md:block w-full md:w-auto">
        <HeroBanner className="w-full" />
      </Box>
    </Box>
  );
};

export default Hero;
