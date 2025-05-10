import ContactPage from "@/app/components/ContactPage"

export const metadata = {
    title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
    description: "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: "https://certificationtraining.in/contactus",
    },
    openGraph: {
      title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
      description: "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
      url: "https://certificationtraining.in/contactus",
      siteName: "Certification Trainings",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "ContactUs | BITA Academy - Best IT Certification in Chennai",
      description: "ContactUs | Enquire for course fee and schedule a free demo. Call +91 95660 04626 for more details.",
      images: ["https://certificationtraining.in/bitalogo.png"], 
    },
  };

export default function Page() {

  return(
    <>
    <ContactPage/>
    </>
  )
    // return (
    //    <>

    //       {/* about banner start */}
    //                <section className="bg-[url(/contactpageimages/contactusbanner.png)] bg-center bg-cover h-96 relative">
    //                    <div className=" flex items-center justify-center lg:justify-end h-full pe-6 lg:pe-20">
    //                        <div>
    //                            <h1 className="text-themeblue font-bold text-2xl text-center lg:text-start">Have a Question?</h1>
    //                            <p className="text-lg text-themelightblack mt-3 text-center lg:text-start">Contact us now and get the answers you need!</p>
    //                        </div>
    //                     </div>
    //                </section>
    //                {/* about banner end */}

    //                {/* contact info start */}
    //                <section className="relative bottom-8">
    //                   <div className="w-10/12 gap-10 text-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    //                    <div className="bg-gray-300 bg-opacity-60 py-14 shadow-md rounded-md relative">
    //                         <p>+91 99403 24646 <br/>+91 95660 04626</p>
    //                        <p className=" absolute -top-5 left-[45%]  bg-themeblue text-themewhite p-3 text-lg rounded-full"> <LuPhoneCall /></p>
    //                     </div>
    //                     <div className="bg-gray-300 bg-opacity-60 pt-8 px-2 max-lg:py-14 shadow-md rounded-md relative">
    //                         <p>
    //                         BITA Best IT Academy <br/>
    //                         5/44, Valluvar Salai, Ramapuram,Chennai 600089 <br/>
    //                         Landmark: Opp to HP Petrol Bunk</p>
    //                        <p className=" absolute -top-5 left-[45%]  bg-themeblue text-themewhite p-3 text-lg rounded-full"><LuMapPin /></p>
    //                     </div>
    //                     <div className="bg-gray-300 bg-opacity-60 py-14 shadow-md rounded-md relative">
    //                         <p>info@bitaacademy.com <br/>bitahelpdesk@gmail.com</p>
    //                         <p className=" absolute -top-5 left-[45%]  bg-themeblue text-themewhite p-3 text-lg rounded-full"><LuMail /></p>
    //                     </div>
    //                   </div>
    //                </section>
    //                {/* contact info end */}

    //                {/* get in touch start */}
    //                 <section className="bg-[url(/contactpageimages/contactusformbg.png)] my-7">
    //                     <div className="py-24">
    //                         <form className="w-9/12 mx-auto">
    //                         <h2 className="text-themeblue text-3xl font-bold">Get in Touch</h2>
    //                         <input type="text"  name="name" placeholder="Name" className="w-full border-b-[1.5px] px-1 py-2 my-4 bg-white/0 border-b-themelightblack  placeholder-themelightblack outline-none" /> 
    //                         <input type="number"  name="number" placeholder="Mobile Number" className="w-full border-b-[1.5px] px-1 py-2 my-4 bg-white/0 border-b-themelightblack  placeholder-themelightblack  outline-none" /> 
    //                         <input type="email"  name="email" placeholder="Email" className="w-full border-b-[1.5px] px-2 py-1 my-4 bg-white/0 border-b-themelightblack  placeholder-themelightblack  outline-none" /> 
    //                         <input type="text"  name="certification name" placeholder="Certification Name" className="w-full border-b-[1.5px] px-1 py-2 my-4 bg-white/0 border-b-themelightblack  placeholder-themelightblack  outline-none" /> 
    //                         <input type="text"  name="mode of training" placeholder="Mode of Training" className="w-full border-b-[1.5px] px-1 py-2 my-4 bg-white/0 border-b-themelightblack  placeholder-themelightblack  outline-none" /> 
    //                         <div className="flex justify-end">
    //                         <button type="submit" className="bg-themeblue text-white py-2 w-1/3 my-4  block shadow-md">Submit</button>
    //                         </div>
    //                         </form>
    //                     </div>
    //                 </section>
    //                {/* get in touch end */}

    //                {/* loction start */}
    //                <div className="mx-0 my-7">
    //                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0791427540134!2d80.18098060905058!3d13.030631987237143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d454408c93%3A0xf439976d9ab8a2f2!2sBITA%20IT%20Academy!5e0!3m2!1sen!2sin!4v1743228394906!5m2!1sen!2sin" className="w-full h-96 " loading="lazy" ></iframe>
    //                </div>
    //                {/* loction start */}

    
    //    </>
    // );
}