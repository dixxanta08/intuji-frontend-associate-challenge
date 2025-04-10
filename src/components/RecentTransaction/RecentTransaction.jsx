import React from "react";
import TransactionItem from "./TransactionItem";

const RecentTransaction = () => {
  const transactionItems = [
    {
      title: "Figma",
      amount: 100,
      status: "Completed",
      date: "2022-08-25",
    },
    {
      title: "Youtube",
      amount: 120,
      status: "Completed",
      date: "2022-08-25",
    },
    {
      title: "Spotify",
      amount: 15,
      status: "Completed",
      date: "2022-08-25",
    },
    {
      title: "FreePik",
      amount: 300,
      status: "Completed",
      date: "2022-08-25",
    },
  ];
  return (
    <div className="h-full p-4 rounded-2xl bg-white flex flex-col gap-6">
      <div className="flex justify-between items-center x">
        <h2 className="text-lg font-bold tracking-tight">Recent Transaction</h2>
        <a href="#" className="text-[#4745A4]">
          See All
        </a>
      </div>
      <hr className="text-[#0D163A]/20" />
      <div className="flex flex-col gap-4">
        {transactionItems.map((item, index) => (
          <TransactionItem transactionItem={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
