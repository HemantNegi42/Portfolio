import Image from "next/image";
import Link from "next/link";

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
        <div className="my-8 px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between flex-col lg:flex-row">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#0050FF] text-xl font-bold">2018-2021</h1>
            <p className="text-lg font-light">MBGPG KU</p>
            <p className="text-sm font-extralight">BSc.</p>
          </div>
          <div className="lg:w-1/2">
            <p>
              During my time at K University, I excelled in programming
              languages like C,C++ and Java and actively participated in
              projects focused on Full Stack Web Devlopment.
            </p>
          </div>
        </div>
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
            <Image alt="html" src={"/html.png"} width={48} height={48} />
            <Image alt="css" src={"/css.png"} width={48} height={48} />
            <Image alt="js" src="/js.png" width={48} height={48} />
            <Image alt="react" src="/react.png" width={48} height={48} />
            <Image alt="mongodb" src="/mongodb.png" width={48} height={48} />
            <Image alt="c" src="/c.png" width={48} height={48} />
            <Image alt="c++" src="/cpp.png" width={48} height={48} />
            <Image alt="nextjs" src="/nextjs.png" width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
}
