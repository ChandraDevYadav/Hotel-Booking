import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { FaAngleRight, FaMessage } from "react-icons/fa6";
import { Link, Links } from "react-router-dom"
import { MdMessage } from "react-icons/md";
import DetailPlaceSearch from "./DetailPlacaSearch";
import DetailDatePicker from "./DetailDatePicker";
import DetailPersonPicker from "./DetailPersonPicker";
import RoomList from "../Room/RoomList";
import RoomCarousel from "../Room/RoomCarousel ";
import AttractionCarousel from "../Room/AttractionCarousel ";
import ResortDetails from "../Room/ResortDetails";
import AccessibilityList from "../Room/AccessibilityList";
import SimilarResortsCarousel from "../Room/SimilarResortsCarousel";
import ResortPolicies from "../Room/ResortPolicies";
import ImportantInfoFAQsPage from "../Room/ImportantInfoFAQsPage";
import ReviewCarousel from "../Room/ReviewCarousel";
import SocialSection from "../Room/SocialSection";
import HotelFilter from "./HotelFilter";
import Accordion from "../Room/Accordion";
import QuestionSect from "../Room/QuestionSect";
import AlertDialog from "../Room/AlertDialog";




const contentSections = [
    {
        id: "overview",
        title: "Overview",
        content: {
            text: "The Venetian Resort Las Vegas",
            rating: 4.5, // Rating out of 5
            vipAccess: true, // Show VIP Access
            refundable: true, // Show Fully Refundable
            mapEmbed: "<iframe src='https://www.google.com/maps/embed?pb=...' width='330' height='200'></iframe>" // Embed Google Map
        },
    },
    {
        id: "amenities",
        title: "Amenities",
        content: {
            text: "About this property",
            description: "Wake up to a decadent breakfast spread then unwind with Pilates classes by the poolside bar or explore upscale shops near this iconic resort.",
            images: [
                { src: "/h1.jpg", text: "Resturant" },
                { src: "/h2.jpg", text: "Spa" },
                { src: "/h3.jpg", text: "Pool" },
                { src: "/h4.jpg", text: "Gym" },
                { src: "/h5.jpg", text: "Breakfast available" }
            ],
            nearbyAttractions: [
                { name: "The Venetian Casino", distance: "1 min walk", images: "/marker.png", },
                { name: "Treasure Island Casino", distance: "4 min walk", images: "/marker.png", },
                { name: "Fashion Show Mall", distance: "6 min walk", images: "/marker.png", },
                { name: "Central Mall", distance: "15 min drive", images: "/plane.png", },
            ],
            amenitieDetails: [
                {
                    name: "Spa",
                    description: "Canyon Ranch Spa + Fitness has some ways to help you decompress. The resort's spa offers deep-tissue massages, hot stone massages, prenatal massages, and Swedish massages. Types of treatments available include aromatherapy, body scrubs, body wraps, and detox wraps. Other on-site facilities include a steam room, a sauna, and 3 spa tubs.",
                    images: "/h5.jpg",
                    moreImages: "/h10.jpg",
                    guestText: "What guests liked about the spa",
                    guestContent: "The Canyon Ranch spa was consistently praised as top-notch and amazing.",
                },
            ],
            amenitieMembers: [
                { title: "Save 15% or more on select VIP Access properties when you reach Silver tier or above" },
                { title: "Experience top-rated quality and exceptional service" },
                { title: "Get an in-stay perk at select properties, plus free room upgrades, early check-in, and late check-out when available" },
            ],
        },
    },
    {
        id: "rooms",
        title: "Rooms",
        content: {
            text: "Explore our luxurious rooms with a range of amenities.",
            roomTypes: [
                { type: "Deluxe Suite", price: "$200/night" },
                { type: "Executive Room", price: "$150/night" }
            ]
        },
    },
    {
        id: "accessibility",
        title: "Accessibility",
        content: {
            text: "Our hotel is fully accessible to all guests.",
            features: ["Wheelchair accessible", "Elevators available", "Accessible parking"]
        },
    },
    {
        id: "policies",
        title: "Policies",
        content: {
            text: "Please review our policies for a smooth stay.",
            policies: ["Check-in time: 3:00 PM", "Check-out time: 12:00 PM", "No smoking inside rooms"]
        },
    }
];

