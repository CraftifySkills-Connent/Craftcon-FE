import React from "react";
import { ReactComponent as GoldCheck } from "../../../assets/icons/gold-check.svg";
import { ReactComponent as GoldStar } from "../../../assets/icons/gold-star.svg";
import { ReactComponent as LocationPin } from "../../../assets/icons/location-pin.svg";
import { ReactComponent as Portfolio } from "../../../assets/icons/briefcase.svg";
import { ReactComponent as CreditCard } from "../../../assets/icons/credit-card.svg";
import { ReactComponent as Dot } from "../../../assets/icons/dot.svg";
import CurrencyFormatter from "../../../functions/CurrencyFormatter";

export interface User {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  service: string;
  price: number;
  paymentMethod: string;
}

const ResultCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="">
      <div className="flex items-start gap-[14px] border-b w-full border-b-[#EAECF0] pb-[2rem]">
        <img
          src="/src/assets/images/profile-image.svg"
          alt=""
          className="md:w-[131px] md:h-[131px] w-[77px] h-[77px] obj-contain"
        />
        <div className="flex flex-col gap-[8px] md:gap-[13px]">
          <div className="flex items-center gap-[5px]">
            <h5 className="text-[12px] md:text-[20px] font-semibold text-black">
              {user?.name}
            </h5>
            <GoldCheck className="hidden md:flex" />
            <GoldCheck width={16} height={16} className="md:hidden flex" />
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-[2px]">
              <GoldStar className="hidden md:flex" />
              <GoldStar width={12} height={12} className="md:hidden flex" />
              <span className="text-gray text-[10px] md:text-[16px] font-medium">
                {user?.rating}
              </span>
            </div>
            <Dot className="hidden md:flex" />
            <Dot width={3} height={3} className="md:hidden flex" />
            <span className="text-gray text-[10px] md:text-[16px] font-medium">
              {user?.reviews} reviews
            </span>
          </div>
          <div className="flex items-center gap-[5px] md:gap-[8px]">
            <LocationPin />
            <span className="text-gray text-[10px] md:text-[16px] font-medium">
              {user?.location}
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-[8px] md:gap-[16px]">
            <div className="flex items-center gap-[5px] md:gap-[8px]">
              <Portfolio className="md:flex hidden" />
              <Portfolio width={12} height={12} className="md:hidden flex" />
              <span className="text-gray text-[10px] md:text-[16px] font-medium">
                {user?.service}
              </span>
            </div>
            <Dot className="hidden md:flex" />
            <Dot width={3} height={3} className="md:hidden flex" />
            <div className="text-gray text-[10px] md:text-[16px] font-medium">
              {CurrencyFormatter({ value: user?.price })}
            </div>
            <Dot className="hidden md:flex" />
            <Dot width={3} height={3} className="md:hidden flex" />
            <div className="flex items-center gap-[5px] md:gap-[8px]">
              <CreditCard className="hidden md:flex" />
              <CreditCard width={12} height={12} className="md:hidden flex" />
              <span className="text-gray text-[10px] md:text-[16px] font-medium">
                {user?.paymentMethod}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
