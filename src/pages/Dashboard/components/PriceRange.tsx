import { Slider } from "@mui/material";
import React from "react";
import CurrencyFormatter from "../../../functions/CurrencyFormatter";

const marks = [
  {
    value: 0,
    label: CurrencyFormatter({ value: 2000 }),
  },
  {
    value: 100,
    label: CurrencyFormatter({ value: 10000 }),
  },
];

const PriceRange: React.FC = () => {
  return (
    <div className="border-b border-[#EAECF0] pb-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h5 className="text-[#101828] text-[18px] font-medium">Price Range</h5>
        <Slider marks={marks} />
        <input
          type="text"
          name="amount"
          placeholder="Enter Amount"
          className="outline outline-1 outline-gray-200 px-4 w-full h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
        />
      </div>
    </div>
  );
};

export default PriceRange;
