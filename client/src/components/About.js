// AboutUs.jsx
import React from 'react';
import Nav from './Nav'; // Adjust the path as necessary
import ashutosh from '../images/ashutosh.jpg'
import vansika from '../images/vansika.jpg'
import kp  from '../images/kp.jpg'
import sahil from '../images/sahil.jpg'
import ashish from '../images/ashish.jpg'
import ayushi from '../images/ayushi.jpg'

const teamMembers = [
  {
    name: "SAHIL JAIN",
    role: "Leader",
    image: sahil, 
    description: "Visionary leader with a passion for innovation.",
  },
  {
    name: 'ASHUTOSH SINGH',
    role: "ML Lund-Developer",
    image: ashutosh, 
    description: "Expert in technology and product development.",
  },
  {
    name: "ASHISH RANJAN",
    role: "Web Developer",
    image: ashish, 
    description: "Creative mind behind our brand's visual identity.",
  },
  {
    name: "KANISHKA PATEL",
    role: "Web Developer",
    image: kp, 
    description: "Master of coding and development strategies.",
  },
  {
    name: "VANSHIKA SINGH",
    role: "Resource Manager",
    image: vansika, 
    description: "Crafts campaigns that capture our audience's attention.",
  },
  {
    name: "AYUSHI VERMA",
    role: 'Presentation Manager',
    image: ayushi, 
    description: "Ensures everything runs smoothly behind the scenes.",
  },
];



const About = () => {
  return (
    <div className="bg-custom-baige min-h-screen pt-24">
      <Nav />
      <div className="py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-custom-home-font">Meet Our Team</h2>
          <p className="mt-4 text-lg text-custom-home-font_p">
            A group of passionate professionals dedicated to bringing you the best experience.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-32 h-32 rounded-full mx-auto object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-custom-home-font">{member.name}</h3>
                <p className="text-custom-green-Nav">{member.role}</p>
                <p className="mt-2 text-custom-home-font_p text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
