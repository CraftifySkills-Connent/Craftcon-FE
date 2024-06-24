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
    <div className="flex items-center gap-[50px] pt-[71px] pb-[10px]">
      <FaqImg />
      <div className="flex flex-col w-[700px] gap-[43px]">
        <div className="flex">
          <h5 className="font-bold text-[36px] text-secondary">FAQ</h5>
        </div>
        {faqItems.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className="border-b-[1.4px] border-ashen border-solid pl-[32px] pr-[49px]"
          >
            <div
              className="flex justify-between items-center pt-0 pb-[28px] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-medium text-[24px] leading-[23px] text-tertiary">
                {item.question}
              </p>
              {openIndex === index ? (
                <ArrowUp className="text-tertiary" />
              ) : (
                <ArrowDown className="text-tertiary" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-[16px] leading-[23px] text-tertiary font-normal pt-0 pb-[28px]">
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
