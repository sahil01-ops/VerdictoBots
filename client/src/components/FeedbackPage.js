import React, { useState, useRef, useEffect } from 'react';
import Nav from './Nav'; // Assuming you have a Nav component

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const textareaRef = useRef(null);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      feedback,
      rating,
      email,
    };
    
    

    fetch('http://localhost:5000/send-feedback', {  // Ensure this URL matches the backend route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Feedback sent successfully!') {
          setIsSubmitted(true);
          setFeedback('');
          setRating(0);
          setEmail('');
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
        setErrorMessage('An error occurred while sending your feedback. Please try again later.');
      });
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scrollHeight
    }
  }, [feedback]);

  return (
    <div className="relative max-w-full min-h-screen bg-custom-baige">
      <Nav />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-custom-orange mb-8 text-center">We Value Your Feedback</h1>
        <p className="text-custom-home-font_p mb-10 text-lg leading-relaxed text-center">
          Please let us know about your experience with our services. Your feedback helps us improve and serve you better.
        </p>

        {isSubmitted ? (
          <div className="text-center text-custom-home-font_p text-lg">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
            <div className="mb-6">
              <label className="block text-custom-home-font text-lg font-semibold mb-2" htmlFor="email">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full p-4 text-custom-home-font_p bg-custom-baige border border-custom-green rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-custom-home-font text-lg font-semibold mb-2" htmlFor="feedback">
                Your Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                ref={textareaRef}
                className="w-full p-4 resize-none text-custom-home-font_p bg-custom-baige border border-custom-green rounded-md overflow-hidden"
                placeholder="Write your feedback here..."
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-custom-home-font text-lg font-semibold mb-2" htmlFor="rating">
                Your Rating:
              </label>
              <select
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                className="w-full p-4 text-custom-home-font_p bg-custom-baige border border-custom-green rounded-md focus:outline-none focus:border-custom-green-Nav"
              >
                <option value={0}>Select a rating</option>
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
            </div>

            {errorMessage && (
              <div className="text-red-500 mb-6">
                {errorMessage}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-custom-green-Nav hover:bg-custom-green text-white font-bold py-4 px-8 rounded-lg shadow-md transition duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-custom-green-Nav text-center py-6">
        <p className="text-custom-baige text-sm lg:text-base">
          Thank you for taking the time to share your thoughts with us!
        </p>
      </div>
    </div>
  );
};

export default FeedbackPage;
