import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const PlanItem = ({ planItemData }) => {
  const savedPercent = Math.floor(
    (planItemData.savedAmount / planItemData.totalAmount) * 100
  );
  const formattedDate = new Date(planItemData.targetDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-sm">{planItemData.planTitle}</h3>
        <p className="text-xs text-[#0D163A]">Target: {formattedDate}</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>
          <span className="text-base font-semibold text-[#0D163A]">
            ${planItemData.savedAmount}
          </span>
          <span className="text-sm text-[#0D163A]/50">
            {" "}
            / ${planItemData.totalAmount}
          </span>
        </p>
        <p
          className="font-semibold text-sm"
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
