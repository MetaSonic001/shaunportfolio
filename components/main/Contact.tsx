// components/ContactUs.tsx
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-transparent py-16 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Me</h2>
          <p className="mt-4 text-lg text-white">
            Have a question? Feel free to reach out to me!
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg z-50">
            <h3 className="text-xl font-bold text-black mb-4">Send me a Message</h3>
            <form className="w-full max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg z-50">
            <h3 className="text-xl font-bold text-black mb-4">Visit Me</h3>
            <p className="text-lg text-black">
              123 Main Street <br />
              City, State, Zip <br />
              Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
