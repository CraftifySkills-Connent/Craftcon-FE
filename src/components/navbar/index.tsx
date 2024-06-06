import React from "react";
import { ReactComponent as CraftconLogo } from "../../assets/images/craftcon.svg";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../button";

const navItems = [
  { title: "Home", link: "" },
  { title: "Services", link: "" },
  { title: "About Us", link: "" },
  { title: "Professionals", link: "" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-[88px] py-[20px] w-full">
      <CraftconLogo />
      <div className="flex items-center gap-[50px]">
        {navItems?.map((item) => (
          <div key={item?.title} className="">
            <Link to={item?.link} className="text-gray hover:text-primary">
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[21px]">
        <CustomButton
          variant="outlined"
          onClick={() => navigate("/login")}
          buttonText="Sign in"
        />
        <CustomButton
          variant="contained"
          onClick={() => navigate("/signup")}
          disableElevation
          buttonText="Sign up"
        />
      </div>
    </div>
  );
};

export default Navbar;
