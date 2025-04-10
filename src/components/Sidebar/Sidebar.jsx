import {
  ArrowLeft,
  Calendar,
  Chart,
  Element4,
  Gallery,
  InfoCircle,
  Login,
  Profile2User,
  Setting,
  Sms,
  User,
} from "iconsax-react";
import React from "react";
import SidebarMenu from "./SidebarMenu";
import { useSidebar } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const menuItems = [
    { icon: Element4, title: "Dashboard", active: true },
    { icon: Calendar, title: "Calendar", active: false },
    { icon: Sms, title: "Messages", active: false },
    { icon: Chart, title: "Analytics", active: false },
    { icon: Profile2User, title: "Team", active: false },
  ];
  const secondaryMenuItems = [
    { icon: User, title: "Profile", active: false },
    { icon: Setting, title: "Settings", active: false },
  ];
  const footerMenuItems = [
    { icon: InfoCircle, title: "Help", active: false },
    { icon: Login, title: "Logout", active: false },
  ];
  return (
    <div
      className={`py-8  ${
        isCollapsed
          ? "w-0 -translate-x-full  sm:w-[64px] sm:-translate-0"
          : "w-[256px]"
      } max-h-screen min-h-screen  bg-white flex flex-col gap-8 sm:relative
      z-20 absolute`}
    >
      <button
        onClick={() => toggleSidebar()}
        className={`fixed top-10 ${
          isCollapsed
            ? "left-10 sm:left-[104px] rounded-r-full "
            : "left-[280px] rounded-l-full "
        } p-2 bg-gray-200 shadow-md z-10`}
        style={{ transform: "translateX(-100%)" }}
      >
        {isCollapsed ? (
          <ArrowLeft
            size={24}
            color="#0D163A"
            variant="Bold"
            style={{ transform: "rotate(180deg)" }}
          />
        ) : (
          <ArrowLeft size={24} color="#0D163A" variant="Bold" />
        )}
      </button>
      <div className={`${isCollapsed && "hidden sm:block"} `}>
        <div className="w-7/10 py-2 mx-auto bg-[#D9D9D9] flex items-center justify-center">
          <Gallery variant="Bold" size={24} />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-8">
          <SidebarMenu menuItems={menuItems} isCollapsed={isCollapsed} />
          <hr className="w-8/10 text-[#0D163A]/30" />
          <SidebarMenu
            menuItems={secondaryMenuItems}
            isCollapsed={isCollapsed}
          />
        </div>
        <div className="  sm:mt-36">
          <SidebarMenu menuItems={footerMenuItems} isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
