import React, { useState } from "react";
import ExploreTabs from "../MainHome/ExploreTabs";
import ExplorePackages from "./ExplorePackages";

const ExplorePackagesTabs = () => {
    const destinations = [
        { name: "Pokhara", key: "pokhara" },
        { name: "Singapore", key: "singapore" },
        { name: "Colombo", key: "colombo" },
        { name: "Bali", key: "bali" },
    ];

    const [activeDestination, setActiveDestination] = useState("pokhara");

    const handleTabClick = (key) => {
        setActiveDestination(key);
    };

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-semibold text-gray-800">Explore vacation packages to popular destinations</h1>
            <p className="text-sm text-gray-900 mb-4">Prices found in the past 48 hours, based on two adults traveling. Click for updated prices.</p>
            {/* Tab Buttons */}
            <div>
            <ExploreTabs tabs={destinations} activeTabKey={activeDestination} onTabClick={handleTabClick} />
            </div>

            {/* Tab Content */}
            <div className="">
                {activeDestination === "pokhara" && (
                    <div>
                        <ExplorePackages/>
                    </div>
                )}

                {activeDestination === "singapore" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Explore Singapore</h2>
                        <p className="text-gray-700">
                            Experience the vibrant city life, futuristic architecture, and attractions like Marina Bay Sands and Gardens by the Bay.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            <li>Visit Universal Studios</li>
                            <li>Explore Sentosa Island</li>
                            <li>Stroll through Chinatown</li>
                        </ul>
                    </div>
                )}

                {activeDestination === "colombo" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Explore Colombo</h2>
                        <p className="text-gray-700">
                            Enjoy the mix of modernity and tradition in Sri Lanka's capital, with its beautiful beaches and historical landmarks.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            <li>Visit Galle Face Green</li>
                            <li>Explore the National Museum</li>
                            <li>Shop at Pettah Market</li>
                        </ul>
                    </div>
                )}

                {activeDestination === "bali" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Explore Bali</h2>
                        <p className="text-gray-700">
                            Dive into the serene beaches, lush green rice terraces, and cultural temples of Bali for a rejuvenating experience.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            <li>Relax at Seminyak Beach</li>
                            <li>Visit Uluwatu Temple</li>
                            <li>Experience the Bali Swing</li>
                        </ul>
                    </div>
                )}

                {activeDestination === "male" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Explore Malé</h2>
                        <p className="text-gray-700">
                            Discover the charm of Malé, the bustling capital of the Maldives, with its local markets, mosques, and vibrant culture.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            <li>Relax on Hulhumalé Beach</li>
                            <li>Visit the Maldives National Museum</li>
                            <li>Explore the Old Friday Mosque</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExplorePackagesTabs;
