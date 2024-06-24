import React from "react";
import { ReactComponent as BigStar } from "../../assets/icons/big-star.svg";
import { ReactComponent as SmallStar } from "../../assets/icons/small-star.svg";
import { ReactComponent as AcRepairs } from "../../assets/icons/ac-repairs.svg";
import { ReactComponent as Cleaning } from "../../assets/icons/cleaning.svg";
import { ReactComponent as Electrical } from "../../assets/icons/electrical-services.svg";
import { ReactComponent as Laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as Plumbing } from "../../assets/icons/plumbing.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 1,
      icon: <Plumbing />,
      title: "Plumbing services",
      subtitle: "Book a professional plumber to help fix your home",
    },
    {
      id: 2,
      icon: <Laundry />,
      title: "Laundry services",
      subtitle: "Book a professional laundry service",
    },
    {
      id: 3,
      icon: <Cleaning />,
      title: "Cleaning services",
      subtitle: "Book a professional cleaning service",
    },
    {
      id: 4,
      icon: <Electrical />,
      title: "Electrical services",
      subtitle: "Book a professional electrician",
    },
    {
      id: 5,
      icon: <AcRepairs />,
      title: "AC repairs services",
      subtitle: "Book a professional AC repair service",
    },
    {
      id: 6,
      children: (
        <div className="flex justify-center flex-col gap-[25px] px-[25px] py-[25px] max-w-[400px] h-[295px] shadow-service-box rounded-[10px] bg-[#016FED]">
          <h6 className="text-[#F4F9FF] font-bold text-[24px] leading-[32px]">
            Explore our services and solutions, Trusted service providers
          </h6>
          <div className="">
            <Button
              variant="outlined"
              onClick={() => navigate("/signup")}
              sx={{
                border: "1.43px solid #FFFFFF",
                fontFamily: "Inter",
                padding: "8px 12px",
                borderRadius: "8px",
                color: "#FFFFFF",
                textTransform: "capitalize",
                ":hover": {
                  border: "1.43px solid #FFFFFF",
                },
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="hidden md:block">
        <BigStar />
      </div>
      <div className="flex items-center justify-center pb-[46px]">
        <div className="">
          <h5 className="font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-secondary text-center md:text-left tracking-[-2%] mb-2">
            Check some of our <span className="text-primary">top rated</span>{" "}
            services
          </h5>
          <p className="font-medium text-[16px] leading-[24px] text-tertiary text-center">
            We got you covered whenever you need a professional service
          </p>
        </div>
        <SmallStar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[46px] gap-x-[18px]">
        {servicesData.map(({ icon, title, subtitle, id, children }, index) => (
          <React.Fragment key={id}>
            {children ? (
              children
            ) : (
              <div className="bg-service-box bg-left-top bg-no-repeat flex flex-col justify-center gap-[20px] px-[25px] py-[25px] max-w-[400px] h-[295px] shadow-service-box rounded-[10px]">
                <div className="flex items-center justify-start">{icon}</div>
                <div className="flex flex-col justify-center gap-[8px] pr-[40px]">
                  <h6 className="font-semibold text-[24px] leading-[32px] text-secondary">
                    {title}
                  </h6>
                  <p className="font-medium text-[16px] leading-[24px] text-tertiary">
                    {subtitle}
                  </p>
                </div>
                <span className="font-bold text-tertiary text-[36px] text-right">{`0${index + 1}`}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Services;
