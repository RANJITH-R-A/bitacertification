"use client";
import { useParams } from "next/navigation";
import {examdetails} from "../util/examdetails"


export default function AboutExam() {
  const {slug} = useParams();
//   const [examway, setExamway] = useState([]);

// useEffect(() => {
//     const fetchexamData = async () => {
//         try {
//             const response = await fetch("/data/ExamDetails.json");
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             setExamway(data);
//         } catch (error) {
//             console.error("Error fetching JSON:", error);
//         }
//     };

//     fetchexamData(); 
// }, [slug]);


const getexamway = examdetails.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  return (
    <>
    <section className="md:w-[45%]">
        <section>
                <div>
                {
                  getexamway ? (
                    <ul className=" leading-9 ps-5">
                    <li className="text-sm py-1"><span className="text-themeblue font-bold">Exam Name:</span> {getexamway.examdetails.examname}</li>
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Exam Level:</span> {getexamway.examdetails.examlevel}</li>
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Exam Code: </span> {getexamway.examdetails.examcode}</li>
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Prerequisites:</span> {getexamway.examdetails.prereq}</li>
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Exam Length:</span> {getexamway.examdetails.examlength}</li>
                    {getexamway.examdetails.nofq && <li className=" text-sm py-1"><span className="text-themeblue font-bold">Number of Questions:</span> {getexamway.examdetails.nofq}</li>}
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Passing Score:</span> {getexamway.examdetails.passingscore}</li>
                    <li className=" text-sm py-1"><span className="text-themeblue font-bold">Price:</span> {getexamway.examdetails.price}</li>
                  </ul>
                  ) : (
                <p>exam details data not found </p>
                  )}

                </div>
              </section>
    </section>
    </>
  );
}
