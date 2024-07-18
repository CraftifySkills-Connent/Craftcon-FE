import { Radio } from "@mui/material";
import React from "react";

const reviewLabels = [
  { id: "1", label: "4.5 and above" },
  { id: "2", label: "4.0 - 4.5" },
  { id: "3", label: "3.5 and 4.0" },
  { id: "4", label: "3.0 - 3.5" },
  { id: "5", label: "2.5 - 3.0" },
];

const Reviews: React.FC = () => {
  return (
    <div className="border-b border-[#EAECF0] pb-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h5 className="text-[#101828] text-[18px] font-medium">Reviews</h5>
        <div className="">
          {reviewLabels?.map((item) => (
            <div key={item?.id} className="flex items-center justify-between">
              <span className="font-medium text-[16px] text-[#505050]">
                {item?.label}
              </span>
              <Radio />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
