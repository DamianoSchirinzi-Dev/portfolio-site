import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {ContactModalProps} from "../types/Types";

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contacted, setContacted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/contact", formData)
        .then(() => displaySuccessMessage());

      // You can add additional logic here, such as displaying a success message
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  const displaySuccessMessage = () => {
    setContacted(true);
    setTimeout(onClose, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-montserrat">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="z-10 flex flex-col items-center p-8 mx-6 rounded-2xl bg-custom_dark text-custom_light">
        <button className="relative -top-1 -right-28" onClick={onClose}>
          <svg
            className="w-10 h-10 text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {contacted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center py-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="white"></path> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="white"></path> </svg>

            <h1 className="pt-8 pb-4 text-xl"> Your message has been sent <strong className="text-custom_highlight">succesfully!</strong>  ✅ </h1>
            <p className="text-sm leading-6 "> I appreciate your message and will reply as soon as possible.</p>
          </motion.div>
        ) : (
          <div>
            <h1 className="py-1 mb-4 text-3xl font-bold text-custom_highlight">Contact Me</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="mb-4">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border text-custom_dark"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border text-custom_dark"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-2 py-1 border text-custom_dark"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-2 mt-4 text-white rounded-xl bg-custom_highlight"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
