import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 lg:p-10">
      <div className="lg:w-1/2 bg-blue-600 text-white rounded-lg p-6 lg:py-12 lg:px-8 flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold">Get in touch!</h1>
        <p>
          Whether you have inquiries, suggestions, or would simply like to reach
          out, we welcome the opportunity to engage with you. Our team is here
          to provide the information you need and ensure your experience with us
          is seamless. Reach out today and let's start a conversation towards
          academic excellence and a promising future.
        </p>
        <form className="flex flex-col w-full gap-4">
          <input
            className="p-2 rounded-md outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="p-2 rounded-md outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <textarea
            className="p-2 rounded-md outline-none"
            type="text"
            name="message"
            placeholder="Message"
            rows={5}
          />
          <button className="bg-white text-blue-500 px-8 py-[6px] rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 hover:border outline-none font-bold">
            Submit
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 p-4 lg:p-12 flex flex-col gap-6">
        <h2 className="text-slate-700 font-bold text-2xl">Our Location</h2>
        <div className="mt-4">
          {/* Replace the iframe src with your Google Maps embed code */}
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
          ></iframe>
        </div>
        <p>
          Our campus offers a conducive environment for learning and personal
          growth. Explore the neighborhood, experience our state-of-the-art
          facilities, and feel the vibrant atmosphere that makes our school a
          unique and enriching place for education.
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
