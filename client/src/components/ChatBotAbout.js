import React from 'react';
import { RiRobot2Line } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Nav from './Nav'; // Assuming you have a Nav component


const ChatBotAbout = () => {
  const lawGif = 'https://www.sapphireinfocom.com/images/robot1.gif';


  
  return (
    <div className="relative max-w-full min-h-screen bg-custom-baige">
      <Nav />
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-container lg:w-3/5">
          <h1 className="text-5xl font-bold text-custom-orange mb-8">About Our Chatbot</h1>
          <p className="text-custom-home-font_p mb-6 text-lg leading-relaxed">
            The Department of Justice, India, proudly introduces its AI-powered chatbot, a dynamic and accessible tool designed to enhance public engagement and streamline the delivery of justice-related information and services.
          </p>
          <p className="text-custom-home-font_p mb-10 text-lg leading-relaxed">
            This chatbot is equipped to assist citizens with a wide range of inquiries, including legal aid, case status updates, and procedural guidance. By providing instant responses and 24/7 availability, the chatbot ensures that crucial information is readily accessible to all, contributing to greater transparency, efficiency, and citizen empowerment within the justice system.
          </p>
          
            <button  className="bg-custom-green-Nav hover:bg-custom-green text-white font-bold py-4 px-8 rounded-lg shadow-md transition duration-300">
              CHAT NOW
            </button>
         
        </div>
        <div className="gif-container lg:w-2/5 mt-16 lg:mt-0">
          <img src={lawGif} alt="Law GIF" className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-custom-green-Nav text-center py-6">
        <p className="text-custom-baige text-sm lg:text-base">
          Enhancing accessibility and empowering citizens with real-time legal information.
        </p>
      </div>
    </div>
  );
};

export default ChatBotAbout;
