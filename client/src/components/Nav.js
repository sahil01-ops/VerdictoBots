import React from 'react';
import { RiRobot2Line } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { VscLaw } from "react-icons/vsc";
import verdicto from '../images/verdicto.svg'
import logo from '../images/logo.png'

const Nav = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-custom-baige bg-opacity-90 text-custom-green-Nav p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-4xl text-custom-green-Nav hover:text-custom-orange transition-colors duration-300">
            <img className='w-auto h-16' src={logo}/>
        </Link>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/faq" className="text-lg text-custom-green-Nav hover:text-custom-orange transition-colors duration-300">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="text-lg text-custom-green-Nav hover:text-custom-orange transition-colors duration-300">
              Feedback
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg text-custom-green-Nav hover:text-custom-orange transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/chatbotabout" className="text-2xl text-custom-green-Nav hover:text-custom-orange transition-colors duration-300">
              <div className="flex flex-col items-center">
                <BsRobot />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
