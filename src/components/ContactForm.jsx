import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY, 
      })
      .then(
        () => {
          toast.success('Sent a Message!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce, 
          });
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full flex justify-center items-center sm:px-0">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center w-full max-w-md p-6 backdrop-blur-lg rounded-lg shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl text-white mb-2 font-semibold">Contact me:</h2>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="name" className="text-base sm:text-lg text-white mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full h-[45px] p-3 text-base sm:text-lg bg-white/80 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all duration-300"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="email" className="text-base sm:text-lg text-white mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full h-[45px] p-3 text-base sm:text-lg bg-white/80 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all duration-300"
            placeholder="xyz@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="message" className="text-base sm:text-lg text-white mb-2 font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            className="w-full p-3 text-base sm:text-lg bg-white/80 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all duration-300"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#4a90e2] text-white font-medium px-9 py-3 text-base sm:text-lg rounded-2xl shadow-md hover:bg-[#357ABD] transition-colors duration-300"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

