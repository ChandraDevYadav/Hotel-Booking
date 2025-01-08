import React from "react";

const RecentlyViewed = () => {
  const propertiesData = [
    {
      title: "Two Full Room at a Hotel",
      rating: "8.8/10",
      reviews: "3",
      image: "/h1.jpg",
    },
    {
      title: "Excalibur Hotel & Casino",
      rating: "9.8/10",
      reviews: "9",
      image: "/h2.jpg",
    },
    {
      title: "The Venetian Resort Las Vegas",
      rating: "7.8/10",
      reviews: "12",
      image: "/h3.jpg",
    },
    {
      title: "Marina Bay Sands Singapore",
      rating: "9.2/10",
      reviews: "18",
      image: "/h4.jpg",
    },
    {
      title: "The Ritz-Carlton, Tokyo",
      rating: "8.7/10",
      reviews: "25",
      image: "/h5.jpg",
    },    
  ];

  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">Your Recently Viewed Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {propertiesData.map((property, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-44 md:h-56 object-fill rounded-t-xl"
            />

            {/* Property Details */}
            <div className="p-2">
              <h2 className="text-sm font-semibold text-gray-900">
                {property.title}
              </h2>
              <div className="mt-1 flex items-center">
                <span className="text-gray-800 font-bold">
                  {property.rating}
                </span>
                <span className="text-gray-700 font-medium text-sm ml-2">
                ( {property.reviews} )
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
