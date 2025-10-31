import React, { useState } from 'react';

const According = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-custom-green-Nav mb-4">
      <button
        onClick={toggleAccordion}
        className={`w-full text-left px-4 py-3 flex justify-between items-center text-custom-home-font font-semibold text-xl ${isOpen ? 'bg-custom-green-Nav text-white' : 'bg-custom-baige'}`}
      >
        {question}
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
          &#9662; {/* Down arrow for open state */}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-custom-home-font_p bg-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default According;
