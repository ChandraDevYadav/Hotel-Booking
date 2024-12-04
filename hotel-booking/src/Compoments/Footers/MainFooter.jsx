import React from 'react';

const footerData = [
  {
    category: "Company",
    items: [
      "About",
      "Jobs",
      "List your property",
      "Partnerships",
      "Newsroom",
      "Investor Relations",
      "Advertising",
      "Affiliate Marketing",
      "Feedback"
    ]
  },
  {
    category: "Explore",
    items: [
      "United States of America travel guide",
      "Hotels in United States of America",
      "Vacation rentals in United States of America",
      "Vacation packages in United States of America",
      "Domestic flights",
      "Car rentals in United States of America",
      "All accommodation types",
      "One Key credit cards"
    ]
  },
  {
    category: "Policies",
    items: [
      "Privacy",
      "Cookies",
      "Terms of use",
      "One Key™ terms and conditions",
      "Vrbo terms and conditions",
      "Accessibility",
      "Your privacy choices",
      "Content guidelines and reporting content"
    ]
  },
  {
    category: "Help",
    items: [
      "Support",
      "Cancel your hotel or vacation rental booking",
      "Cancel your flight",
      "Refund timelines, policies & processes",
      "Use an Expedia coupon",
      "International travel documents"
    ]
  }
];

const MainFooter = () => {
  return (
    <div className="bg-[#eff3f7] text-black px-44 py-8">
      <h1 className='pl-4 mb-6 text-xl font-bold'>StayEase Group</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold">{section.category}</h3>
              <ul className="space-y-2 text-xs">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-blue-600 hover:text-blue-800 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
