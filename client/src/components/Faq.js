import React from 'react';
import According from './According';
import Nav from './Nav'; // Import the Nav component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Faq = () => {
  const faqs = [
    {
      question: 'What services does your law firm offer?',
      answer: 'Our law firm provides a range of legal services including case representation, legal consultations, document preparation, and more specialized services tailored to your needs.'
    },
    {
      question: 'How can I get in touch with a lawyer?',
      answer: 'You can contact us through our website, by phone, or by visiting our office. For specific queries, you can also use our AI-powered chatbot available 24/7.'
    },
    {
      question: 'What is the process for filing a case?',
      answer: 'Filing a case involves several steps including consultation with a lawyer, gathering necessary documents, filing the case in court, and attending hearings. Our team will guide you through each step of the process.'
    },
    {
      question: 'Can I get a consultation online?',
      answer: 'Yes, we offer online consultations through our website. You can schedule a virtual meeting with one of our lawyers at your convenience.'
    },
    {
      question: 'What should I bring to my first meeting?',
      answer: 'For your first meeting, bring any relevant documents related to your case, a list of questions or concerns you have, and any other information that might help our team understand your situation.'
    }
  ];

  return (
    <div className="bg-custom-baige min-h-screen">
      <Nav /> {/* Include the Nav component here */}
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-custom-home-font text-center mb-12 animate-fadeIn">Frequently Asked Questions</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          {faqs.map((faq, index) => (
            <According key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/contact" className="bg-custom-green-Nav text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-custom-green transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
