import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as CraftconLogo } from "../../assets/images/craftcon.svg";
import CustomButton from "./CustomButton";
import { SearchInput } from "..";

const navItems = [
  { title: "Home", link: "/dashboard" },
  { title: "Services", link: "" },
  { title: "About Us", link: "" },
  { title: "Professionals", link: "" },
];

interface NavbarProps {
  token?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ token, value, onChange }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-20 py-5 w-full bg-white z-50">
      <CraftconLogo className="cursor-pointer" onClick={() => navigate("/")} />
      {token && (
        <SearchInput
          value={value}
          onChange={onChange}
          className="hidden md:block"
        />
      )}
      <div className="hidden md:flex items-center gap-12">
        {navItems?.map((item) => (
          <div key={item?.title}>
            <Link to={item?.link} className="text-gray-700 hover:text-primary">
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
      {token ? null : (
        <div className="hidden md:flex items-center gap-6">
          <CustomButton
            type="button"
            variant="outlined"
            onClick={() => navigate("/login")}
            buttonText="Sign in"
          />
          <CustomButton
            type="button"
            variant="contained"
            onClick={() => navigate("/signup")}
            disableElevation
            buttonText="Sign up"
          />
        </div>
      )}
      <div className="md:hidden flex items-center relative z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className={`space-y-1 ${isMenuOpen ? "hidden" : ""}`}>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-black transition-opacity duration-300 ml-auto`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300`}
            ></span>
          </div>
          {isMenuOpen && (
            <span className="block w-6 h-6 text-2xl text-black">✕</span>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 md:hidden">
          <div
            className={`flex flex-col items-center justify-center transition-transform duration-300 transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-8 mt-40">
              {navItems?.map((item) => (
                <Link
                  key={item?.title}
                  to={item?.link}
                  className="text-gray-700 hover:text-primary text-xl py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            {token ? null : (
              <div className="flex flex-col gap-4 mt-8 w-full px-6">
                <CustomButton
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  buttonText="Sign in"
                  className="w-full h-12"
                />
                <CustomButton
                  type="button"
                  variant="contained"
                  onClick={() => {
                    navigate("/signup");
                    setIsMenuOpen(false);
                  }}
                  disableElevation
                  buttonText="Sign up"
                  className="w-full h-12"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
