import React, { useState } from "react";
import DatePickerWithTabs from "./DatePickerWithTabs";

const AlertDialogWithTabs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      {/* Button to Open the Dialog */}
      <button
        onClick={openDialog}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Open Date Picker
      </button>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-25">
          <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-bold text-gray-700">Select Your Dates</h2>
              <button
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* Date Picker with Tabs */}
            <DatePickerWithTabs />

            {/* Footer */}
            <div className="flex justify-end mt-4">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={closeDialog}
                className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialogWithTabs;
