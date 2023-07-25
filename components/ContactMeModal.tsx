import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: any;
}

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
    setTimeout(onClose, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 flex flex-col items-center p-8 rounded-2xl bg-custom_dark text-custom_light">
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
            className="px-8 py-2 mt-4 text-white bg-green-500 rounded"
          >
            Send
          </button>
        </form>
        <button
          className="px-6 py-2 mt-4 mb-2 text-white rounded bg-custom_highlight"
          onClick={onClose}
        >
          Close
        </button>
        {contacted && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1.5 }}

            className="px-4 pt-4"
          >
            Email successfully sent! 🎉
          </motion.h2>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
