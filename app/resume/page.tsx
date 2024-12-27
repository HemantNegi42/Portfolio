import Image from "next/image";
import html from "../../public/icons8-html-50.png";
import css from "../../public/icons8-css-50.png";
import js from "../../public/icons8-js-50.png";
import react from "../../public/icons8-react-50.png";
export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Resume</h1>
      <div className="w-[50%]">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-bold">Education</h1>
          <button className="bg-[#0050FF] text-lg text-white px-6 rounded-full hover:bg-[#E6DACE] border-[#0050FF] border-2 hover:text-black ">
            Download
          </button>
        </div>
        <div className="px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#0050FF] text-xl font-bold">2022-2024</h1>
            <p className="text-lg font-light">Graphic Era Hill University</p>
            <p className="text-sm font-extralight">MCA</p>
          </div>
          <div className="lg:w-1/2">
            <p>
              During my time at Graphic Era Hill University, I excelled in
              programming languages like C,C++ and Java and actively
              participated in projects focused on Full Stack Web Devlopment.
            </p>
          </div>
        </div>
        <div className="my-8 px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#0050FF] text-xl font-bold">2018-2021</h1>
            <p className="text-lg font-light">MBGPG KU</p>
            <p className="text-sm font-extralight">BSc.</p>
          </div>
          <div className="w-1/2">
            <p>
              During my time at K University, I excelled in programming
              languages like C,C++ and Java and actively participated in
              projects focused on Full Stack Web Devlopment.
            </p>
          </div>
        </div>
        <div className="my-8 px-10 py-20 bg-white shadow-2xl rounded-lg">
          <h1>Skillset</h1>
          <h1>Language</h1>
          <div className="grid grid-cols-4 gap-y-4">
            <Image alt="html" src={html} />
            <Image alt="html" src={css} />
            <Image alt="html" src={js} />
            <Image alt="html" src={react} />
            <Image alt="html" src={html} />
            <Image alt="html" src={html} />
            <Image alt="html" src={html} />
          </div>
        </div>
      </div>
    </div>
  );
}
