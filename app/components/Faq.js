import { useState} from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import {coursesyllabus} from "../util/syllabus"


export default function Faq() {
  const {slug} = useParams();
  const [openIndex, setOpenIndex] = useState(null);

const getsyllabus = coursesyllabus.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
   {getsyllabus ? (
     <div className="max-w-4xl px-0 pb-10 pt-7">
     {getsyllabus.syllabustopic.map((topics, index) => (
       <div key={index} className="border rounded-lg mb-2">
         <button
           className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all"
           onClick={() => toggleAccordion(index)}
         >
           <span className="font-medium">{topics.module}</span>
           <ChevronDown
             className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
           />
         </button>
         <motion.div
           initial={false}
           animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
           transition={{ duration: 0.15, ease: "easeInOut" }}
           className="overflow-hidden"
         >
           {
              <>
                            {Array.isArray(topics.moduledes) ? (
                               <>
                               { topics.moduledes.map((getsylb, index) => (
                               <div key={index}>
                                   <h2 className="text-md text-themeblue font-medium m-3" >{getsylb.topicheding}</h2>
                                   <ul className=" list-disc ms-10">
                                            {getsylb.topicdes.map((item, index) => (
                                                <li key={index} className="mb-1 texd-md">{item}</li>
                                            ))}
                                        </ul>
                               </div>
                               ))
                               }                                        
                               </>
                                    ) : (
                                        <p className="leading-6">Not published yet</p>
                            )}
              </>
             }
         </motion.div>
       </div>
     ))}
   </div>
   ) : (
      <p>Not published yet</p>
    )}
   </>
  );
}
