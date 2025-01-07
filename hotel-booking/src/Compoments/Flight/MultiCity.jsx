import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import OneWayDatePicker from './OneWayDatePicker';
import PersonPicker from './PersonPicker';
import { FaPlus, FaTrash } from 'react-icons/fa6';

const MultiCity = () => {
    // Initialize with Flight 1 and Flight 2
    const [flights, setFlights] = useState([
        { id: 1 },
        { id: 2 },
    ]);

    const addFlight = () => {
        setFlights([...flights, { id: flights.length + 1 }]);
    };

    const removeFlight = (id) => {
        setFlights(flights.filter((flight) => flight.id !== id));
    };

    return (
        <div>
            <div className='flex justify-start items-center gap-4 pt-4'>
                <div>
                    <PersonPicker />
                </div>
            </div>
            {flights.map((flight) => (
                <div key={flight.id}>
                    <div className='flex justify-start items-center gap-4'>
                        <h1 className='font-medium mt-6 mb-3'>Flight {flight.id}</h1>
                        {flight.id > 2 && ( // Show remove button only for flights with id > 2
                            <button
                                className='text-red-600 font-medium'
                                onClick={() => removeFlight(flight.id)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-full'>
                            <FlightSearch />
                        </div>
                        <div className='w-1/2'>
                            <OneWayDatePicker />
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-start items-center gap-4 py-4'>
                <button
                    className='text-blue-600 text-sm flex justify-start items-center gap-2'
                    onClick={addFlight}
                >
                    <FaPlus /> Add Another Flight
                </button>
            </div>
        </div>
    );
};

export default MultiCity;
