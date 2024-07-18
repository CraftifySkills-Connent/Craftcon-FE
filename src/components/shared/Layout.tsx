import React from "react";
import Navbar from "./Navbar";
import Footer from "../footer";

const Layout: React.FC<{
  children: React.ReactElement;
  token?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ children, token, value, onChange, className }) => {
  return (
    <div>
      <Navbar token={token} value={value} onChange={onChange} />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
