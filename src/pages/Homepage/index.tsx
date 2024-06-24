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
      {" "}
      <Navbar />
      <main className="content container mx-auto lg:px-[88px] px-4 py-8 grid grid-cols-1 md:grid-cols-auto gap-4">
        {" "}
        <Hero />
        <Services />
        <ContactUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
