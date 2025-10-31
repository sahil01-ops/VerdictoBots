import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import ChatPopup from './ChatPopup';

const FloatingChatIcon = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-custom-green-Nav text-white rounded-full p-4 shadow-lg cursor-pointer"
        onClick={togglePopup}
      >
        <FaRobot className="text-3xl" />
      </div>
      <ChatPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
};

export default FloatingChatIcon;
