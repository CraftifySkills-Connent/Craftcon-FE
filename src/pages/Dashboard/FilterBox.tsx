import React from "react";
import {
  Categories,
  Location,
  PaymentMethod,
  PriceRange,
  Reviews,
  SortBy,
} from "./components";
import { Button } from "../../components";

interface FilterProps {
  className?: string;
}

const FilterBox: React.FC<FilterProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="bg-white p-[1.5rem] flex flex-col gap-[29px] rounded-[6px] w-full md:w-[398px]">
        <SortBy />
        <Location />
        <Categories />
        <PriceRange />
        <Reviews />
        <PaymentMethod />
        <div className="hidden h-[92px] md:flex items-center justify-center">
          <Button className="bg-[#016FED] rounded-[5px] py-[8px] px-[12px] text-center w-full text-white font-semibold">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
