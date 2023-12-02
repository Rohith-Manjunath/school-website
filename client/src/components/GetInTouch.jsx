import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 lg:p-10 bg-tertiary">
      <div className="lg:w-1/2 bg-white text-white rounded-lg p-6 lg:py-[3rem] lg:px-8 flex flex-col items-start gap-6 shadow-lg p-4 mb-4 text-black">
        <h1 className="text-3xl font-bold text-black">Get in touch!</h1>
        <p className="text-black">
          Whether you have inquiries, suggestions, or would simply like to reach
          out, we welcome the opportunity to engage with you. Our team is here
          to provide the information you need and ensure your experience with us
          is seamless. Reach out today and let's start a conversation towards
          academic excellence and a promising future.
        </p>
        <form className="flex flex-col w-full gap-4">
          <input
            className="p-2 pl-3 rounded-md text-black bg-tertiary outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="p-2 pl-3 rounded-md text-black bg-tertiary outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <textarea
            className="p-2 pl-3 rounded-md text-black bg-tertiary outline-none"
            type="text"
            name="message"
            placeholder="Message"
            rows={5}
          />
          <button className="bg-primary text-secondary px-8 py-[6px] rounded-md transition-all duration-300 hover:border outline-none font-bold hover:bg-secondary
          hover:border-primary hover:text-primary hover:scale-95">
            Submit
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 p-4 lg:p-12 flex flex-col gap-6">
        <h2 className="text-black font-bold text-2xl">Our Location</h2>
        <div className="mt-4 shadow-mb rounded-md">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.278936101485!2d76.58416887506405!3d12.229383088021931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf644f7358cc0d%3A0xe4fb32672e467b68!2sMount%20Litera%20Zee%20School!5e0!3m2!1sen!2sin!4v1701524068815!5m2!1sen!2sin"
            allowFullScreen=""
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
