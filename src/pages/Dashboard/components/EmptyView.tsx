import React from "react";
import { ReactComponent as EmptyBgImage } from "../../../assets/images/empty-search.svg";

const EmptyView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyBgImage className="hidden md:flex" />
      <EmptyBgImage width={327} height={216} className="md:hidden flex" />
      <div className="text-[#6B6B6B] flex flex-col items-center justify-center text-[12px] md:text-[16px]">
        <span className="leading-[26px] text-center">
          - Check your spelling for typing errors
        </span>
        <span className="leading-[26px] text-center">
          - Try searching with short and simple keywords
        </span>
        <span className="leading-[26px] text-center">
          - Try searching more general terms - you can then filter the search
          results
        </span>
      </div>
    </div>
  );
};

export default EmptyView;
