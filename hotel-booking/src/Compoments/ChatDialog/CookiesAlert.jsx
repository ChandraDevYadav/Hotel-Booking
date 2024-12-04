import React, { useState, useEffect } from 'react';

const CookiesAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the user has already consented, and don't show the alert again
      if (!localStorage.getItem('cookiesConsent')) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Handle accepting cookies
  const acceptCookies = () => {
    localStorage.setItem('cookiesConsent', 'true');
    setIsVisible(false); // Close the alert
  };

  // Handle dismissing the alert
  const dismissAlert = () => {
    setIsVisible(false); // Close the alert
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[35rem] bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
        <div className="flex justify-end items-center">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={dismissAlert}
          >
            X
          </button>
        </div>
        <p className="text-sm text-gray-700">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={dismissAlert}
          >
            Dismiss
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={acceptCookies}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    )
  );
};

export default CookiesAlert;
