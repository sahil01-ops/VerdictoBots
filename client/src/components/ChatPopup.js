import React, { useState, useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', { autoConnect: true });

const ChatPopup = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null); // Reference for popup container
  const chatBodyRef = useRef(null); // Reference for the chat body for auto-scrolling
  const lastMessageRef = useRef(null); // Reference to the last message for auto-scrolling

  useEffect(() => {
    // connection/debug logging
    socket.on('connect', () => console.log('Socket connected:', socket.id));
    socket.on('connect_error', (err) => console.error('Socket connect_error:', err));
    socket.on('disconnect', (reason) => console.warn('Socket disconnected:', reason));

    // Listen for messages from the server (bot response)
    const handleReceive = (botMessage) => {
      console.log('receiveMessage from server:', botMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: 'bot' },
      ]);
    };
    socket.on('receiveMessage', handleReceive);

    // Clean up the effect
    return () => {
      socket.off('connect');
      socket.off('connect_error');
      socket.off('disconnect');
      socket.off('receiveMessage', handleReceive);
    };
  }, []);

  // Handle auto-scrolling when new messages are added
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle closing the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: 'user' },
      ]);

      // send with optional ack callback — server can call ack(reply)
      socket.emit('sendMessage', userInput, (ackReply) => {
        if (ackReply) {
          console.log('ack from server:', ackReply);
          setMessages((prev) => [...prev, { text: ackReply, sender: 'bot' }]);
        }
      });

      setUserInput('');
    }
  };

  // Handle key press (Enter) for sending messages
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const togglePopup = () => setIsVisible(!isVisible);

  // Single, guarded renderMessage function (prevents .split on null)
  const renderMessage = (messageText) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Regex to detect URLs
    const listItemRegex = /^- /; // Regex to detect list items

    const cleanUrl = (url) => {
      let cleaned = url.trim();
      while (cleaned.startsWith('(')) cleaned = cleaned.slice(1).trim();
      while (cleaned.endsWith(')')) cleaned = cleaned.slice(0, -1).trim();
      return cleaned;
    };

    const raw = (messageText ?? '').toString();
    if (!raw) return null;

    const lines = raw.split('\n');

    return (
      <div>
        {lines.map((line, index) => {
          if (listItemRegex.test(line)) {
            return (
              <li key={index} className="ml-4 text-gray-700">
                {line.slice(2)}
              </li>
            );
          }

          if (urlRegex.test(line)) {
            const parts = line.split(urlRegex);
            return (
              <p key={index}>
                {parts.map((part, i) => {
                  if (urlRegex.test(part)) {
                    const clean = cleanUrl(part);
                    try {
                      const validUrl = new URL(clean);
                      return (
                        <a
                          key={i}
                          href={validUrl.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {validUrl.href}
                        </a>
                      );
                    } catch (error) {
                      return <span key={i}>{clean}</span>;
                    }
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            );
          }
          return (
            <p key={index} className="mb-2">
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-custom-green-Nav text-white rounded-full p-4 shadow-lg cursor-pointer"
        onClick={togglePopup}
      >
        <FaRobot className="text-3xl" />
      </div>

      {isVisible && (
        <div
          ref={popupRef}
          className="fixed bottom-16 right-8 w-96 h-[600px] bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          <div className="bg-custom-green-Nav text-white p-4 rounded-t-lg flex items-center">
            <FaRobot className="text-2xl mr-2" />
            <h2 className="text-lg font-semibold">Verdicto</h2>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="overflow-y-auto h-[450px] p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : null}
                className={`mb-2 p-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {renderMessage(message.text)}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex items-center mt-2 p-4 border-t border-gray-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-lg p-2"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white border border-blue-500 rounded-r-lg p-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;