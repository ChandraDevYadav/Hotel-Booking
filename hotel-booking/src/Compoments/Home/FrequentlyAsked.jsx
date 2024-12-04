import React from "react";

const faqData = [
    {
        question: "What is a luxury hotel?",
        answer: `
      Luxury hotels deliver the highest standards in service, facilities, dining, and accommodation. 
      These hotels typically hold 4.5-star or 5-star ratings, recognized for their world-class amenities 
      and exceptional guest services. Expect opulent furnishings, premium bedding, and seamless experiences 
      from the lobby to the guest rooms. Facilities may include 24-hour services, swimming pools, spas, 
      and high-quality dining.
    `
    },
    {
        question: "What can I expect from a luxury hotel?",
        answer: `
      Luxury hotels offer impeccable service, superior facilities, and enhanced design. You can expect 
      dreamy bedding, luxury baths, complimentary items, outstanding dining, and knowledgeable concierge services. 
      Amenities often include a 24-hour front desk, in-room refreshments, bathrobes, and world-class recreational facilities. 
      Services like laundry, babysitting, and personalized touches may also be available.
    `
    },
    {
        question: "What are some common features of luxury hotels?",
        answer: `
      Though each hotel has its own style, some things that usually make an appearance are:
    `,
        list: [
            "24-hour front desk",
            "In-room: Flat-screen TV, desk, free Wi-Fi",
            "In-room: Complimentary bottled water, coffee and tea facilities, mini fridge, snacks",
            "In-room: Bathrobes, complimentary toiletries",
            "Nightly turn-down service, 24-hour room service",
            "Outstanding breakfast and dining",
            "Great amenities such as swimming pool, spa or sauna, 24-hour fitness center",
            "Services such as laundry, babysitting, pet-sitting, knowledgeable concierge"
        ],
        note: `
      *These are only guidelines as policies and amenities vary across hotels. 
      For more information, view details listed on each property page.
    `
    },
    {
        question: "What are some common features of luxury hotels?",
        answer: `
      Though each hotel has its own style, some things that usually make an appearance are:
    `,
        list: [
            "24-hour front desk",
            "In-room: Flat-screen TV, desk, free Wi-Fi",
            "In-room: Complimentary bottled water, coffee and tea facilities, mini fridge, snacks",
            "In-room: Bathrobes, complimentary toiletries",
            "Nightly turn-down service, 24-hour room service",
            "Outstanding breakfast and dining",
            "Great amenities such as swimming pool, spa or sauna, 24-hour fitness center",
            "Services such as laundry, babysitting, pet-sitting, knowledgeable concierge"
        ],
        note: `
      *These are only guidelines as policies and amenities vary across hotels. 
      For more information, view details listed on each property page.
    `
    },
    {
        question: "Is there a 6-star hotel?",
        answer: `
      Officially, 5-star is the maximum recognized rating. However, terms like 6-star or 7-star are 
      used to describe extreme luxury and opulence, such as helicopter transfers, 24-hour butler services, 
      and gold-plated decor. These hotels redefine the luxury experience beyond the 5-star mark.
    `
    },
    {
        question: "What is a luxury hotel chain?",
        answer: `
      A luxury hotel chain consists of multiple properties operating under the same brand, offering a 
      consistent experience worldwide. Examples include Hilton, Four Seasons, Ritz-Carlton, and Shangri-La, 
      known for their high standards and reliability.
    `
    },
    {
        question: "What are some common features of luxury hotels?",
        answer: `
      Though each hotel has its own style, some things that usually make an appearance are:
    `,
        list: [
            "24-hour front desk",
            "In-room: Flat-screen TV, desk, free Wi-Fi",
            "In-room: Complimentary bottled water, coffee and tea facilities, mini fridge, snacks",
            "In-room: Bathrobes, complimentary toiletries",
            "Nightly turn-down service, 24-hour room service",
            "Outstanding breakfast and dining",
            "Great amenities such as swimming pool, spa or sauna, 24-hour fitness center",
            "Services such as laundry, babysitting, pet-sitting, knowledgeable concierge"
        ],
        note: `
      *These are only guidelines as policies and amenities vary across hotels. 
      For more information, view details listed on each property page.
    `
    },
    {
        question: "What are some common features of luxury hotels?",
        answer: `
      Though each hotel has its own style, some things that usually make an appearance are:
    `,
        list: [
            "24-hour front desk",
            "In-room: Flat-screen TV, desk, free Wi-Fi",
            "In-room: Complimentary bottled water, coffee and tea facilities, mini fridge, snacks",
            "In-room: Bathrobes, complimentary toiletries",
            "Nightly turn-down service, 24-hour room service",
            "Outstanding breakfast and dining",
            "Great amenities such as swimming pool, spa or sauna, 24-hour fitness center",
            "Services such as laundry, babysitting, pet-sitting, knowledgeable concierge"
        ],
        note: `
      *These are only guidelines as policies and amenities vary across hotels. 
      For more information, view details listed on each property page.
    `
    },
    {
        question: "Is superior or deluxe room better?",
        answer: `
      The distinction between superior and deluxe rooms varies by hotel. Differences may include 
      features like higher floors or garden vs. street views. Always check room descriptions and 
      reviews to determine which suits your preferences.
    `
    },
    {
        question: "How do I choose a good luxury hotel?",
        answer: `
      Look for features like swimming pools, spas, in-room hot tubs, free shuttles, or on-site dining. 
      Use filters for ratings, budget, and amenities on platforms like Expedia to find the perfect match 
      for your preferences and destination.
    `
    }
];

const FrequentlyAsked = () => {
    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="font-bold mb-6">Don't see what you're looking for?</h1>
                    <a href='' className="px-6 py-2 border border-black text-blue-600 rounded-full font-semibold">View all properties</a>
                    <p className="text-xs mt-8 font-medium">Lowest nightly price found within the past 24 hours based on a 1 night stay for 2 adults. <br /> Prices and availability subject to change. Additional terms may apply.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="p-4"
                        >
                            <h2 className="text-xl font-semibold text-gray-700">
                                {faq.question}
                            </h2>
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                            {faq.list && (
                                <ul className="list-disc list-inside mt-4 text-gray-600">
                                    {faq.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {faq.note && <p className="text-sm text-gray-500 mt-4">{faq.note}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;
