import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
export default function Footer() {
    return (
        <>
            <footer className="bg-themegray pt-4 pb-6 px-14 text-sm text-themeblue">
                <div className="py-8 border-b-2 border-b-white  grid gap-y-6 lg:gap-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center ">
                    <div className="w-42">
                        <ul className="flex flex-col gap-y-2">
                            <li>5/44, Valluvar Salai, Ramapuram, Chennai 600089</li>
                            <li>Phone : +91 9566004616</li>
                        </ul>
                    </div>
                    <div className="w-42">
                        <ul className=" leading-7">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
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
                            <li className="bg-white p-2 rounded-3xl"><SiInstagram size={21} className="bg-white" /></li>
                            <li className="bg-white p-2 rounded-3xl"><SiFacebook size={21} /></li>
                            <li className="bg-white p-2 rounded-3xl"> <SiX size={21} />  </li>
                            </ul>        
                    </div>
                </div>
                <div className="pt-6 text-xs text-themeblack">Copyrights © 2023 Bit Park Private Limited · Privacy Policy · All Rights Reserved · Made in BIT Park Pvt Ltd</div>
            </footer>
        </>
    );
}