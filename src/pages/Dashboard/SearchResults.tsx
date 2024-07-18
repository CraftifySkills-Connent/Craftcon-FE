import React from "react";
import ResultCard, { User } from "./components/ResultCard";
import { EmptyView, SearchStats } from "./components";
import { Button } from "../../components";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-icon.svg";

const SearchResults: React.FC<{ data: User[]; searchValue: string }> = ({
  data,
  searchValue,
}) => {
  return (
    <div className="bg-white p-0 md:p-[1.5rem] flex flex-col gap-[29px] rounded-[8px] w-full">
      <SearchStats data={data} searchValue={searchValue} />
      {data?.length > 0 ? (
        <>
          {data?.map((user) => <ResultCard key={user?.name} user={user} />)}
          <div className="flex items-center justify-between">
            <Button className="rounded-[8px] border-[1px] border-[#D0D5DD] flex items-center py-[8px] px-[12px] gap-[10px] text-[14px] font-semibold text-[#344054]">
              <>
                <PlusIcon /> Previous
              </>
            </Button>
            <span className="text-[14px] font-semibold text-[#344054]">
              Page 1 of 30
            </span>
            <Button className="rounded-[8px] border-[1px] border-[#D0D5DD] flex items-center py-[8px] px-[12px] gap-[10px] text-[14px] font-semibold text-[#344054]">
              <>
                Next <PlusIcon />
              </>
            </Button>
          </div>
        </>
      ) : (
        <EmptyView />
      )}
    </div>
  );
};

export default SearchResults;
