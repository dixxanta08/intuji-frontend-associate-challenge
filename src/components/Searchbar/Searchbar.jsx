import { SearchNormal } from "iconsax-react";
import React from "react";

const Searchbar = () => {
  return (
    <div className="w-full rounded-[64px] p-5 bg-white flex items-center justify-start">
      <div className="flex gap-2 items-center justify-center">
        <button
          aria-label="Search"
          className="flex items-center justify-center text-[#0D163A] "
        >
          <SearchNormal size={16} />
        </button>

        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="searchInput"
          className="w-full border-none active:outline-none focus:outline-none bg-white text-[#0D163A] placeholder:text-[#0D163A]/50"
          placeholder="Search here..."
          aria-describedby="searchHelp"
        />
      </div>
    </div>
  );
};

export default Searchbar;
