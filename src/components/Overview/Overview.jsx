import { DirectDown, DirectUp, EmptyWallet, Save2 } from "iconsax-react";
import React from "react";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const overviewItems = [
    {
      icon: <EmptyWallet size="32" variant="Bulk" color="#ffffff" />,
      title: "Your Balance",
      change: 15,
      amount: 28891.138,
      color: "#FFFFFF",
      bgColor: "#4745A4",
      changeColor: "#3BBB6E",
    },
    {
      icon: <Save2 size={32} variant="Bulk" color="#3BBB6E" />,
      title: "Saving",
      change: 10,
      amount: 1050.44,
      color: "#3BBB6E",
      changeColor: "#FE3766",
    },
    {
      icon: <DirectUp size={32} variant="Bulk" color="#F9BA33" />,
      title: "Expenses",
      change: 2,
      amount: 200.31,
      color: "#F9BA33",
      changeColor: "#F9BA33",
    },
    {
      icon: <DirectDown size={32} variant="Bulk" color="#1775E4" />,
      title: "Incomes",
      change: 8,
      amount: 21121.0,
      color: "#1775E4",
      changeColor: "#1775E4",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-lg h-[430px]">
      <h2 className="text-lg font-semibold">Overview</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {overviewItems.map((item, index) => (
          <OverviewItem overviewItem={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
