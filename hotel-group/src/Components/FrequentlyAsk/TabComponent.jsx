import React, { useState } from "react";
import Accordion from "./Accordion";

const TabComponent = () => {

    const expediaGroupItems = [
        {
          title: "How do Expedia Group payments work?",
          content:
            "As an Expedia Group partner, you choose how you want to accept guest payments.",
          contentDes:
            "You can also have guests pay you directly at check-out and compensate Expedia Group.",
        },
        {
          title: "What do I get for the compensation I pay?",
          content:
            "Compensation for reservations varies around the globe and we'll share the percentage for your market.",
          contentDes:
            "We operate traveler and partner support centers to help solve logistical issues.",
        },
        {
          title: "How do I update my property information?",
          content:
            "You can update your property details, such as amenities and policies, through the Partner Central dashboard.",
          contentDes:
            "Make sure to keep your information up-to-date to attract the right travelers.",
        },
      ];
      
      const reservationsItems = [
        {
          title: "How can I manage my reservations?",
          content:
            "Reservations can be managed through your Expedia Group Partner Central dashboard.",
          contentDes:
            "Log in to your account to modify booking details, cancel reservations, or communicate with guests.",
        },
        {
          title: "What happens if a guest cancels?",
          content:
            "Cancellation policies are set by the property. Guests are informed of these policies during booking.",
          contentDes:
            "You can view the cancellation details in the reservation summary in your dashboard.",
        },
        {
          title: "How can I view my booking history?",
          content:
            "Your booking history is available in the reservations tab of your Partner Central account.",
          contentDes:
            "You can filter bookings by date, status, or guest name for easier management.",
        },
      ];
      
      const paymentsItems = [
        {
          title: "When do I receive payments?",
          content:
            "Payments are processed depending on your selected payment method and schedule.",
          contentDes:
            "For virtual credit cards, payments are released after the guest checks out.",
        },
        {
          title: "How are refunds handled?",
          content:
            "Refunds are processed according to your property’s cancellation and refund policies.",
          contentDes:
            "You can initiate refunds directly from the Partner Central dashboard.",
        },
        {
          title: "How can I set up direct deposit?",
          content:
            "Direct deposit can be set up through the payment preferences section in your Partner Central dashboard.",
          contentDes:
            "Ensure your bank details are accurate to avoid delays in receiving funds.",
        },
      ];
      

  const [activeTab, setActiveTab] = useState("Expedia Group");

  const tabs = ["Expedia Group", "Reservations", "Payments"];

  return (
    <div className="mx-auto mt-10 px-44">
        <h1 className="text-2xl font-semibold text-center mb-4 mt-24">FAQs</h1>
      {/* Tabs Header */}
      <div className="flex justify-center items-center gap-24">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-center py-2 px-4 font-bold text-md ${
              activeTab === tab
                ? "border-b-4 border-blue-900 text-blue-900"
                : "text-blue-900 hover:text-blue-900"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Expedia Group" && (
          <div>
            <Accordion items={expediaGroupItems} />
          </div>
        )}
        {activeTab === "Reservations" && (
          <div>
            <Accordion items={reservationsItems} />
          </div>
        )}
        {activeTab === "Payments" && (
          <div>
            <Accordion items={paymentsItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
