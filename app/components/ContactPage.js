"use client"

import React, { useRef, useState } from "react"
import emailJs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { LuMail, LuMapPin, LuPhoneCall } from "react-icons/lu"

// export const metadata = {
//   title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
//   description:
//     "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//   },
//   alternates: {
//     canonical: "https://certificationtraining.in/contactus",
//   },
//   openGraph: {
//     title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
//     description:
//       "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
//     url: "https://certificationtraining.in/contactus",
//     siteName: "Certification Trainings",
//     type: "website",
//   },
//   twitter: {
//     card: "summary",
//     title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
//     description:
//       "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
//   },
// }

export default function ContactPage() {
  const form = useRef()
  const [uiMessage, setUiMessage] = useState({ text: "", type: "" })

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_certification: "",
    user_mode_of_training: "",
  })

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      await emailJs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_2,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )

      setUiMessage({
        text: "✅ Thanks for contacting us! We will be in touch with you shortly. If you have any questions, feel free to call us at +91 99403 24626",
        type: "success",
      })
      toast.success(
        "✅ Thanks for contacting us! We will be in touch with you shortly. If you have any questions, feel free to call us at +91 99403 24626"
      )
      clearFormFields()
    } catch (error) {
      console.error("Error sending email:", error)
      setUiMessage({
        text: "❌ There was an issue sending your message. Please try again later or contact us directly at +91 99403 24626.",
        type: "error",
      })
      toast.error(
        "❌ There was an issue sending your message. Please try again later or contact us directly at +91 99403 24626."
      )
    }
  }

  const clearFormFields = () => {
    setFormData({
      user_name: "",
      user_phone: "",
      user_email: "",
      user_certification: "",
      user_mode_of_training: "",
      user_time: "",
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <>
      {/* about banner start */}
      <section className="relative h-96 bg-[url(/contactpageimages/contactusbanner.png)] bg-cover bg-center">
        <div className="flex h-full items-center justify-center pe-6 lg:justify-end lg:pe-20">
          <div>
            <h1 className="text-center text-2xl font-bold text-themeblue lg:text-start">
              Have a Question?
            </h1>
            <p className="mt-3 text-center text-lg text-themelightblack lg:text-start">
              Contact us now and get the answers you need!
            </p>
          </div>
        </div>
      </section>
      {/* about banner end */}

      {/* contact info start */}
      <section className="relative bottom-8">
        <div className="mx-auto grid w-10/12 grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-md bg-gray-300 bg-opacity-60 py-14 shadow-md">
            <p>
              +91 9403 24646 <br />
              +91 95660 04626
            </p>
            <p className="absolute -top-5 left-[45%] rounded-full bg-themeblue p-3 text-lg text-themewhite">
              {" "}
              <LuPhoneCall />
            </p>
          </div>
          <div className="relative rounded-md bg-gray-300 bg-opacity-60 px-2 pt-8 shadow-md max-lg:py-14">
            <p>
              BITA Best IT Academy <br />
              5/44, Valluvar Salai, Ramapuram,Chennai 600089 <br />
              Landmark: Opp to HP Petrol Bunk
            </p>
            <p className="absolute -top-5 left-[45%] rounded-full bg-themeblue p-3 text-lg text-themewhite">
              <LuMapPin />
            </p>
          </div>
          <div className="relative rounded-md bg-gray-300 bg-opacity-60 py-14 shadow-md">
            <p>
              info@bitaacademy.com <br />
              bitahelpdesk@gmail.com
            </p>
            <p className="absolute -top-5 left-[45%] rounded-full bg-themeblue p-3 text-lg text-themewhite">
              <LuMail />
            </p>
          </div>
        </div>
      </section>
      {/* contact info end */}

      {/* get in touch start */}
      <section className="my-7 bg-[url(/contactpageimages/contactusformbg.png)]">
        <ToastContainer />
        <div className="py-24">
          {/* UI Message Display */}
          {uiMessage.text && (
            <div
              className={`my-4 rounded p-2 text-center text-white ${
                uiMessage.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {uiMessage.text}
            </div>
          )}

          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            className="mx-auto w-9/12"
          >
            <h2 className="text-3xl font-bold text-themeblue">Get in Touch</h2>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              value={formData.user_name}
              onChange={handleInputChange}
              className="my-4 w-full border-b-[1.5px] border-b-themelightblack bg-white/0 px-1 py-2 placeholder-themelightblack outline-none"
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
              className="my-4 w-full border-b-[1.5px] border-b-themelightblack bg-white/0 px-1 py-2 placeholder-themelightblack outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              value={formData.user_email}
              onChange={handleInputChange}
              className="my-4 w-full border-b-[1.5px] border-b-themelightblack bg-white/0 px-2 py-1 placeholder-themelightblack outline-none"
            />
            <input
              type="text"
              name="user_certification"
              required
              placeholder="Certification Name or Code"
              value={formData.user_certification}
              onChange={handleInputChange}
              className="my-4 w-full border-b-[1.5px] border-b-themelightblack bg-white/0 px-1 py-2 placeholder-themelightblack outline-none"
            />
            <input
              type="text"
              name="user_mode_of_training"
              placeholder="Mode of Training"
              value={formData.user_mode_of_training}
              onChange={handleInputChange}
              className="my-4 w-full border-b-[1.5px] border-b-themelightblack bg-white/0 px-1 py-2 placeholder-themelightblack outline-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="my-4 block w-1/3 bg-themeblue py-2 text-white shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* get in touch end */}

      {/* loction start */}
      <div className="mx-0 my-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0791427540134!2d80.18098060905058!3d13.030631987237143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d454408c93%3A0xf439976d9ab8a2f2!2sBITA%20IT%20Academy!5e0!3m2!1sen!2sin!4v1743228394906!5m2!1sen!2sin"
          className="h-96 w-full"
          loading="lazy"
        ></iframe>
      </div>
      {/* loction start */}
    </>
  )
}