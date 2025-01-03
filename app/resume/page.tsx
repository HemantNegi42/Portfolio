import Image from "next/image";
import Link from "next/link";
import { skillsdata } from "./skills";
import { eduacationData } from "./education";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Resume</h1>
      <div className="lg:w-[50%] mx-4">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-bold">Education</h1>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="bg-[#0050FF] text-lg text-white px-6 rounded-full hover:bg-[#E6DACE] border-[#0050FF] border-2 hover:text-black "
          >
            Download
          </Link>
        </div>
        {eduacationData.map((data) => {
          return (
            <div
              key={data.college}
              className="px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row"
            >
              <div className="flex flex-col space-y-2">
                <h1 className="text-[#0050FF] text-xl font-bold">
                  {data.year}
                </h1>
                <p className="text-lg font-light">{data.college}</p>
                <p className="text-sm font-extralight">{data.course}</p>
              </div>
              <div className="lg:w-1/2">
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}

        <div className="my-8 px-10 py-20 bg-white shadow-2xl rounded-lg">
          <h1 className="text-2xl font-bold mb-10">Coding Profiles</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4  gap-3 place-items-center">
            <a href="https://leetcode.com/u/Hemant_42/" target="_blank">
              <Image
                alt="leetcode"
                src={"/leetcode.png"}
                height={48}
                width={48}
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/hemantntz56/"
              target="blank"
            >
              <Image alt="gfg" src={"/GFG.png"} width={48} height={48} />
            </a>
          </div>
          <h1 className="text-2xl font-bold my-10">Language</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
            {skillsdata.map((skill) => {
              return (
                <Image
                  key={skill.title}
                  alt={skill.title}
                  src={skill.image}
                  width={48}
                  height={48}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
