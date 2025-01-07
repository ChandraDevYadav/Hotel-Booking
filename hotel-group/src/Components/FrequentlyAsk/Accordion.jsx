import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-none mb-4 bg-gray-200 rounded-3xl">
          <div
            onClick={() => toggleAccordion(index)}
            className="px-6 py-6 text-lg rounded-3xl cursor-pointer flex justify-between items-center"
          >
            <span className="font-medium text-gray-800">{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleDown/>
            </span>
          </div>
          {openIndex === index && (
            <div className="px-4 pb-6 bg-gray-200 text-gray-600 rounded-b-3xl">
              <p>{item.content}</p>
              <p className="mt-2">{item.contentDes}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
