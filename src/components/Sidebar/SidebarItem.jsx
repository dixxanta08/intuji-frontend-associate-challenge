import React from "react";

const SidebarItem = ({ icon: Icon, title, active, key }) => {
  return (
    <div className="w-[258px]  h-[64px] flex items-center relative">
      {active && <div className="absolute left-0 h-12 w-1 bg-[#4745A4]"></div>}
      <div
        className={` m-auto  flex items-center  justify-left gap-4 w-[130px]  `}
        key={key}
      >
        <Icon
          size={24}
          className={`${active ? "text-[#F9BA33]" : "text-[#0D163A]"}`}
          variant={active ? "Bold" : "TwoTone"}
        />
        <p
          className={` ${
            active
              ? " font-semibold text-[#0D163A]"
              : "font-normal text-[#0D163A]/70"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default SidebarItem;
