import React from "react";
import { Gallery } from "iconsax-react";

const TransactionItem = ({ transactionItem }) => {
  const formattedDate = new Date(transactionItem.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex items-center gap-2  h-full">
        <div className="w-12 h-12 rounded-full bg-[#00000020]  flex items-center justify-center">
          <Gallery size={24} color="#0D163A" variant="Bold" />
        </div>
        <div className="flex flex-col flex-shrink-0">
          <h3 className="font-semibold text-[18px]">{transactionItem.title}</h3>
          <p className="text-xs text-[#0D163A]/50">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center ">
        <p className="text-lg font-semibold text-[#0D163A]">
          ${transactionItem.amount}
        </p>
        <p
          className={`text-sm ${
            transactionItem.status === "Completed"
              ? "text-[#3BBB6E]"
              : "text-[#bb3b3b]"
          }`}
        >
          {transactionItem.status}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
