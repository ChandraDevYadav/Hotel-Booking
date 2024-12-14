import React from "react";
import RoomCard from "./RoomCard";
import roomData from "./roomData";

const RoomList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b pb-6">
      {roomData.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
