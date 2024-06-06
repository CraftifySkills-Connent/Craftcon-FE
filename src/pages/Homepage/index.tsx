import React from "react";
import { Navbar } from "../../components";
import Hero from "./hero";
import Services from "./services";
import ContactUs from "./contact-us";
import FAQ from "./faq";
import Footer from "./footer";

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
      <Footer />
    </div>
  );
};

export default Homepage;
