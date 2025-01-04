"use client"
import { useState } from "react";

import Slink from "../slink";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent actual form submission
    setIsSubmitted(true);

    // Clear the notification after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-28 px-4">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in<span className="text-blue-600"> Touch</span></h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Fill out the form below and we’ll get back
          to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Notification */}
        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
      <Slink/>
     
    </div>
  )
}
