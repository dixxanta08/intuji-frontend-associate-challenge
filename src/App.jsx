import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Searchbar from "./components/Searchbar/Searchbar";
import UserAccountSection from "./components/UserAccountSection/UserAccountSection";
import SavingPlan from "./components/SavingPlan/SavingPlan";
import RecentTransaction from "./components/RecentTransaction/RecentTransaction";

const App = () => {
  return (
    <div className="bg-[#f7f7fb] flex flex-row ">
      <Sidebar />
      <div className="flex-1 ">
        <div className="p-8 pb-4 grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <Searchbar />
          </div>
          <div className="col-span-4">
            <UserAccountSection />
          </div>
        </div>

        <div className="px-8 py-4 grid grid-cols-12 gap-8">
          <div className="col-span-8 ">
            <div className="bg-red-300" />
          </div>
          <div className="col-span-4">
            <SavingPlan />
          </div>
        </div>
        <div className="px-8 py-4 grid grid-cols-12 gap-8">
          <div className="col-span-8 ">
            <div className="bg-red-300" />
          </div>
          <div className="col-span-4">
            <RecentTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
