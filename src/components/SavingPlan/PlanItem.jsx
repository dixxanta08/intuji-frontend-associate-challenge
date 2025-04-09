import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const PlanItem = ({ key, planItemData }) => {
  const savedPercent = Math.floor(
    (planItemData.savedAmount / planItemData.totalAmount) * 100
  );
  const formattedDate = new Date(planItemData.targetDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div key={key} className="p-2">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium ">{planItemData.planTitle}</h3>
        <p className="text-xs text-[#0D163A]">Target: {formattedDate}</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>
          <span className="text-lg font-semibold text-[#0D163A]">
            ${planItemData.savedAmount}
          </span>
          <span className="text-sm text-[#0D163A]/50">
            {" "}
            / ${planItemData.totalAmount}
          </span>
        </p>
        <p
          className="font-semibold text-[18px]"
          style={{ color: planItemData.color }}
        >
          {savedPercent}%
        </p>
      </div>
      <ProgressBar value={savedPercent} max={100} color={planItemData.color} />
    </div>
  );
};

export default PlanItem;
