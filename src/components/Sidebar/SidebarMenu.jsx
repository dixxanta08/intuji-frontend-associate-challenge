import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarMenu = ({ menuItems, isCollapsed }) => {
  return (
    <div className="w-full">
      {menuItems.map((item, index) => (
        <SidebarItem
          icon={item.icon}
          title={item.title}
          active={item.active}
          key={index + " " + item.title}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
