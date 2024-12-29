import Image from "next/image";
import html from "../../public/icons8-html-48.png";
import css from "../../public/icons8-css-48.png";
import js from "../../public/icons8-js-48.png";
import react from "../../public/react.png";
import mongodb from "../../public/mongodb.png";
import leetcode from "../../public/leetcode.png";
import gfg from "../../public/GFG.png";
import c from "../../public/c.png";
import cpp from "../../public/cpp.png";
import next from "../../public/icons8-nextjs-48.png";
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
          <h1 className="text-2xl font-bold mb-10">Coding Profiles</h1>
          <div className="grid grid-cols-4 gap-3 place-items-center">
            <a href="https://leetcode.com/u/Hemant_42/" target="_blank">
              <Image alt="leetcode" src={leetcode} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/hemantntz56/"
              target="blank"
            >
              <Image alt="gfg" src={gfg} />
            </a>
          </div>
          <h1 className="text-2xl font-bold my-10">Language</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 place-items-center">
            <Image alt="html" src={html} />
            <Image alt="css" src={css} />
            <Image alt="js" src={js} />
            <Image alt="react" src={react} />
            <Image alt="mongodb" src={mongodb} />
            <Image alt="c" src={c} />
            <Image alt="c++" src={cpp} />
            <Image alt="nextjs" src={next} />
          </div>
        </div>
      </div>
    </div>
  );
}
