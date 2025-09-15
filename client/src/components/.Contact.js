// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen "> 
      <div className="container px-4 py-8 flex flex-col items-center bg-gray-800">
        <div className="bg-white shadow-lg rounded-lg p-8  max-w-4xl "> 
          <h1 className="text-4xl font-bold text-center mb-8 text-deepBlue">Contact Us</h1> 
          <div className="flex flex-col md:flex-row justify-between w-full items-center">
            
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4 text-deepBlue">Send Us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                ></textarea>
                <button className="bg-lightbBlue text-white py-2 px-4 rounded hover:bg-deepBlue500">
                  Send Message
                </button>
              </form>
              
            </div>
            <div className="w-full md:w-1/2 p-4 items-center text-gray-700"> 
              <h2 className="text-2xl font-bold mb-4">Our Address</h2>
              <p className="mb-2">123 Chitkara University, Rajpura Punjab</p>
              <p className="mb-2">Email: support@tripx.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
