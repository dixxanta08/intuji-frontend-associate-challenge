import React from "react";

const ProgressBar = ({ value, max, color = "bg-blue-500" }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-3xl h-2">
      <div
        className={` h-full rounded-3xl`}
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
