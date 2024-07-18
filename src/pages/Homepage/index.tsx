import React from "react";

import { Layout } from "../../components";
import Hero from "./hero";
import Services from "./services";
import ContactUs from "./contact-us";
import FAQ from "./faq";

const Homepage: React.FC = () => {
  return (
    <Layout className="mb-[20px] md:mb-[50px] lg:mb-[86px] content container mx-auto lg:px-[88px] px-4 py-8 grid grid-cols-1 md:grid-cols-auto gap-4">
      <>
        <Hero />
        <Services />
        <ContactUs />
        <FAQ />
      </>
    </Layout>
  );
};

export default Homepage;
