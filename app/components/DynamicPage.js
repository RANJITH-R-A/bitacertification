"use client";

import ContactForm from "./ContactForm";
import Faq from "@/app//components/Faq";
import { useParams } from "next/navigation";
import { allCertifications } from "../util/constants";
import MobileviewForm from "@/app/components/MobileviewForm"


export default function DynamicPage() {
  const { slug } = useParams();
  const certification = allCertifications[slug];

  return (
    <>
      {certification ? (
        <div>
          <section className="flex ">
            <div className="lg:w-[73%] px-4 md:px-8 py-6 text-[15px]">
              <h1 className="text-2xl text-themeblue font-semibold my-5">
                {certification.cheading}
              </h1>

              {certification.courseoverview && (
                <>
                  {Array.isArray(certification.courseoverview) ? (
                    <ul className=" list-none text-justify">
                      {certification.courseoverview.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">{certification.courseoverview}</p>
                  )}
                </>
              )}

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.whytakecourseheading}
              </h2>

              {certification.wtcintro && (
                <p className="my-2">{certification.wtcintro}</p>
              )}

              {certification.wtcoursecontent && (
                <>
                  {Array.isArray(certification.wtcoursecontent) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.wtcoursecontent.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">{certification.wtcoursecontent}</p>
                  )}
                </>
              )}

              <div className="block md:hidden mt-4">
              <MobileviewForm/>
              </div>

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.whocanlearnheading}
              </h2>

              {/* <p className="my-2">{certification.wclcontent}</p> */}
              {certification.wclcontent && (
                <p className="my-2">{certification.wclcontent}</p>
              )}

              {certification.wclpoints && (
                <>
                  {Array.isArray(certification.wclpoints) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.wclpoints.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">{certification.wclpoints}</p>
                  )}
                </>
              )}

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.courseprerequestheading}
              </h2>

              {certification.prerequestintro && (
                <p className="my-2">{certification.prerequestintro}</p>
              )}

              {certification.courseprerequcontent && (
                <>
                  {Array.isArray(certification.courseprerequcontent) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.courseprerequcontent.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">
                      {certification.courseprerequcontent}
                    </p>
                  )}
                </>
              )}

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.howtoapplyheading}
              </h2>

              {certification.htaintro && (
                <p className="my-2">{certification.htaintro}</p>
              )}

              {certification.howtoapplycontent && (
                <>
                  {Array.isArray(certification.howtoapplycontent) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.howtoapplycontent.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">
                      {certification.howtoapplycontent}
                    </p>
                  )}
                </>
              )}

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.costofcourseheading}
              </h2>

              {/* <p className=" leading-6">{certification.costofcoursecontent}</p> */}
              {/* {certification.costofcoursecontent && (
                <p className="leading-6">{certification.costofcoursecontent}</p>
              )} */}

              {certification.costofcoursecontent &&  (
                <>
                  {Array.isArray(certification.costofcoursecontent) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.costofcoursecontent.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">
                      {certification.costofcoursecontent}
                    </p>
                  )}
                </>
              )}

              <h2 className="text-xl text-themeblue font-medium my-5">
                {certification.obtaincourseheading}
              </h2>

              {certification.obtainintro && (
                <p className="my-2">{certification.obtainintro}</p>
              )}

              {certification.obtaincoursecontent && (
                <>
                  {Array.isArray(certification.obtaincoursecontent) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.obtaincoursecontent.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">
                      {certification.obtaincoursecontent}
                    </p>
                  )}
                </>
              )}

              {certification.significanceheading && (
                <h2 className="text-xl text-themeblue font-medium my-5">
                  {certification.significanceheading}
                </h2>
              )}

              {certification.signficcanintro && (
                <p className="my-2">{certification.signficcanintro}</p>
              )}

              {certification.significancepoints && (
                <>
                  {Array.isArray(certification.significancepoints) ? (
                    <ul className=" list-disc ms-8 text-justify">
                      {certification.significancepoints.map((item, index) => (
                        <li key={index} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-6 text-justify">
                      {certification.significancepoints}
                    </p>
                  )}
                </>
              )}

              {certification.coheading && (
                <h2 className="text-xl text-themeblue font-medium my-5">
                  {certification.coheading}
                </h2>
              )}

              {certification.cointro && (
                <p className="my-2">{certification.cointro}</p>
              )}


              {certification.careeroppotunities && (
                <>
                  {Array.isArray(certification.careeroppotunities) ? (
                    <div>
                      {certification.careeroppotunities.map((career, index) =>
                        typeof career === "object" && career !== null ? (
                          <div key={index}>
                            {career.coptitle && (
                              <h2 className="text-md ms-2 my-2 text-themeblue">
                                {career.coptitle}
                              </h2>
                            )}
                            {Array.isArray(career.cocontent) && (
                              <ul className="list-disc ms-8 text-justify">
                                {career.cocontent.map((item, i) => (
                                  <li key={i} className="mb-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <div key={index}>
                            <ul className="list-disc ms-8 text-justify">
                              <li className="mb-1">{career}</li>
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="leading-6">
                      {certification.careeroppotunities?.cocontent}
                    </p>
                  )}
                </>
              )}

              {/* certification syllabus start  */}
              <h2 className="text-xl text-themeblue font-medium mt-8">
                {certification.code} Certification Syllabus
              </h2>
              <Faq />
              {/* certification syllabus end  */}

              <h2 className="text-xl text-themeblue font-medium my-2">
                Conclusion
              </h2>

              {certification.finally && (
                <>
                  {Array.isArray(certification.finally) ? (
                    <ul className=" list-none ms-8 text-justify">
                      {certification.finally.map((item, index) => (
                        <li key={index} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="my-2 text-justify">{certification.finally}</p>
                  )}
                </>
              )}

              {/* <p className="my-2">{certification.finally}</p> */}
            </div>
            <div className=" w-[27%] pt-9 pe-8 max-lg:hidden">
              <div className="bg-themeblueprint text-themewhite p-5 mx-auto rounded-md">
                <p className="text-center pb-3">
                  Blue Print of {certification.code} Exam
                </p>
                {certification.examblueprint && (
                  <>
                    {Array.isArray(certification.examblueprint) ? (
                      <ul className=" text-[12px] border border-themewhite p-5 rounded-md">
                        {certification.examblueprint.map((item, index) => (
                          <li key={index} className="pb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="pb-1 text-center">
                        {certification.examblueprint}
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="my-10">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading or No Certification Found</p>
      )}
    </>
  );
}
