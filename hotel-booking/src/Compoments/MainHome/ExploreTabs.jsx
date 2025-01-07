import React, { useState } from "react";

const ExploreTabs = ({ tabs, activeTabKey, onTabClick }) => {
  return (
    <div className="flex justify-start space-x-4 border-b overflow-x-auto scrollbar-hide rounded-t-xl">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabClick(tab.key)}
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
            activeTabKey === tab.key
              ? "border-b-2 border-blue-600 text-blue-600"
              : ""
          }`}
        >
          {tab.name} {tab.count !== undefined && `(${tab.count})`}
        </button>
      ))}
    </div>
  );
};

export default ExploreTabs;
