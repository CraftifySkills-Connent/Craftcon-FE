import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const categories = [
  { id: "car-repair", name: "Car Repair" },
  { id: "hair-dresser", name: "Hairdresser" },
  { id: "laundry", name: "Laundry" },
  { id: "cleaning", name: "Cleaning" },
  { id: "plumbing", name: "Plumbing" },
  { id: "dog-walking", name: "Dog Walking" },
  { id: "electrical", name: "Electrical" },
];

const Categories: React.FC = () => {
  return (
    <div className="border-b border-[#EAECF0] pb-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h5 className="text-[#101828] text-[18px] font-medium">Categories</h5>
        <div className="flex flex-col">
          {categories?.map((item) => (
            <div key={item.id} className="">
              <FormControlLabel
                control={<Checkbox />}
                label={item.name}
                sx={{ color: "#667085", fontWeight: 500, fontSize: "15px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
