import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io"; // Import the stars

const LuxuryHotels = () => {
    const hotels = [
        {
          id: 1,
          title: "The Ritz-Carlton, Tokyo",
          image: "/h1.jpg",
          description: "Experience unparalleled elegance at The Ritz-Carlton Paris, where the charm of historic Paris meets modern luxury. With lavish rooms, a luxurious spa, and a Michelin-starred restaurant, every moment at this iconic hotel is a testament to sophistication. Enjoy a refreshing dip in the indoor pool or indulge in a signature cocktail at the exquisite bar.",
          address: "1234 Ocean Drive, Miami Beach, FL",
          rating: 4.9,
          reviews: 1500,
          reviewTag: "Wonderful",
          reviewDate: "2024-11-15",
          reviewText: "Exceptional service and an unforgettable stay. The views are mesmerizing!",
        },
        {
          id: 2,
          title: "Burj Al Arab Jumeirah",
          image: "/h2.jpg",
          description: "Immerse yourself in the epitome of luxury at the Burj Al Arab Jumeirah. This world-renowned hotel offers breathtaking views of the Arabian Gulf, exquisite suites with private butler service, and dining options that rival the best in the world. With its stunning infinity pool and exclusive spa, it's the perfect place to unwind in opulence.",
          address: "789 Park Avenue, New York, NY",
          rating: 5.0,
          reviews: 2000,
          reviewTag: "Excellent",
          reviewDate: "2024-11-10",
          reviewText: "Absolutely stunning! This place redefines luxury and elegance.",
        },
        {
          id: 3,
          title: "The Plaza Hotel",
          image: "/h3.jpg",
          description: "Timeless luxury awaits at The Plaza Hotel in the heart of New York City. Known for its grand rooms, elegant décor, and impeccable service, The Plaza offers an extraordinary experience for both leisure and business travelers. Indulge in world-class dining and relax in the spa for the ultimate New York experience.",
          address: "456 Royal Street, New Orleans, LA",
          rating: 4.8,
          reviews: 1800,
          reviewTag: "Wonderful",
          reviewDate: "2024-11-12",
          reviewText: "A perfect blend of classic charm and modern luxury. Highly recommended!",
        },
        {
          id: 4,
          title: "Hotel de Paris Monte-Carlo",
          image: "/h4.jpg",
          description: "Step into a world of opulence at Hotel de Paris Monte-Carlo. This iconic luxury hotel offers stunning views of the Mediterranean, elegant rooms, and exceptional dining options. Guests can relax in the serene spa or experience the excitement of the casino, all within the glamorous surroundings of Monaco.",
          address: "1010 Sunset Boulevard, Los Angeles, CA",
          rating: 4.9,
          reviews: 1700,
          reviewTag: "Very Good",
          reviewDate: "2024-11-08",
          reviewText: "A magnificent experience. The ambiance and service are unparalleled.",
        },
        {
          id: 5,
          title: "Four Seasons Hotel George V",
          image: "/h5.jpg",
          description: "Discover the pinnacle of luxury at Four Seasons Hotel George V in Paris. With its elegant accommodations, Michelin-starred restaurants, and tranquil spa, this five-star hotel offers guests a serene escape in the heart of Paris. Whether you're visiting for business or leisure, Four Seasons offers a sophisticated experience.",
          address: "5055 Collins Avenue, Miami Beach, FL",
          rating: 4.9,
          reviews: 1600,
          reviewTag: "Excellent",
          reviewDate: "2024-11-05",
          reviewText: "The epitome of elegance. Every detail was perfection.",
        },
        {
          id: 6,
          title: "Mandarin Oriental, Bangkok",
          image: "/h6.jpg",
          description: "Step into a sanctuary of serenity at the Mandarin Oriental Bangkok. Known for its classic Thai design and world-class amenities, this hotel offers guests an oasis of calm with luxurious rooms, an award-winning spa, and a riverside dining experience that is second to none.",
          address: "920 Fifth Avenue, New York, NY",
          rating: 4.8,
          reviews: 1400,
          reviewTag: "Wonderful",
          reviewDate: "2024-11-18",
          reviewText: "A perfect escape with exceptional service and beautiful surroundings.",
        },
        {
          id: 7,
          title: "Aman Tokyo",
          image: "/h7.jpg",
          description: "Aman Tokyo offers an exceptional blend of traditional Japanese design and modern luxury. Experience complete tranquility in one of the city's most serene hotels, complete with spacious rooms, an iconic rooftop infinity pool, and a world-class spa. Indulge in exquisite dining experiences and enjoy a peaceful retreat in the heart of Tokyo.",
          address: "3450 Wilshire Blvd, Los Angeles, CA",
          rating: 4.9,
          reviews: 1250,
          reviewTag: "Very Good",
          reviewDate: "2024-11-20",
          reviewText: "Truly magnificent! A peaceful escape with flawless service.",
        },
        {
          id: 8,
          title: "The St. Regis Maldives Vommuli Resort",
          image: "/h8.jpg",
          description: "Indulge in ultimate luxury at The St. Regis Maldives Vommuli Resort. This exclusive overwater retreat offers breathtaking views, impeccable service, and world-class dining. Unwind in private villas, explore the vibrant underwater world, or rejuvenate at the resort’s luxurious spa for an unforgettable experience.",
          address: "2000 Las Vegas Blvd N, Las Vegas, NV",
          rating: 5.0,
          reviews: 2200,
          reviewTag: "Excellent",
          reviewDate: "2024-11-22",
          reviewText: "Simply the best! The most luxurious experience I’ve ever had.",
        },
        {
          id: 9,
          title: "The Dorchester",
          image: "/h9.jpg",
          description: "Experience timeless luxury at The Dorchester in the heart of London. This prestigious hotel offers spacious, beautifully designed rooms, world-class dining, and a serene spa. Enjoy a private dining experience, unwind in the lush gardens, or take in the sights of the city with the hotel’s concierge service.",
          address: "1500 Pennsylvania Avenue NW, Washington, DC",
          rating: 4.7,
          reviews: 1800,
          reviewTag: "Wonderful",
          reviewDate: "2024-11-18",
          reviewText: "An exceptional stay with an elegant atmosphere and fantastic service.",
        },
        {
          id: 10,
          title: "The Biltmore Hotel, Miami",
          image: "/h10.jpg",
          description: "The Biltmore Hotel in Miami is a symbol of old-world charm and modern sophistication. With its stunning Mediterranean architecture, expansive golf course, and five-star dining, this resort offers a serene escape. Enjoy a relaxing day at the pool or unwind at the luxurious spa for the ultimate experience in relaxation.",
          address: "1234 Ocean Drive, Miami Beach, FL",
          rating: 4.8,
          reviews: 1400,
          reviewTag: "Very Good",
          reviewDate: "2024-11-10",
          reviewText: "Wonderful stay with great service and beautiful surroundings.",
        },
      ];
      
      

  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Highest Rated Luxury Hotels</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-lg border border-black rounded-xl overflow-hidden grid grid-cols-4 transition-transform transform"
          >
            {/* Image */}
            <div>
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="col-span-3">
              <div className="">
                <div className="border-b border-black px-2 py-4">
                <h2 className="text-xl font-bold mb-2">{hotel.title}</h2>
                <div className="flex items-center mb-4">
                  
                  <div className="ml-2 flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <div key={index}>
                        {index < Math.floor(hotel.rating) ? (
                          <IoIosStar className="text-yellow-400 w-4 h-4" />
                        ) : (
                          <IoIosStarOutline className="text-gray-300 w-4 h-4" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                </div>
                <p className="text-sm font-medium text-gray-800 mb-2">
                  {hotel.address}
                </p>
                <p className="text-gray-800 text-sm font-medium">{hotel.description}</p>
                </div>
                
                {/* Rating */}
                <div className="px-2 py-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-xl font-semibold">
                    {hotel.rating.toFixed(1)}
                  </span>
                  {/* <div className="ml-2 flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <div key={index}>
                        {index < Math.floor(hotel.rating) ? (
                          <IoIosStar className="text-yellow-400 w-5 h-5" />
                        ) : (
                          <IoIosStarOutline className="text-gray-300 w-5 h-5" />
                        )}
                      </div>
                    ))}
                  </div> */}
                  <span className="ml-2 text-gray-800 font-medium text-sm">
                    {hotel.reviewTag} !
                  </span>
                  <span className="ml-2 font-medium text-gray-800 text-sm">
                    ({hotel.reviews} reviews)
                  </span>
                </div>
                {/* Review */}
                <div className="text-gray-800 text-sm">
                  <p className="font-medium mb-2">"{hotel.reviewText}"</p>
                  <p className="text-gray-800 text-xs font-medium">
                    Reviewed on {new Date(hotel.reviewDate).toLocaleDateString()}
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryHotels;
