import {
  ArrowDown2,
  Gallery,
  MessageText,
  NotificationBing,
} from "iconsax-react";
import React from "react";

const UserAccountSection = () => {
  return (
    <div className="w-full rounded-[64px] p-2 bg-white flex items-center justify-between gap-3">
      <div className="flex-1 p-3 rounded-[100px] border border-[#DEDEDE] flex justify-center">
        <NotificationBing size={24} color="#0D163A" variant="Linear" />
      </div>
      <div className="flex-1 p-3 rounded-[100px] border border-[#DEDEDE] flex justify-center">
        <MessageText size={24} color="#0D163A" variant="Linear" />
      </div>
      <div className="flex items-center gap-3 justify-between">
        <div className="p-3 rounded-4xl bg-[#00000033]">
          <Gallery size={24} color="#0D163A" variant="Bold" />
        </div>
        <p className="flex-shrink-0">Mirie Kiritani</p>
        <ArrowDown2 variant="TwoTone" size={24} color="#0D163A" />
      </div>
    </div>
  );
};

export default UserAccountSection;
