import { ArrowRight, Export } from "iconsax-react";
import React from "react";

const OverviewItem = ({ overviewItem }) => {
  return (
    <div
      className={`p-4 text-[#0D163A] flex flex-col gap-4 border border-[#DEDEDE]/70 rounded-xl
      ${overviewItem.bgColor && "text-white"}`}
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
              overviewItem.bgColor ? "text-[#DEDEDE]/60" : "text-[#0D163A]/60"
            }`}
          >
            <Export size={14} color={overviewItem.changeColor} variant="Bulk" />
            {overviewItem.change}% compared with last month
          </p>
        </div>
      </div>
      <hr className="text-[##0D163A]/20" />
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-semibold ">$ {overviewItem.amount}</p>
        <ArrowRight variant="Broken" size={20} />
      </div>
    </div>
  );
};

export default OverviewItem;
