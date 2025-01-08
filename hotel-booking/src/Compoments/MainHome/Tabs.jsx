import React from "react";

const Tabs = ({ tabs, activeTabKey, onTabClick }) => {
  return (
    <div className="flex justify-start sm:justify-center space-x-4 border overflow-x-auto scrollbar-hide rounded-t-xl px-2 sm:px-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabClick(tab.key)}
          className={`px-4 py-3 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
            activeTabKey === tab.key
              ? "border-b-2 border-blue-600 text-black"
              : "text-gray-500"
          }`}
        >
          {tab.name} {tab.count !== undefined && `(${tab.count})`}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
