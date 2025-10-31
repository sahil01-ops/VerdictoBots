import React, { useState, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    photos: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photos') {
      setFormData((prevData) => ({
        ...prevData,
        photos: [...prevData.photos, ...Array.from(files)],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    if (name === 'message') {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleRemovePhoto = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      photos: prevData.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', message: '', photos: [] });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-baige">
      <div className="bg-white p-10 md:p-16 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-custom-home-font mb-8 text-center">Have More Questions? Contact Us!</h2>
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-custom-home-font font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-custom-green-Nav p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-Nav"
              />
            </div>
            <div className="flex-1">
              <label className="block text-custom-home-font font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-custom-green-Nav p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-Nav"
              />
            </div>
          </div>
          <div>
            <label className="block text-custom-home-font font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              ref={textareaRef}
              rows="6"
              className="w-full border border-custom-green-Nav p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-Nav resize-none overflow-hidden"
              style={{ minHeight: '150px' }}
            />
          </div>
          <div>
            <label className="block text-custom-home-font font-semibold mb-2" htmlFor="photos">Upload Photos (optional)</label>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              onChange={handleChange}
              className="w-full border border-custom-green-Nav p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-green-Nav"
            />
            {formData.photos.length > 0 && (
              <div className="mt-4">
                {formData.photos.map((photo, index) => (
                  <div key={index} className="flex items-center justify-between mt-2">
                    <span className="text-custom-home-font text-sm">{photo.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemovePhoto(index)}
                      className="ml-4 text-red-500 underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg bg-custom-green-Nav text-white font-bold text-lg transition-colors duration-300 ${isSubmitting ? 'bg-gray-400' : 'hover:bg-custom-green'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
