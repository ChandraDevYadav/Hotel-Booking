import React, { useState } from "react";

const Tabs = ({ tabs, activeTabKey, onTabClick }) => {
  return (
    <div className="flex justify-start border-b space-x-4 overflow-x-auto scrollbar-hide rounded-t-xl">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabClick(tab.key)}
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
            activeTabKey === tab.key
              ? "border-b-2 border-blue-600 text-black"
              : ""
          }`}
        >
          {tab.name} {tab.count !== undefined && `(${tab.count})`}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
