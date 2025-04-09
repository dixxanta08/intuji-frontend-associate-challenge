import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarMenu = ({ menuItems }) => {
  return (
    <div className="w-[280px]">
      {menuItems.map((item, index) => (
        <SidebarItem
          icon={item.icon}
          title={item.title}
          active={item.active}
          key={index + " " + item.title}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
