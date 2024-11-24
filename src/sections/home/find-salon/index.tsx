'use client'

import SearchIcon from "@/assets/icons/search-icon";

export default function FindSalon() {
  return (
    <div className="text-center py-20">
      <div className="text-4xl font-bold mb-4">
        Find the best Thai massage salon
      </div>
      <p className="text-gray-700 mb-8">
        Find the best Thai massage salon at the right price here on Sweden's
        largest Thai massage guide.
      </p>
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Value"
          className="w-60 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
        />
        <span className="relative right-8 top-3">
        <SearchIcon/>
        </span>
        <button className="text-sm ml-4 bg-[#DD9BCF] text-white px-4 py-2 rounded-md">
          near me
        </button>
      </div>
    </div>
  );
}
