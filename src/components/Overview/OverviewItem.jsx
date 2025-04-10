import { ArrowRight, Export } from "iconsax-react";
import React from "react";
import useCountUp from "../../hooks/useCountUp";

const OverviewItem = ({ overviewItem }) => {
  const animatedCount = useCountUp(overviewItem.amount, 500);
  const count = overviewItem.countAnimation
    ? animatedCount
    : overviewItem.amount;

  return (
    <div
      className={`p-4  flex flex-col gap-4 border border-secondary rounded-xl
      ${overviewItem.bgColor ? "text-white" : "text-primary"}`}
      style={{ backgroundColor: overviewItem.bgColor }}
    >
      <div className="flex items-center justify-start gap-2">
        <div
          className={`w-12 h-12 rounded-full border ${
            overviewItem.bgColor ? "border-[#DEDEDE33]" : " border-[#EEEEEE]"
          } flex items-center justify-center`}
        >
          {overviewItem.icon}
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-base font-semibold">{overviewItem.title}</h3>
          <p
            className={`text-xs  flex items-center gap-2 ${
              overviewItem.bgColor ? "text-[#DEDEDE]/60" : "text-primary-light"
            }`}
          >
            <Export size={14} color={overviewItem.changeColor} variant="Bulk" />
            {overviewItem.change}% compared with last month
          </p>
        </div>
      </div>
      <hr style={{ color: overviewItem?.bgColor && "rgba(256,256,256,0.4)" }} />
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-semibold ">$ {count}</p>
        <ArrowRight variant="Broken" size={20} />
      </div>
    </div>
  );
};

export default OverviewItem;
