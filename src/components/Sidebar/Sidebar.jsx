import {
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

const Sidebar = () => {
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
    <div className="py-8 w-[280px] h-[1024px] bg-white flex flex-col gap-8 relative">
      <div className="w-7/10 h-[52px] mx-auto bg-[#D9D9D9] flex items-center justify-center">
        <Gallery variant="Bold" size={24} />
      </div>

      <div className="flex flex-col items-center justify-start w-[280px] gap-8">
        <SidebarMenu menuItems={menuItems} />
        <hr className="w-8/10 text-[#0D163A]/30" />
        <SidebarMenu menuItems={secondaryMenuItems} />
      </div>
      <div className=" absolute bottom-0">
        <SidebarMenu menuItems={footerMenuItems} />
      </div>
    </div>
  );
};

export default Sidebar;
