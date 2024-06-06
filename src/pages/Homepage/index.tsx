import React from "react";
import { Navbar } from "../../components";
import Hero from "./hero";
import Services from "./services";
import ContactUs from "./contact-us";
import FAQ from "./faq";

const Homepage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-[88px]">
        <Hero />
        <Services />
        <ContactUs />
        <FAQ />
      </div>
    </div>
  );
};

export default Homepage;
