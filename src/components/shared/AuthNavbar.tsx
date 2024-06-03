import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

interface AuthNavbarProps {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

const AuthNavbar: React.FC<AuthNavbarProps> = ({ to, children, className }) => {
  return (
    <nav className="flex bg-[#fff] p-4 shadow-md h-[95px]">
      <div className="container mx-auto flex items-center justify-between text-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <Logo />
        </Link>
        <div className="flex space-x-4">
          <Link to={to} className={className}>
            {children}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
