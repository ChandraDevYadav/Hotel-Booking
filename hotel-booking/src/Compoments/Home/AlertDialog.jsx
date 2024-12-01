import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const AlertDialog = () => {
  const [isOpen, setIsOpen] = useState(false); // Dialog open state
  const [rooms, setRooms] = useState([{ id: 1, adults: 1, children: 0, childrenAges: [] }]); // Room data

  // Function to add another room
  const addRoom = () => {
    setRooms((prevRooms) => [
      ...prevRooms,
      { id: prevRooms.length + 1, adults: 1, children: 0, childrenAges: [] },
    ]);
  };

  // Function to remove a room
  const removeRoom = (id) => {
    if (rooms.length > 1) {
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== id));
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="pl-4 pr-14 py-[1px] bg-white border border-black rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-start items-center gap-3"
      >
        <FaUser/>
        <div className="text-start">
            <p>Guests</p>
            <p>1 Room, 2 Travel...</p>
        </div>
      </button>

      {/* Alert Dialog */}
      {isOpen && (
        <div className="fixed overflow-scroll inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[35rem] relative">
            <div className="flex justify-start items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-600 border-2 border-black rounded-full py-2 px-4 font-semibold"
            >
              X
            </button>
            <p className="text-black">Guest</p>
            </div>

            {/* Room Section */}
            {rooms.map((room, index) => (
              <div key={room.id} className="mb-6">
                <div className="flex justify-between items-center mt-6">
                  <p className="font-medium text-xs">Room {room.id}</p>
                  {rooms.length > 1 && (
                    <button
                      onClick={() => removeRoom(room.id)}
                      className="px-2 py-1 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>

                {/* Adults Section */}
                <div className="flex justify-between items-center gap-4">
                  <p className="font-medium">Adults</p>
                  <div>
                  <button
                    onClick={() =>
                      setRooms((prevRooms) =>
                        prevRooms.map((r) =>
                          r.id === room.id
                            ? { ...r, adults: Math.max(1, r.adults - 1) }
                            : r
                        )
                      )
                    }
                    className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{room.adults}</span>
                  <button
                    onClick={() =>
                      setRooms((prevRooms) =>
                        prevRooms.map((r) =>
                          r.id === room.id && r.adults < 14
                            ? { ...r, adults: r.adults + 1 }
                            : r
                        )
                      )
                    }
                    className={`px-3 py-2 ${
                      room.adults >= 14
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    }`}
                    disabled={room.adults >= 14}
                  >
                    +
                  </button>
                  </div>
                </div>

                {/* Children Section */}
                <div className="flex justify-between items-center gap-4 mt-4">
                  <p className="font-medium">Children</p>
                  <div>
                  <button
                    onClick={() =>
                      setRooms((prevRooms) =>
                        prevRooms.map((r) =>
                          r.id === room.id
                            ? {
                                ...r,
                                children: Math.max(0, r.children - 1),
                                childrenAges: r.childrenAges.slice(0, -1),
                              }
                            : r
                        )
                      )
                    }
                    className="px-3 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{room.children}</span>
                  <button
                    onClick={() =>
                      setRooms((prevRooms) =>
                        prevRooms.map((r) =>
                          r.id === room.id && r.children < 6
                            ? {
                                ...r,
                                children: r.children + 1,
                                childrenAges: [...r.childrenAges, 0],
                              }
                            : r
                        )
                      )
                    }
                    className={`px-3 py-2 ${
                      room.children >= 6
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    }`}
                    disabled={room.children >= 6}
                  >
                    +
                  </button>
                  </div>
                </div>

                {/* Dynamic Dropdowns for Children's Ages */}
                {room.children > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {room.childrenAges.map((age, childIndex) => (
                      <div key={childIndex} className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Age of Child {childIndex + 1}
                        </label>
                        <select
                          value={age}
                          onChange={(e) => {
                            const newAge = parseInt(e.target.value, 10);
                            setRooms((prevRooms) =>
                              prevRooms.map((r) =>
                                r.id === room.id
                                  ? {
                                      ...r,
                                      childrenAges: r.childrenAges.map((a, i) =>
                                        i === childIndex ? newAge : a
                                      ),
                                    }
                                  : r
                              )
                            );
                          }}
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          {Array.from({ length: 18 }).map((_, age) => (
                            <option key={age} value={age}>
                              {age}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Add Another Room Button */}
            <div className="mt-4 text-end">
              <button
                onClick={addRoom}
                className="text-blue-600 font-bold"
              >
                Add Another Room
              </button>
            </div>

            {/* Confirm Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  console.log("Rooms Data:", rooms);
                  setIsOpen(false);
                }}
                className="px-6 py-2 w-full bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialog;
