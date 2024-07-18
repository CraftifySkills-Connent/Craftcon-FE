import React from "react";
import { Link } from "react-router-dom";

// assets
import { ReactComponent as Logo } from "../../assets/images/craftcon.svg";

interface AuthNavbarProps {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

const AuthNavbar: React.FC<AuthNavbarProps> = ({ to, children, className }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white p-4 shadow-sm h-16">
      <div className="container mx-auto flex items-center justify-between">
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
