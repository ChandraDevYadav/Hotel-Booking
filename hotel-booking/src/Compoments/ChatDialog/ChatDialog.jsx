import React, { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaBell, FaBellSlash, FaListUl, FaMinus } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";


const ChatDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            type: "system",
            content: "Virtual Agent",
        },
        {
            type: "system",
            content:
                "Hi, I'm your Virtual Agent. 👋 I'm here to help with your travel plans.",
        },
        {
            type: "system",
            content:
                "Just to let you know, I sometimes use AI to answer your questions. Also, this conversation may be recorded to help improve your experience.",
        },
        {
            type: "system",
            content:
                "To get started, type a question, or choose an option below.\nDec 2, 2024, 1:05:00 PM",
        },
    ]);

    const [mute, setMute] = useState(false); // For mute/unmute state
    const [showAlert, setShowAlert] = useState(false); // For alert dialog visibility

    const predefinedOptions = [
        "Give feedback",
        "See cancel options",
        "Change booking",
        "Get refund status",
        "Use airline credit",
    ];

    // Open dialog
    const openDialog = () => setIsOpen(true);

    // Close dialog
    const closeDialog = () => setIsOpen(false);

    // Handle message change
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // Handle send message
    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { type: "user", content: message }]);
            setMessage("");
        }
    };

    // Handle option click
    const handleOptionClick = (option) => {
        setMessages([
            ...messages,
            { type: "user", content: option },
            { type: "system", content: `You selected: ${option}` },
        ]);
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setMessages([...messages, { type: "image", content: imageUrl }]);
        }
    };

    return (
        <>
            {/* Chat button */}
            <button
                className="fixed bottom-4 right-4 flex justify-start items-center gap-2 bg-blue-500 text-white py-3 px-4 rounded-full shadow-lg"
                onClick={openDialog}
            >
                <MdOutlineMessage />
                <p>Help</p>
            </button>

            {/* Dialog - Appears when isOpen is true */}
            {isOpen && (
                <div
                    className="fixed bottom-4 right-5 w-[22rem] md:w-[27rem] rounded-lg bg-white shadow-lg"
                    role="dialog"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center px-4 pt-2">
                        <button
                            className="text-gray-500 text-lg hover:text-gray-800"
                            onClick={closeDialog}
                        >
                            <FaMinus/> 
                        </button>
                        <div className="relative">
                            <BsThreeDotsVertical
                                className="cursor-pointer"
                                onClick={() => setShowAlert(!showAlert)}
                            />

                            {/* Alert Dialog */}
                            {showAlert && (
                                <div className="absolute top-12 right-0 w-[22rem] bg-white border rounded-md shadow-lg p-4 z-10">
                                    <div className="flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-2">
                                        <button
                                            className="text-gray-500 hover:text-gray-800"
                                            onClick={() => setShowAlert(false)}
                                        >
                                            <FaArrowLeft className="text-md"/>
                                        </button>
                                        <p className="text-sm">Setting</p>
                                    </div>
                                    <div>
                                        <IoSettingsSharp />
                                    </div>
                                    </div>
                                    <button
                                        className="flex items-center gap-2 w-full text-left text-blue-500 px-2 py-1 rounded-md text-md mt-4"
                                        onClick={() => {
                                            setMute(!mute);
                                            alert(mute ? "Sound Unmuted" : "Sound Muted");
                                        }}
                                    >
                                        {mute ? (
                                            <>
                                                <FaBellSlash className="text-red-500" /> Unmute Sound
                                            </>
                                        ) : (
                                            <>
                                                <FaBell className="text-green-500" /> Mute Sound
                                            </>
                                        )}
                                    </button>
                                    <button
                                        className="block w-full text-left text-red-500 px-2 py-1 rounded-md text-sm"
                                        onClick={() => setShowAlert(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/logo.png" alt="" className="w-12 h-8" />
                        <p className="text-sm font-medium">Virtual Agent</p>
                    </div>

                    {/* Messages Display */}
                    <div className="mt-4 p-4 border-black border-t">
                        <div className="flex justify-start items-center gap-1">
                            <div className="w-full border-b border-black"></div>
                            <h1 className="text-xs font-medium">Today</h1>
                            <div className="w-full border-b border-black"></div>
                        </div>
                        {/* {messages.map((msg, index) => (
                            <div key={index} className="mb-2">
                                {msg.type === "system" && (
                                    <p className="text-xs text-gray-600 whitespace-pre-line">
                                        {msg.content}
                                    </p>
                                )}
                                {msg.type === "user" && (
                                    <div className="text-right">
                                        <p className="inline-block bg-blue-500 text-white px-3 py-2 rounded-md text-sm">
                                            {msg.content}
                                        </p>
                                    </div>
                                )}
                                {msg.type === "image" && (
                                    <div className="text-right">
                                        <img
                                            src={msg.content}
                                            alt="Uploaded"
                                            className="max-w-full h-auto rounded-md"
                                        />
                                    </div>
                                )}
                            </div>
                        ))} */}
                        <div className="space-y-2">
                            <p className="text-xs mt-2">Virtual Agent</p>
                            <p className="bg-gray-200 px-4 py-2 rounded-lg mr-8 text-black text-sm">Hi, I'm your Virtual Agent. 👋 I'm here to help with your travel plans.</p>
                            <p className="bg-gray-200 px-4 py-2 rounded-lg mr-8 text-black text-sm">Just to let you know, I sometimes use AI to answer your questions. Also, this conversation may be recorded to help improve your experience.</p>
                            <p className="bg-gray-200 px-4 py-2 rounded-lg mr-8 text-black text-sm">To get started, type a question, or choose an option below.</p>
                            <div className="text-xs font-medium flex justify-between items-center pr-10">
                                <p>7:19 PM</p>
                                <a href="" className="text-blue-600 border-b border-blue-600">Give Feedback</a>
                            </div>
                        </div>
                    </div>

                    {/* Predefined Options */}
                    <div className="grid grid-cols-3 gap-2 px-4">
                        {predefinedOptions.map((option, index) => (
                            <button
                                key={index}
                                className="block w-full text-left text-blue-500 hover:bg-gray-100 px-1 py-2 border rounded-md text-xs"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {/* Input Section */}
                    <div className=" flex items-center p-4">
                        <label htmlFor="image-upload" className="cursor-pointer">
                            <AiOutlinePlus className="text-blue-500 text-xl" />
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <input
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-3 mx-4 text-sm outline-none border border-gray-300 rounded-md"
                        />
                        <button
                            className="text-gray-400 text-2xl rounded-md"
                            onClick={handleSendMessage}
                        >
                            <IoMdSend />
                        </button>
                    </div>
                    <div className="text-blue-600 flex justify-center items-center gap-4 rounded-b-lg bg-gray-200 py-4">
                        <FaListUl />
                        <h1 className="font-semibold text-md">Conversations</h1>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatDialog;
