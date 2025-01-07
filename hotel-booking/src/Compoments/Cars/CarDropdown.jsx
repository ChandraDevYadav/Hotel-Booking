import React, { useState } from 'react';

const CarDropdown = () => {
  const [preferredBrand, setPreferredBrand] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [extraDiscounts, setExtraDiscounts] = useState([]);

  const handleClear = () => {
    setPreferredBrand('');
    setDiscountType('');
    setExtraDiscounts([]);
  };

  const addDiscountCode = () => {
    setExtraDiscounts([...extraDiscounts, { id: Date.now(), code: '' }]);
  };

  const handleExtraCodeChange = (index, value) => {
    setExtraDiscounts((prev) =>
      prev.map((discount, i) => (i === index ? { ...discount, code: value } : discount))
    );
  };

  return (
    <div className="w-full px-4 py-4">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between items-center pb-4">
          <p className="font-medium text-gray-800">Discount Code</p>
          <button
            className="text-blue-600 font-semibold"
            onClick={handleClear}
            disabled={!discountType && extraDiscounts.length === 0}
          >
            Clear
          </button>
        </div>

        {/* Preferred Brand Dropdown */}
        <div className="mb-4">
          <label htmlFor="preferredBrand" className="block text-gray-700 font-medium mb-2">
            Preferred Brand
          </label>
          <select
            id="preferredBrand"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={preferredBrand}
            onChange={(e) => setPreferredBrand(e.target.value)}
          >
            <option value="">Preferred Brand</option>
            <option value="enterpriserentacar">Enterprise Rent-A-Car</option>
            <option value="hertz">Hertz</option>
            <option value="aviscarrental">Avis Car Rental</option>
            <option value="budgetcarrental">Budget Car Rental</option>
            <option value="nationalcarrental">National Car Rental</option>
            <option value="alamorentacar">Alamo Rent A Car</option>
            <option value="thriftycarrental">Thrifty Car Rental</option>
            <option value="dollarrentacar">Dollar Rent A Car</option>
            <option value="sixtrentacar">Sixt Rent A Car</option>
            <option value="paylesscarrental">Payless Car Rental</option>
            <option value="europcar">Europcar</option>
            <option value="foxrentacar">Fox Rent A Car</option>
            <option value="advantagerentacar">Advantage Rent A Car</option>
            <option value="rentawreck">Rent-A-Wreck</option>
            <option value="zoomrentacar">Zoom Rent A Car</option>
            <option value="greenmotion">Green Motion</option>
          </select>
        </div>

        {/* Discount Type Dropdown */}
        <div className="mb-4">
          <label htmlFor="discountType" className="block text-gray-700 font-medium mb-2">
            Discount Type
          </label>
          <select
            id="discountType"
            className={`w-full border ${
              preferredBrand ? 'border-gray-300' : 'border-gray-200'
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50`}
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
            disabled={!preferredBrand}
          >
            <option value="">Discount Type</option>
            <option value="corporateorcontracted">Corporate or Contracted</option>
            <option value="specialoradvertised">Special or Advertised</option>
          </select>
        </div>

        {/* Extra Discount Codes */}
        {discountType &&
          extraDiscounts.map((discount, index) => (
            <div key={discount.id} className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Discount Code {index + 1}
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={discount.code}
                onChange={(e) => handleExtraCodeChange(index, e.target.value)}
              >
                <option value="">Select Code</option>
                <option value="discountRateCode">Discount Rate Code</option>
                <option value="discountCouponCode">Discount Coupon Code</option>
              </select>
            </div>
          ))}

        {/* Add Another Code Button */}
        {discountType && (
          <button
            className="w-full bg-green-500 text-white font-medium py-2 rounded hover:bg-green-600 mb-4"
            onClick={addDiscountCode}
          >
            Add Another Code
          </button>
        )}

        {/* Done Button */}
        <button className="w-full bg-blue-600 text-white font-medium mt-4 py-2 rounded-full">
          Done
        </button>
      </div>
    </div>
  );
};

export default CarDropdown;
