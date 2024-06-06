import React, { useState } from "react";
import { ReactComponent as FaqImg } from "../../assets/images/faq.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "Faq question 1", answer: "Faq answer 1" },
  { question: "Faq question 2", answer: "Faq answer 2" },
  { question: "Faq question 3", answer: "Faq answer 3" },
  { question: "Faq question 4", answer: "Faq answer 4" },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center gap-[50px] pt-[71px]">
      <FaqImg />
      <div className="flex flex-col w-[700px] gap-[18px]">
        <div className="flex">
          <h5 className="font-bold text-[36px] text-secondary">FAQ</h5>
        </div>
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-black">
            <div
              className="flex justify-between items-center py-[10px] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-[24px] leading-[23px] text-tertiary font-normal">
                {item.question}
              </p>
              {openIndex === index ? (
                <ArrowUp className="text-tertiary" />
              ) : (
                <ArrowDown className="text-tertiary" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-[16px] leading-[23px] text-tertiary font-normal py-[10px]">
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
