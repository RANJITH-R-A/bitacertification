"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";
import { CertificationList } from "../util/certificationList";

export default function CertificationPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredCertifications = CertificationList.map((category) => ({
    ...category,
    subcategories: category.subcategories
      .map((subcategory) => ({
        ...subcategory,
        items: subcategory.items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.code.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((subcategory) => subcategory.items.length > 0),
  })).filter((category) => category.subcategories.length > 0);

  return (
    <div className=" relative flex flex-col md:flex-row h-screen lg:h-auto">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={` absolute md:relative z-50 md:z-10 top-0 left-0 overflow-y-auto h-auto bg-gray-50 shadow-md border-r border-gray-200 py-6 ps-3 pe-2 transition-transform duration-300 ${
          isSidebarOpen
            ? "translate-x-0 w-68"
            : "-translate-x-full md:w-72 md:translate-x-0"
        }`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 bg-red-500 text-themewhite px-3 py-1 rounded-md"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl text-themeblue font-bold mb-4">
          Certification Courses
        </h2>

        <input
          type="text"
          placeholder="Search course or code"
          className="border p-2 w-full mb-4 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h3 className="text-lg text-themeblue font-bold mb-2">Categories</h3>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer text-themeblack text-sm font-bold ${
              !selectedCategory ? "underline" : ""
            }`}
            onClick={() => {
              setSelectedCategory(null);
              setIsSidebarOpen(false);
            }}
          >
            Show All Certifications
          </li>
          {CertificationList.map((category) => (
            <li key={category.category}>
              <h4 className="text-md text-themeblue mb-1">
                {category.category}
              </h4>
              <ul className="ml-4 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <li
                    key={subcategory.name}
                    className="text-sm cursor-pointer text-themelightblack hover:text-themeblue"
                    onClick={() => {
                      setSelectedCategory(
                        selectedCategory === subcategory.name
                          ? null
                          : subcategory.name
                      );
                      setIsSidebarOpen(false);
                    }}
                  >
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

<div className="my-10 max-md:hidden">
<ContactForm />
</div>
      </aside>

      {/* Main Content */}
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="flex gap-2 justify-center md:hidden p-2 mx-6 my-1 bg-themeblue text-themewhite rounded-md w-80"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={24} />
        All Certification Categories
      </button>
      <main className="flex-1 p-4 overflow-y-auto">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((category) =>
            category.subcategories.map(
              (subcategory) =>
                (!selectedCategory ||
                  selectedCategory === subcategory.name) && (
                  <div key={subcategory.name} className="mb-6">
                    <h2 className="text-lg font-bold text-themeblue my-5">
                      {subcategory.name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {subcategory.items.map((item) => (
                        <div key={item.code}>
                          <Link href={`/certifications/${item.slug}`}>
                            <div
                              key={item.code}
                              className="border p-1 rounded-lg flex items-center space-x-3 my-3 shadow-md bg-themewhite"
                            >
                              <Image
                                src={item.c_image}
                                alt="LogoBadge"
                                width={100}
                                height={90}
                              />
                              {/* <img src={item.c_image} alt="Badge" className="w-28 h-28 object-contain" /> */}
                              <div>
                                <h3 className="font-bold">{item.code}</h3>
                                <p className="text-sm text-gray-600">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )
          )
        ) : (
          <p className="text-themegray">No certifications found.</p>
        )}
      </main>
    </div>
  );
}
