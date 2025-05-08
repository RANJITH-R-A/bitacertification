import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-themegray pt-4 pb-6 px-14 text-sm text-themeblue">
                <div className="py-8 border-b-2 border-b-white  grid gap-y-6 lg:gap-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center ">
                    <div className="w-42">
                         <Image src="/homepageimages/bitalogo.png" width={90} height={90} alt="BITA Logo" className="pb-4"/>
                        <ul className="flex flex-col gap-y-2">
                            <li>5/44, Valluvar Salai, Ramapuram, Chennai 600089</li>
                            <li>Phone : +91 9566004616</li>
                        </ul>
                    </div>
                    <div className="w-42">
                        <ul className=" leading-7">
                            {/* <li>Home</li> */}
                           <li>
                           <Link href="/">Home</Link>
                           </li>
                            <li>
                                <Link href="/aboutus">AboutUs</Link>
                            </li>
                            <li>
                              <Link href="/contactus">ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-42">
                        <ul className="leading-7">
                            <li>Python Institute Certification</li>
                            <li>Microsoft Certification</li>
                            <li>Comptia Certification</li>
                            <li>GIAC Certification</li>
                            <li>ISACA Certification</li>
                        </ul>
                    </div>
                    <div className="w-42">
                           <ul className="flex gap-x-5">
                            <li className="bg-white p-2 rounded-3xl"><a href="https://www.instagram.com/bitahelpdesk/" target="_blank" rel="noopener noreferrer"><SiInstagram size={21} className="bg-white" /></a></li>
                            <li className="bg-white p-2 rounded-3xl"><a href="https://www.facebook.com/BitaAcademy/" target="_blank" rel="noopener noreferrer"><SiFacebook size={21}/></a></li>
                            <li className="bg-white p-2 rounded-3xl"><a href="https://x.com/Bitaaacademy" target="_blank" rel="noopener noreferrer"><SiX size={21} /></a></li>
                            <li className="bg-white p-2 rounded-3xl"><a href="https://www.linkedin.com/company/bita-it-training-academy/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={21} /></a></li>
                            </ul>        
                    </div>
                </div>
                <div className="pt-6 text-xs text-themeblack">Copyrights © 2023 Bit Park Private Limited · Privacy Policy · All Rights Reserved · Made in BIT Park Pvt Ltd</div>
            </footer>
        </>
    );
}