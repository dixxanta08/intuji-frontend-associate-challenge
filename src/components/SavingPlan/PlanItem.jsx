import React, { useMemo } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import useCountUp from "../../hooks/useCountUp";

const PlanItem = ({ planItemData }) => {
  const savedPercent = useMemo(
    () =>
      Math.floor((planItemData.savedAmount / planItemData.totalAmount) * 100),
    [planItemData.savedAmount, planItemData.totalAmount]
  );
  const count = useCountUp(savedPercent, 500);

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
        <p className="text-xs text-primary">Target: {formattedDate}</p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>
          <span className="text-base font-semibold text-primary">
            ${planItemData.savedAmount}
          </span>
          <span className="text-sm text-primary-light">
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
      <ProgressBar value={count} max={100} color={planItemData.color} />
    </div>
  );
};

export default PlanItem;
