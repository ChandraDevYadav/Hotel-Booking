import React from "react";

const ImageOverlay = () => {
  return (
    <div className="relative w-full h-80 rounded-xl">
      {/* Background Image */}
      <img
        src="/be5.jpg"
        alt="Overlay Example"
        className="w-full h-full object-cover rounded-xl"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center">
        {/* Text and Button */}
        <div className="ml-10 text-white space-y-2">
          <h2 className="text-4xl font-bold">Find your voyage</h2>
          <p className="text-xl pb-4">
          Explore all the different ways you can set sail
          </p>
          <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded-md">
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
