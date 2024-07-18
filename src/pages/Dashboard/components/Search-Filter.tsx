import React from "react";
import { Button, SearchInput } from "../../../components";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";

const FiltSearchBox: React.FC<{
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterClick?: () => void;
}> = ({ value, onChange, onFilterClick }) => {
  return (
    <div className="md:hidden flex">
      <div className="flex w-full items-center justify-between gap-[18px]">
        <SearchInput value={value} onChange={onChange} />
        <Button
          onClick={onFilterClick}
          className="p-[10px] rounded-[8px] border-[1px] border-[#D0D5DD] w-[44px] h-[44px]"
          label={<FilterIcon />}
        />
      </div>
    </div>
  );
};

export default FiltSearchBox;
