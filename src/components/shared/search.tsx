import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

interface SearchProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, className }) => {
  return (
    <div className={className}>
      <div
        className={`flex items-center gap-[8px] border border-solid border-[#D0D5DD] py-[10px] px-[14px] rounded-[8px] shadow-search-input w-full md:w-[450px]`}
      >
        <SearchIcon />
        <input
          className="w-full"
          placeholder="Search for categories"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
