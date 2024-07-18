import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const Location: React.FC = () => {
  return (
    <div className="border-b border-[#EAECF0] pb-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h5 className="text-[#101828] text-[18px] font-medium">
          Location or distance:
        </h5>
        <div className="flex flex-col">
          <FormControlLabel
            control={<Checkbox />}
            label="2km"
            sx={{ color: "#667085", fontWeight: 500, fontSize: "15px" }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="5km"
            sx={{ color: "#667085", fontWeight: 500, fontSize: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
