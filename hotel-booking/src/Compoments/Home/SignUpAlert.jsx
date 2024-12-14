import React, { useState, useEffect, useRef } from "react";

const SignUpAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const alertRef = useRef(null); // Reference for the alert div

  // Show the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the user has already consented, and don't show the alert again
      if (!localStorage.getItem("cookiesConsent")) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Handle accepting cookies
  const acceptCookies = () => {
    localStorage.setItem("cookiesConsent", "true");
    setIsVisible(false); // Close the alert
  };

  // Handle dismissing the alert
  const dismissAlert = () => {
    setIsVisible(false); // Close the alert
  };

  // Close alert when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    isVisible && (
      <div
        ref={alertRef} // Attach the reference to the alert div
        className="fixed top-[4.4rem] right-3 md:right-32 transform w-[23rem] bg-white border border-gray-300 rounded-lg shadow-lg px-8 py-8 z-50"
      >
        {/* <div className="flex flex-col justify-center items-center">
          <img src="/logo.png" alt="" className="w-16 h-16" />
          <h1 className="text-lg font-bold mt-2">StayEase</h1>
        </div> */}
        <p className="text-lg font-bold text-gray-700 text-center">
          Expedia Rewards is now One Key™
        </p>
        <p className="text-lg font-bold text-gray-700 text-center mt-3">
          Earn rewards across our family of brands with One Key
        </p>

        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="flex justify-start items-center gap-1">
            <div className="bg-gray-200 p-[2px] rounded-sm">
            <img src="/hlogo.png" alt="" className="w-4 h-4" />
            </div>
            <h1 className="text-sm font-bold">StayEase</h1>
          </div>
          <div className="flex justify-start items-center gap-1">
            <div className="bg-gray-200 p-[2px] rounded-sm">
            <img src="/hologo.png" alt="" className="w-4 h-4" />
            </div>
            <h1 className="text-sm font-bold">Hotel.<span className="text-[8px] font-medium">com</span></h1>
          </div>
          <div className="flex justify-start items-center gap-1">
            <div className="bg-gray-200 p-[2px] rounded-sm">
            <img src="/vlogo.png" alt="" className="w-4 h-4" />
            </div>
            <h1 className="text-sm font-bold">Verbo</h1>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <button className="w-full bg-blue-600 text-white rounded-full px-4 py-2 font-semibold">Sign in it's free</button>
          <button
            className="text-blue-600 text-sm font-medium hover:text-blue-800 mt-4"
            onClick={dismissAlert}
          >
            Learn about One Key
          </button>
        </div>
        {/* <div className="mt-4 flex justify-center space-x-2">
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
        </div> */}
      </div>
    )
  );
};

export default SignUpAlert;
