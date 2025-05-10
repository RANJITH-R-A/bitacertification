import Image from "next/image";

export const metadata = {
    title: "AboutUs | BITA Academy - Best IT Certification in Chennai",
    description: "BITA Academy-SHAPING THE FUTURE OF IT PROFESSIONALS FOR15 STRONG YEARS",
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: "https://certificationtraining.in/aboutus",
    },
    openGraph: {
      title: "AboutUs | BITA Academy - Best IT Certification in Chennai",
      description: "BITA Academy-SHAPING THE FUTURE OF IT PROFESSIONALS FOR15 STRONG YEARS",
      url: "https://certificationtraining.in/aboutus",
      siteName: "Certification Training",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "AboutUs | BITA Academy - Best IT Certification in Chennai",
      description: "BITA Academy-SHAPING THE FUTURE OF IT PROFESSIONALS FOR15 STRONG YEARS",
      images: ["https://certificationtraining.in/bitalogo.png"],
    },
  };

export default function AboutUs() {
const whybita = [
    {
    whychoosebitaheading : "Industry Proficient Instructors",
    wcbitacontent : "Our IT certification programs online are taught by seasoned professionals in the field. By imparting practical knowledge and real-world insights, they guarantee that our pupils not only comprehend the theoretical principles but also know how to implement them effectively in practical situations."
    },
    {
    whychoosebitaheading : "Comprehensive Curriculum",
    wcbitacontent : "Our IT certification programs online provide a comprehensive curriculum encompassing various subjects, including fundamental IT principles and advanced specialized skills. We offer courses that cater to your specific areas of interest, including software development, cloud computing, cybersecurity, data analytics, and more."
    }, 
    {
    whychoosebitaheading : "Practical Education",
    wcbitacontent : "Our stance is one of 'learning by doing.' As a result, our IT certification programs online are highly interactive and packed with laboratories, projects, and practical exercises to reinforce knowledge. Through simulated cybersecurity assaults and coding challenges, our hands-on approach guarantees that you acquire the knowledge, abilities, and self-assurance necessary to thrive in the field."
    },
     {
    whychoosebitaheading : "Adaptable Learning Alternatives",
    wcbitacontent : "We recognize that each individual's timetable is unique. We provide flexible learning options to facilitate students and professionals with hectic schedules. We have a solution to meet your requirements, whether you would instead attend classes in person at our state-of-the-art facilities or participate in live online sessions from the convenience of your residence."
    },
     {
    whychoosebitaheading : "Career Support",
    wcbitacontent : "We prioritize your success. Beyond delivering exceptional training, we also provide career support services designed to assist you in securing your ideal position. We provide comprehensive support throughout the process, including job placement assistance, mock interviews, and more"
    }
];

const roadmapskills = [
    {
    skillsheading : "Choose Your Path",
    skillscontent : [
        "Identify your career goals and interests.",
        "Explore certification tracks like Microsoft, Python, CompTIA, GIAC, ISACA, etc."
    ],
    skillsimg : "/aboutpageimages/step1.png"
    },
      {
    skillsheading : "Assess Your Skills",
    skillscontent : [
        "Evaluate your current knowledge and experience.",
        "Determine the level of certification that aligns with your expertise (Fundamental, Associate, Expert)."
    ],
    skillsimg : "/aboutpageimages/step2.png"
    },
      {
    skillsheading : "Select Your Certification",
    skillscontent : [
        "Based on your path and skill level, choose the appropriate certification.",
        "Explore the available exams and certification requirements."
    ],
    skillsimg : "/aboutpageimages/step3.png"
    },
      {
    skillsheading : "Prepare Strategically",
    skillscontent : [
        "Utilize the official chosen certification websites for learning resources and updates.",
        "Consider instructor-led training courses or self-paced study materials.",
        "Practice with hands-on labs and virtual environments."
    ],
    skillsimg : "/aboutpageimages/step4.png"
    },
      {
    skillsheading : "Dive into Exam Preparation",
    skillscontent : [
        "Study exam objectives thoroughly",
        "Utilize practice tests to assess your readiness.",
        "Review documentation and whitepapers related to your chosen certification."
    ],
    skillsimg : "/aboutpageimages/step5.png"
    },
      {
    skillsheading : "Engage with the Community",
    skillscontent : [
        "Join chosen certification forums and communities.",
        "Participate in study groups or discussion boards.",
        "Seek guidance and advice from certified professionals."
    ],
    skillsimg : "/aboutpageimages/step6.png"
    },
      {
    skillsheading : "Schedule Your Exam",
    skillscontent : [
        "Register for your exam through the respective official Certification Dashboard.",
        "Choose a convenient exam date and location."
    ],
    skillsimg : "/aboutpageimages/step7.png"
    },
      {
    skillsheading : "Take the Exam:",
    skillscontent : [
        "Remain calm and focused during the exam.",
        "Read each question carefully and manage your time effectively.",
        "Utilize the total exam duration to review and verify your answers."
    ],
    skillsimg : "/aboutpageimages/step8.png"
    },
      {
    skillsheading : "Celebrate Your Success",
    skillscontent : [
        "Upon passing the exam, celebrate your achievement!",
        "Update your resume and LinkedIn profile with your new certification.",
        "Consider pursuing advanced certifications or specialization to enhance your skills further."
    ],
    skillsimg : "/aboutpageimages/step9.png"
    },

];

    return (
        <div>
            {/* about banner start */}
            <section className="bg-[url(/aboutpageimages/cf_banner.png)] bg-center bg-cover h-96 relative">
                <div className=" flex items-center justify-center lg:justify-evenly h-full">
                {/* <img src="/aboutpageimages/bannerimg2.png" className="h-40 md:h-72 hidden md:block" alt="bannerimage" /> */}
                <Image src="/aboutpageimages/bannerimg2.png" height={230} width={300} className="hidden md:block" alt="bannerimage" />
                    <div className="p-4">
                        <h1 className="text-themeblue font-bold text-2xl text-center lg:text-start">
                            Be at the forefront of your industry
                        </h1>
                        <p className="text-lg text-themelightblack mt-3 text-center lg:text-start">Join BITA to name your certificate and <br className="hidden lg:block" /> propel your career forward.</p>
                    </div>
                    <div className="absolute md:right-11 -bottom-24 md:bottom-[-100]">
                    <Image src="/aboutpageimages/aboutbannerimg.png" height={220} width={420} alt="banneritemimage"/>
                    {/* <Image src="/aboutpageimages/aboutbannerimg.png" height={290} width={290} alt="banneritemimage" className="block md:hidden" /> */}
                    </div>
                </div>
            </section>
            {/* about banner end */}

            {/* about content start */}
            <section className="my-[80px] mx-5 md:mx-11 text-sm">
                <div>
                    <h2 className="text-themeblue font-bold text-2xl my-7">About BITA</h2>
                    <p className="text-sm text-justify">Welcome to BITA IT certification Programs online, where we help students and professionals achieve new heights in their current roles through comprehensive certification training programs. At BITA, we understand the constantly changing landscape of the IT sector and the significance of being ahead of the curve. That is why we are committed to offering high-quality training that prepares our students with the skills and information they need to succeed in their respective industries.</p>
                </div>
                <div>
                    <h2 className="text-themeblue font-bold text-2xl my-7">Our Mission</h2>
                    <ul className=" list-disc text-justify ms-6">
                        <li>Our objective is simple: to close the gap between desire and achievement.</li>
                        <li className="mt-2">Whether you are a fresh graduate trying to jumpstart your career or a seasoned professional looking to upskill, BITA has a variety of online IT Certification programs tailored to your needs.
                        </li>
                    </ul>
                </div>
                <div className="pb-10">
                    <h2 className="text-themeblue font-bold text-2xl my-7">
                    Certification That Sets You Apart
                    </h2>
                    <p className="text-sm text-justify">Earning a certification from BITA is more than just adding a credential to your resume it is a testament to your dedication and expertise. Our rigorous certification exams are designed to validate your skills and knowledge, giving you a competitive edge in the job market.</p>
                    <p className=" my-4 text-sm text-justify">But our online IT certification programs are more than just a piece of paper they are a badge of honor demonstrating your commitment to excellence and continuous learning. Whether you are aiming for industry-standard certifications like Python, CompTIA, Cisco, or Microsoft or seeking specialized certifications in emerging technologies, BITA has the resources and expertise to help you achieve your goals.</p>
                    <p className="text-sm text-justify">At BITA, we offer thorough certification training customized explicitly to each course is exam syllabus. Our dedication to quality extends to how we prepare our students for certification tests. We focus on authentic learning experiences and do not provide certification exam materials. We genuinely believe in the need for genuine preparation, which improves subject knowledge and cultivates critical skills for success in the field. While our service allows you to practice third-party certification examinations to assess your readiness and topic knowledge, our intensive training genuinely prepares you to thrive and confidently pass any certification exam.</p>
                </div>
                <section className="bg-themegray py-8 px-5">
                     <h2 className="text-themeblue font-bold text-2xl py-5">Why Choose BITA?</h2>
                     {
                        whybita.length > 0 ? (
                            whybita.map((getwhybit,index) => (
                                <div className="mb-5" key={index}>
                                  <h3 className="text-themeblue font-bold text-md my-1">{getwhybit.whychoosebitaheading}</h3>
                                  <p className="text-sm text-justify">{getwhybit.wcbitacontent}</p>
                            
                                 </div>
                                )
                            )
                        )
                         : <p>Data not found</p>
                     }
                </section>

                <section>
                    <div className="h-auto pt-10 md:text-justify">
                        <div className="flex items-center gap-4">
                            <Image src="/aboutpageimages/roadmap.png" width={90} height={90} alt="roadmap image"/>
                            {/* <img src="/aboutpageimages/roadmap.png" className="w-28 max-w-24" /> */}
                            <h2 className="text-themeblue font-bold text-2xl">Road Map To Success</h2>
                        </div>
                        <div className=" relative md:ms-4 pt-7">
                            {
                                roadmapskills.length > 0 ? (
                                  roadmapskills.map((getroadmapskills, index) => (
                                     <div key={index} className="flex items-center md:gap-x-24">
                                    <Image src={getroadmapskills.skillsimg} width={70} height={70} alt="skills images"/>
                                    {/* <img src={getroadmapskills.skillsimg} className="max-w-16" alt="skills images"/> */}
                                <div className="my-5 max-md:ps-8">
                                    <h3 className="text-themeblue text-lg my-1">{getroadmapskills.skillsheading}</h3>
                                    <ul className=" list-disc ms-4" >
                                        {
                                            getroadmapskills.skillscontent.map((getroadmapcontent,index) => ( <li key={index} className="py-1">{getroadmapcontent}</li>) )
                                        }
                                       
                                    </ul>
                                </div>
                            </div>
                                  ))
                                ) : <p>Data not found</p>
                            }
                       
                        <div className="p-3 w-7 bg-themegray hidden md:block h-full absolute top-6 left-24 rounded  "></div>

                        </div>
                    </div>
                </section>

            </section>

            {/* about content end */}

        </div>
    );
}