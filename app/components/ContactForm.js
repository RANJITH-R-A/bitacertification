"use client";
import React, { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();
  const [uiMessage, setUiMessage] = useState({ text: "", type: "" });

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_certification: "",
    user_date: "",
    user_time: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailJs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      setUiMessage({
        text: "✅ Thanks for contacting us! We will be in touch with you shortly. If you have any questions, feel free to call us at +91 99403 24626",
        type: "success",
      });
      toast.success(
        "✅ Thanks for contacting us! We will be in touch with you shortly. If you have any questions, feel free to call us at +91 99403 24626"
      );
      clearFormFields();
    } catch (error) {
      console.error("Error sending email:", error);
      setUiMessage({
        text: "❌ There was an issue sending your message. Please try again later or contact us directly at +91 99403 24626.",
        type: "error",
      });
      toast.error(
        "❌ There was an issue sending your message. Please try again later or contact us directly at +91 99403 24626."
      );
    }
  };

  const clearFormFields = () => {
    setFormData({
      user_name: "",
      user_phone: "",
      user_email: "",
      user_certification: "",
      user_date: "",
      user_time: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center  items-center rounded-lg">
      <ToastContainer /> {/*  Toast Notification Container */}
      <div className="w-full max-w-6xl bg-gray-300 rounded-md">
        <h2 className="text-md text-white bg-themeblue px-4 py-2 rounded-t-md">
          Schedule a Demo - 30 Mins
        </h2>

        {/* UI Message Display */}
        {uiMessage.text && (
          <div
            className={`p-2 my-4 text-white text-center rounded ${
              uiMessage.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {uiMessage.text}
          </div>
        )}

        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="space-y-4 px-2 py-4 text-[12px]"
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            value={formData.user_name}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            required
            name="user_phone"
            // pattern="[0-9]{10}"
            // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            value={formData.user_phone}
            title="Please enter a valid phone number"
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            value={formData.user_email}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="user_certification"
            required
            placeholder="Certification Name or Code"
            value={formData.user_certification}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="user_date"
            required
            placeholder="Available Date for Demo"
            value={formData.user_date}
            onFocus={(e) => (e.target.type = "date")} // Change to date picker on focus
            onBlur={(e) => {
              if (!formData.user_date) e.target.type = "text"; // Reset to text if no date selected
            }}
            onChange={handleInputChange}
            className="input-field"
          />

          <select
            name="user_time"
            required
            value={formData.user_time}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="">Select Available Time</option>
            {[...Array(24)].map((_, hour) =>
              ["00", "30"].map((minute) => {
                const period = hour < 12 ? "AM" : "PM";
                const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert 0 and 12 to 12
                const time = `${formattedHour}:${minute} ${period}`;
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })
            )}
          </select>

          <button
            type="submit"
            className="bg-themeblue text-white py-2 w-[50%] shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}