import React, { useMemo, useState } from "react";
import { Button, Layout } from "../../components";
import FilterBox from "./FilterBox";
import SearchResults from "./SearchResults";
import { data } from "../../data/usersData";
import { useDebounce, useFilter } from "../../utils";
import { FiltSearchBox } from "./components";
import { Modal } from "@mui/material";

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 700);
  const [showFilter, setShowFilter] = useState(false);

  const memoizedData = useMemo(() => {
    if (debouncedSearchValue) {
      const filteredLogs = useFilter(data, debouncedSearchValue);
      return filteredLogs;
    } else {
      return data;
    }
  }, [debouncedSearchValue, data]);

  return (
    <Layout
      token="1234"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className=""
    >
      <div className="relative flex md:flex-row flex-col items-start gap-[22px] px-[16px] md:px-[100px] pt-[100px] pb-[1.6rem] w-full md:pt-[163px] bg-white md:bg-light h-[100%]">
        <FiltSearchBox
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFilterClick={() => setShowFilter(true)}
        />
        <FilterBox className="hidden md:block" />
        <SearchResults data={memoizedData} searchValue={debouncedSearchValue} />
        <Modal open={showFilter} onClose={() => setShowFilter(false)}>
          <div className="rounded-t-[15px] bg-white fixed left-0 right-0 bottom-0 w-[375px] h-[554px] overflow-y-scroll">
            <div className="flex items-center justify-between p-[1.5rem]">
              <h5 className="text-[20px] font-semibold text-[#101828]">
                Filter By
              </h5>
              <span
                onClick={() => setShowFilter(false)}
                className="block w-6 h-6 text-[20px] font-semibold text-black cursor-pointer"
              >
                ✕
              </span>
            </div>
            <FilterBox className="mb-[92px]" />
            <div className="fixed left-0 right-0 bottom-0 bg-white px-[1.5rem] h-[92px] flex items-center justify-center">
              <Button className="bg-[#016FED] rounded-[5px] py-[8px] px-[12px] text-center w-full text-white font-semibold">
                Apply
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Dashboard;
