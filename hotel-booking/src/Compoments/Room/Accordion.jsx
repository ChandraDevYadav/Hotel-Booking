import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to the first item being open

    // Accordion items data
    const items = [
        {
            title: "Prices are typical",
            content:
                "We predict nightly prices for properties like this to range between $109-$164 (before taxes and fees) on our site.",
        },

    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the accordion
    };

    return (
        <div className="space-y-4 mt-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border rounded-lg shadow-md p-6 bg-white overflow-hidden"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left p-2 md:p-4 focus:outline-none"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex justify-start items-center gap-2">
                                <span className="font-medium text-xl text-gray-800">{item.title}</span>
                                <div className="w-4 h-4">
                                    <svg class="uitk-icon uitk-more-info-trigger-icon uitk-more-info-trigger-icon-theme-positive uitk-icon-small" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm11-1v6h-2v-6h2zm-1 9a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm1-13v2h-2V7h2z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <span>
                                {activeIndex === index ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )}
                            </span>
                        </div>
                    </button>
                    {activeIndex === index && (
                        <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 items-start mt-4">
                            <div className="text-gray-700 bg-white text-xs font-medium">
                                {item.content}
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-2">
                                <div className="bg-black rounded py-1">
                                <p className="text-center text-xs font-semibold text-white w-10">$135</p>
                                </div>
                                </div>
                                <div className="flex justify-center md:justify-start items-center gap-1">
                                    <div className="w-16 md:w-24 h-1 bg-green-700 rounded-full "></div>
                                    <div className="flex justify-start items-center">
                                        <div className="w-16 md:w-20 h-1 bg-green-500 rounded-l-full"></div>
                                        <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                                        <div className="w-16 md:w-20 h-1 bg-green-500 rounded-r-full"></div>
                                    </div>
                                    <div className="w-16 md:w-24 h-1 bg-gray-200 rounded-full"></div>
                                </div>
                                <div className="flex justify-around items-center">
                                    <p className="text-xs font-medium">$109</p>
                                    <p className="text-xs font-medium">$164</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
