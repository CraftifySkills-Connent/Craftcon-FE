import React from "react";
import { User } from "./ResultCard";

const SearchStats: React.FC<{ data: User[]; searchValue: string }> = ({
  searchValue,
  data,
}) => {
  return (
    <div>
      {searchValue && (
        <div className="text-[14px] md:text-[24px] flex items-center justify-between border-b border-b-[#EAECF0] pb-[2rem]">
          <div className="font-normal">
            <span>Results for </span>{" "}
            <span className="font-semibold text-[#016FED]">
              "{searchValue}"
            </span>
          </div>
          <span className="text-[14px] md:text-[24px] text-[#101828]">
            {data?.length} found
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchStats;