export default function PageNavigation() {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "overview";

            // Loop through sections to find the active one
            contentSections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    // Check if section is in the viewport
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section.id;
                    }
                }
            });

            // Handle the case for the last section (Policies)
            const lastSection = document.getElementById(contentSections[contentSections.length - 1].id);
            if (lastSection) {
                const rect = lastSection.getBoundingClientRect();
                if (rect.bottom <= window.innerHeight) {
                    currentSection = contentSections[contentSections.length - 1].id;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="container mx-auto">
            {/* Navigation Links */}
            <nav className="sticky flex justify-between items-center top-0 bg-white z-40 mt-6  border-b overflow-x-scroll">
                <ul className="flex justify-between space-x-4">
                    {contentSections.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`font-medium px-2 py-1 ${activeSection === section.id
                                    ? "border-b-2 border-blue-600 pb-4 text-blue-800"
                                    : "text-blue-600 hover:text-blue-800"
                                    }`}
                            >
                                {section.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => scrollToSection("rooms")}
                        className="flex items-center gap-1 border font-semibold bg-blue-600 text-white px-4 py-1 rounded-full"
                    >
                        Select a room
                    </button>
                </div>
            </nav>

            {/* Content Sections */}
            <div className="space-x-2 md:space-y-12">
                {contentSections.map((section) => (
                    <div key={section.id} id={section.id} className="py-4 border-b">

                        {section.id === "overview" && (
                            <div className="grid grid-cols-1 md:grid-cols-6 justify-between items-start px-6">

                                <div className="col-span-6 md:col-span-4">
                                    <span className="text-white text-xs bg-black px-2 py-1 rounded font-medium">
                                        {section.content.vipAccess ? "VIP Access" : "Standard"}
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-semibold my-2 text-gray-800">{section.content.text}</h2>
                                    <div className="flex flex-col gap-4 mt-0 md:mt-4">
                                        {/* Dynamic star rendering */}
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, index) => {
                                                const ratingValue = index + 1;
                                                return (
                                                    <span key={index}>
                                                        {section.content.rating >= ratingValue ? (
                                                            <FaStar className="text-yellow-500" />
                                                        ) : section.content.rating >= ratingValue - 0.5 ? (
                                                            <FaStarHalfAlt className="text-yellow-500" />
                                                        ) : (
                                                            <FaRegStar className="text-gray-400" />
                                                        )}
                                                    </span>
                                                );
                                            })}

                                        </div>

                                        <span className="text-green-700 flex justify-start items-center gap-1 text-sm font-medium">
                                            <IoCheckmark className="text-xl" /> {section.content.refundable ? "Fully Refundable" : "Non-refundable"}
                                        </span>
                                        <div className="flex justify-start items-start gap-2 mt-3">
                                            <span className="ml-2 text-white text-sm bg-green-800 px-2 py-1 rounded">
                                                {section.content.rating}
                                            </span>
                                            <p className="text-xl font-medium">Wonderful</p>
                                        </div>
                                        <div className="flex justify-start items-center gap-4 text-blue-600 ">
                                            <p className="text-sm font-medium">See all 16,570 reviews</p>
                                            <FaAngleRight />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <p className="text-xl font-semibold mb-3">Explore the area</p>
                                    <div className="w-full" dangerouslySetInnerHTML={{ __html: section.content.mapEmbed }} />
                                </div>
                            </div>
                        )}


                        {section.id === "amenities" && (
                            <div className="px-4">
                                <p className="text-black text-xl font-medium mb-2">About this property</p>
                                <p className="text-black text-sm">Wake up to a decadent breakfast spread then unwind with Pilates classes by the poolside bar or <br /> explore upscale shops near this iconic resort.</p>
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                    <div className="grid grid-cols-2 md:grid-cols-4 col-span-4 gap-4 mt-4">
                                        {section.content.images.map((image, index) => (
                                            <div>
                                                <img key={index} src={image.src} alt={`Amenity ${index + 1}`} className="w-full h-20 object-cover rounded-xl" />
                                                <p className="text-sm font-medium text-blue-600 mt-2">{image.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-span-2">
                                        <ul>
                                            {section.content.nearbyAttractions.map((attraction, index) => (
                                                <li key={index} className="text-gray-950 text-sm mb-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex justify-start items-center gap-2">
                                                            <img src={attraction.images} alt="" className="w-5 h-5" />
                                                            <p>{attraction.name}</p>
                                                        </div>
                                                        <p>{attraction.distance}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <AlertDialog/>
                                        {/* <Link to='' className="flex justify-start items-center gap-3 text-sm text-blue-600 font-medium mt-4">See more about this area <FaAngleRight /></Link> */}
                                    </div>
                                </div>
                                <Link to='' className="flex justify-start items-center gap-3 text-sm text-blue-600 font-medium my-10">See all property amenities <FaAngleRight /></Link>
                                <div>
                                    {section.content.amenitieDetails.map((attraction, index) => (
                                        <div className="grid grid-cols-1 md:grid-cols-6 justify-start items-start gap-1 md:gap-6 mt-16" key={index}>
                                            <div className="col-span-2">
                                                <img src={attraction.images} alt="" className="object-fill rounded-md h-[24rem]" />
                                            </div>
                                            <div className="col-span-4">
                                                <p className="text-xl font-semibold">{attraction.name}</p>
                                                <p className="text-sm font-medium pr-4 md:pr-48 mt-3">{attraction.description}</p>
                                                <div className="grid grid-cols-1 md:grid-cols-7 gap-0 md:gap-4 gap-y-4 md:gap-y-0 mt-6">
                                                    <div className="col-span-2">
                                                        <img src={attraction.moreImages} alt="" className="object-fill h-full rounded-md" />
                                                    </div>
                                                    <div className="col-span-5">
                                                        <div className="flex justify-start items-start bg-blue-50 px-2 py-8 gap-4 rounded-md">
                                                            <div className="bg-blue-200 p-2 rounded-full">
                                                                <MdMessage className="text-2xl" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">{attraction.guestText}</p>
                                                                <p className="text-sm mt-3">{attraction.guestContent}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to='' className="flex justify-start items-center gap-3 text-sm text-blue-600 font-medium mt-6">See all spa amenities <FaAngleRight /></Link>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                                <div className="border rounded-xl px-6 py-4 mt-6">
                                    <div className="border-b pb-4">
                                        <button className="bg-gray-800 rounded-sm px-2 py-1 mt-3 text-white text-xs font-medium">VIP Access</button>
                                    </div>
                                    <h1 className="text-sm font-bold mt-4">Get more when you're a member</h1>
                                    <ul className="list-disc ml-5 mt-2 text-sm">
                                        {section.content.amenitieMembers.map((attraction, index) => (
                                            <li className="mb-2" key={index}>
                                                {attraction.title}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to='' className="flex justify-start items-center gap-3 text-sm text-blue-600 font-medium mt-6">Learn more <FaAngleRight /></Link>
                                </div>
                            </div>
                        )}

                        {section.id === "rooms" && (
                            <div className="px-4">
                                <div className="grid grid-cols-1 md:grid-cols-7 justify-start items-center gap-0 md:gap-4 gap-y-4 md:gap-y-0">
                                    <div className="col-span-2">
                                        <DetailPlaceSearch />
                                    </div>
                                    <div className="col-span-2">
                                        <DetailDatePicker />
                                    </div>
                                    <div className="col-span-3">
                                        <DetailPersonPicker />
                                    </div>
                                </div>
                                {/* <p className="text-gray-600">{section.content.text}</p>
                                <ul className="mt-4">
                                    {section.content.roomTypes.map((room, index) => (
                                        <li key={index} className="text-gray-600">
                                            {room.type}: {room.price}
                                        </li>
                                    ))}
                                </ul> */}
                                <Accordion />
                                <HotelFilter />
                                <QuestionSect />
                                {/* <RoomList/> */}
                                <RoomCarousel />
                                <AttractionCarousel />
                                <ResortDetails />
                            </div>
                        )}

                        {section.id === "accessibility" && (
                            <div>
                                {/* <p className="text-gray-600">{section.content.text}</p>
                                <ul className="mt-4">
                                    {section.content.features.map((feature, index) => (
                                        <li key={index} className="text-gray-600">{feature}</li>
                                    ))}
                                </ul> */}
                                <AccessibilityList />
                                <SimilarResortsCarousel />
                            </div>
                        )}

                        {section.id === "policies" && (
                            <div>
                                {/* <p className="text-gray-600">{section.content.text}</p>
                                <ul className="mt-4">
                                    {section.content.policies.map((policy, index) => (
                                        <li key={index} className="text-gray-600">{policy}</li>
                                    ))}
                                </ul> */}
                                <ResortPolicies />
                                <ImportantInfoFAQsPage />
                                <ReviewCarousel />

                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
