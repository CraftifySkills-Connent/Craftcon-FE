import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortBy: React.FC = () => {
  return (
    <div>
      <div className="border-b border-[#EAECF0] pb-[32px]">
        <FormControl sx={{ minWidth: "100%" }} size="small">
          <InputLabel id="demo-select-small-label">Sort by</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            sx={{ display: "flex", alignItems: "center" }}
            label=""
            placeholder="Sort By"
            // IconComponent={<img src={Chevron} />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SortBy;
