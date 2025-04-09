import React from "react";
import PlanItem from "./PlanItem";

const SavingPlan = () => {
  const savingPlanItems = [
    {
      planTitle: "Bali Vacation",
      savedAmount: 1950.21,
      totalAmount: 4000.0,
      targetDate: "2022-08-25",
      color: "#4745A4",
    },
    {
      planTitle: "New Gadget",
      savedAmount: 790.21,
      totalAmount: 1000,
      targetDate: "2022-08-25",
      color: "#DD9802",
    },
    {
      planTitle: "Chairty",
      savedAmount: 32.11,
      totalAmount: 100,
      targetDate: "2022-08-25",
      color: "#3BBB6E",
    },
  ];
  return (
    <div className="h-[430px] p-4 rounded-2xl bg-white flex flex-col gap-6">
      <div className="flex justify-between items-center x">
        <h2 className="text-lg font-bold tracking-tight">Saving Plan</h2>
        <a href="#" className="text-[#4745A4]">
          See All
        </a>
      </div>
      <hr className="text-[#0D163A]/20" />
      <div className="flex flex-col gap-4">
        {savingPlanItems.map((item, index) => (
          <PlanItem planItemData={item} key={item.planTitle} />
        ))}
      </div>
    </div>
  );
};

export default SavingPlan;
