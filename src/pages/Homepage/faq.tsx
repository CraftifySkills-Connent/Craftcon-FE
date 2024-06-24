import React, { useState } from "react";
import { ReactComponent as FaqImg } from "../../assets/images/faq.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import faqItems from "../../constants/content/faqItems.json";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-16 lg:pt-12 pb-4 lg:pb-6 px-4">
      <div className="hidden lg:block w-full lg:w-auto mb-6 lg:mb-0">
        <FaqImg className="w-full max-w-xs lg:max-w-none lg:w-auto" />
      </div>
      <div className="flex flex-col w-full lg:w-4/6 gap-10">
        <div className="flex lg:justify-start">
          <h5 className="font-bold text-2xl lg:text-3xl text-secondary text-left">
            FAQ
          </h5>
        </div>
        {faqItems.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className="border-b border-ashen pl-4 lg:pl-8 pr-4 lg:pr-8"
          >
            <div
              className="flex justify-between items-center pt-4 pb-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-medium text-lg lg:text-xl text-tertiary">
                {item.question}
              </p>
              {openIndex === index ? (
                <ArrowUp className="text-tertiary" />
              ) : (
                <ArrowDown className="text-tertiary" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-sm lg:text-base text-tertiary font-normal pt-0 pb-4">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
