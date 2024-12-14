import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const ImportantInfoFAQsPage = () => {
  // Array for Important Information
  const importantInfo = [
    {
      category: "Fees",
      details: [
        "You'll be asked to pay the following charges at the property. Fees may include applicable taxes:",
        "Deposit: USD 150.00 per night",
        "Resort fee: USD 56.69 per accommodation, per night",
        "The resort fee includes:",
        "Additional inclusions",
        "Fitness center access",
        "Phone calls",
        "WiFi access (may be limited)",
      ],
    },
    {
      category: "Optional Extras",
      details: [
        "Fee for cooked-to-order breakfast: approximately USD 35 to 50 per person",
        "Covered self parking fee: USD 20.00 per day (in/out privileges)",
        "Covered valet parking fee: USD 40.00 per night (in/out privileges)",
        "Early check-in is available for a fee (subject to availability)",
        "Late check-out is available for a fee (subject to availability)",
        "The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change.",
      ],
    },
    {
      category: "You Need to Know",
      details: [
        "Extra-person charges may apply and vary depending on property policy",
        "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
        "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
        "This property accepts credit cards and debit cards; cash is not accepted",
        "Cashless transactions are available",
        "This property uses eco-friendly cleaning products",
        "Safety features at this property include a fire extinguisher, a security system, a first aid kit, and window guards",
      ],
    },
  ];

  // Array for FAQs
  const faqs = [
    "Does The Venetian Resort Las Vegas have a pool?",
    "Is The Venetian Resort Las Vegas pet-friendly?",
    "How much is parking at The Venetian Resort Las Vegas?",
    "What time is check-in at The Venetian Resort Las Vegas?",
    "What time is check-out at The Venetian Resort Las Vegas?",
    "Where is The Venetian Resort Las Vegas located?",
  ];

  return (
    <div className="pt-16">

      {/* Grid for Layout */}
      <div className="grid grid-cols-1 gap-8 px-4">
        {/* Important Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-start">
          <div>
          <h2 className="text-2xl font-semibold">Important Information</h2>
          </div>
          <div className="col-span-2">
          {importantInfo.map((info, index) => (
            <div key={index} className="space-y-2 pb-4">
              <h3 className="text-lg font-semibold mt-1">{info.category}</h3>
              <ul className="list-disc text-sm text-gray-600 font-medium pl-5 space-y-1">
                {info.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="col-span-2">
          <ul className="text-md font-medium space-y-4 text-gray-600 mt-1">
            {faqs.map((question, index) => (
              <li key={index} className="flex justify-start items-center gap-2"><FaAngleDown className="text-lg"/> {question}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfoFAQsPage;
