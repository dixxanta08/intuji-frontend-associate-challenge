import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Searchbar from "./components/Searchbar/Searchbar";
import UserAccountSection from "./components/UserAccountSection/UserAccountSection";
import SavingPlan from "./components/SavingPlan/SavingPlan";
import RecentTransaction from "./components/RecentTransaction/RecentTransaction";
import LineChart from "./components/LineChart/LineChart";
import Overview from "./components/Overview/Overview";
import { useSidebar } from "./context/SidebarContext";

const App = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  return (
    <div className="bg-[#f7f7fb] flex flex-row h-screen">
      <Sidebar />

      {!isCollapsed && (
        <div
          className="bg-black/30 w-screen h-screen absolute top-0 left-0 z-10 sm:hidden"
          onClick={toggleSidebar}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleSidebar();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar overlay"
        />
      )}

      <div className="flex-1 overflow-y-scroll ">
        <div className="p-8 pb-4 grid grid-cols-12 gap-6">
          <div className="col-span-7 lg:col-span-8">
            <Searchbar />
          </div>
          <div className="col-span-5 lg:col-span-4">
            <UserAccountSection />
          </div>
        </div>

        <div className="px-8 py-4 grid grid-cols-12 gap-6">
          <div className="col-span-full lg:col-span-8 flex flex-col gap-8">
            <div className="w-full ">
              <Overview />
            </div>
            <div className="w-full">
              <LineChart />
            </div>
          </div>
          <div className="col-span-full lg:col-span-4 flex flex-col gap-6">
            <div className="w-full">
              <SavingPlan />
            </div>
            <div className="w-full">
              <RecentTransaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
