"use client"
import CertificationAll from "@/app/components/CertificationAll"
import MobileviewForm from "@/app/components/MobileviewForm"
import MobileviewSlider from "@/app/components/MobileviewSlider"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>

        {/* home banner start */}

        <section className="relative h-96 px-4">
  {/* Hero Banner Image */}
  <Image 
    src="/homepageimages/homebannerimage_1.webp"
    alt="Certification Banner"
    fill
    className="object-cover object-center z-0"
    priority // tells Next.js to preload it
  />

  {/* Content Overlay */}
  <div className="flex items-center justify-center md:justify-end h-full relative z-10">
    <div className="lg:pr-[140px]">
      <h1 className="text-themeblue font-bold text-2xl lg:text-2xl text-center lg:text-start">
        Simplify Your Certification Exam Journey!
      </h1>
      <p className="text-lg text-themelightblack text-center lg:text-start py-2">
        Your Ultimate Online Companion for Professional Certification Mastery.
      </p>
    </div>

    {/* Bottom Image Items */}
    <div className="absolute -bottom-14 md:-bottom-24">
      <Image
        src="/homepageimages/homebanneritem.webp"
        height={256}
        width={320}
        alt="banneritemimage"
        className="max-md:hidden"
      />
      <Image
        src="/homepageimages/homebanneritem.webp"
        height={200}
        width={200}
        alt="banneritemimage"
        className="max-md:block hidden"
      />
    </div>
  </div>
</section>

        {/* training pattern start */}
        <section className="max-lg:mt-[50px] lg:my-[50px] mx-5 lg:mx-11 text-sm text-justify">
         <h2 className="text-themeblue font-bold text-center lg:text-start text-2xl my-7">
          Conquer certification exams fearlessly with BITA
         </h2>
         <p className="text-md text-themelightblack">Are you seeking a career shift but are terrified by the thought of certification exams? Look no further than BITA IT certification Programs online! We recognize that facing certification examinations might be intimidating, but we are here to help you overcome your concerns and achieve your professional objectives. At BITA, we provide comprehensive  IT certification programs online that will give you the knowledge, skills, and confidence you need to pass your tests. Our skilled teachers offer personalized assistance and support at every stage, ensuring you are prepared to succeed on exam day.</p>
         <p className="my-4 text-md text-themelightblack">We provide everything you need to get Microsoft, Python, CompTIA, GIAC, ISACA, or any other IT certification programs online. Our bespoke training approach suits learners of all levels, from beginners to seasoned professionals looking to upskill or transition into new professions.</p>
         <p className="text-md text-themelightblack">Do not allow fear to stop you from chasing your dreams. Join BITA IT certification Programs online today and take the first step toward a successful career in the ever-changing world of information technology.</p>
        </section>
        {/* training pattern end */}

       <div className="block md:hidden my-6">
       <MobileviewForm/>
      </div>

      {/* certification slides mobile view start  */}
      <div className="block lg:hidden">
      <MobileviewSlider/>
      </div>
      {/* certification slides mobile view end */}

        {/* certification start  */}
        <div className="my-4 max-lg:hidden block">
        <CertificationAll/>
        </div>
        {/* certification start  */}

      </main>
    </>
  );
}
