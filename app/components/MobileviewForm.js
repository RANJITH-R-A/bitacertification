'use client';
import { useState } from 'react';
import ContactForm from "@/app/components/ContactForm";
import { X } from "lucide-react";

export default function DemoFormModal() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      {/* Button to Open Modal */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-themeblue text-white px-14 py-2 rounded mx-auto block"
      >
        Certification Enquiry
      </button>

      {/* Overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300">
          <div className="relative bg-white w-[75%] max-w-md shadow-lg p-4 rounded scale-100 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
            >
              <X size={16} />
            </button>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
