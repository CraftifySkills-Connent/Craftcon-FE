import React, { useState } from "react";
import { ReactComponent as FaqImg } from "../../assets/images/faq.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Who are we?",
    answer:
      "We are Craftcon, top-rated professionals dedicated to providing reliable and quality services right to your doorstep. Our team includes experienced plumbers, electricians, cleaners, and handymen ready to assist you.",
  },
  {
    question: "What kind of services can I get?",
    answer:
      "We offer a wide range of services including plumbing, laundry, cleaning, AC repair, and electrical services. Our professionals are equipped to handle various household needs efficiently and effectively.",
  },
  {
    question: "How do I know the professionals are trustworthy?",
    answer:
      "All our professionals undergo a thorough background check and verification process to ensure they are reliable and trustworthy. Your safety and satisfaction are our top priorities.",
  },
  {
    question: "What if they don't serve me well?",
    answer:
      "At CraftCon, customer satisfaction is our top priority. If you are not satisfied with the service provided, please contact our customer support team immediately. We will work to resolve the issue promptly, whether that means providing a refund, offering a discount on future services, or scheduling a follow-up visit to ensure the job is completed to your satisfaction. Your feedback is invaluable to us as we continually strive to improve our services and exceed your expectations.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center gap-[50px] pt-[71px]">
      <FaqImg />
      <div className="flex flex-col w-[700px] gap-[43px]">
        <div className="flex">
          <h5 className="font-bold text-[36px] text-secondary">FAQ</h5>
        </div>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b-[1.4px] border-ashen border-solid pl-[32px] pr-[49px]"
          >
            <div
              className="flex justify-between items-center pt-0 pb-[28px] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font- text-[24px] leading-[23px] text-tertiary">
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
