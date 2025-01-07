import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 w-full max-w-sm mx-auto">
      <div className="bg-white shadow-md rounded-lg p-4">
        <label htmlFor="dropdown" className="block text-gray-700 font-medium mb-2">
          Choose an option
        </label>
        <select
          id="dropdown"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {selectedOption && (
          <p className="mt-4 text-gray-700">You selected: {selectedOption}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
