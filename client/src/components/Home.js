import React from 'react';
import { FaRobot } from 'react-icons/fa';
import law from '../images/law.svg';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="wrapper relative max-w-full max-h-screen overflow-hidden">
      <Nav />
      <div className="Body-Up_layer flex flex-col md:flex-row">
        <div className="h-screen w-full md:w-24 bg-custom-green-Nav flex items-center justify-center">
          {/* Vertical section - could be used for vertical navigation or logo */}
        </div>
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-custom-baige via-custom-orange to-custom-green">
          <div className="container relative flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl w-11/12 md:w-[90rem] h-auto md:h-4/6 overflow-hidden">
            <div className="h-64 md:h-full w-full md:w-[28%] relative">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
                src="https://i.pinimg.com/originals/11/f2/ae/11f2ae704b59ac4bde2c75ef8c9f1892.jpg"
                alt="Law"
              />
              <div className="absolute inset-0 bg-custom-green bg-opacity-50 flex justify-end items-end p-4">
                <img src={law} alt="Law Icon" className="h-16 w-16 md:h-24 md:w-24 transform rotate-6" />
              </div>
            </div>
            <div className="flex flex-col w-full p-6 md:p-10">
              <div className="bg-custom-green mb-8 flex items-center px-4 py-2 rounded-lg shadow-lg">
                <h1 className="text-custom-home-font text-3xl md:text-5xl font-bold font-serif tracking-wide animate-pulse">
                  Welcome to Our DoJ's Services
                </h1>
              </div>
              <div className="relative flex items-center text-start">
                <p className="text-custom-home-font_p font-normal text-lg md:text-2xl leading-8 tracking-wide">
                  We are delighted to introduce you to our esteemed law firm. With years of
                  experience and a team of dedicated professionals, we are committed to delivering
                  exceptional legal services tailored to meet the unique needs of each client. Our
                  mission is to provide reliable, efficient, and effective legal solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot Section */}
      <div className="ai-chatbot-section bg-custom-baige py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-custom-home-font mb-8">Meet Your Virtual Legal Assistant</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="ai-chatbot-description text-custom-home-font_p text-lg md:text-xl leading-8 max-w-lg mx-auto">
              <p>
                Our AI-powered chatbot is here to assist you with all your legal inquiries. Whether you need help understanding the law, checking case statuses, or finding the right legal resources, our virtual assistant is available 24/7 to guide you through it all.
              </p>
              <p className="mt-4">
                Experience the future of legal assistance with our intelligent, responsive, and user-friendly chatbot. It's like having a lawyer at your fingertips, anytime, anywhere.
              </p>
            </div>
            <div className="ai-chatbot-icon bg-white p-8 rounded-full shadow-lg flex items-center justify-center">
              <FaRobot className="text-custom-green-Nav text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
