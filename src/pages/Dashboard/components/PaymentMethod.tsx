import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const paymentMethods = [
  { id: "credit-card", name: "Credit Card" },
  { id: "cash", name: "Cash" },
];

const PaymentMethod: React.FC = () => {
  return (
    <div className="pb-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h5 className="text-[#101828] text-[18px] font-medium">
          Payment Method
        </h5>
        <div className="flex flex-col">
          {paymentMethods?.map((item) => (
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

export default PaymentMethod;
