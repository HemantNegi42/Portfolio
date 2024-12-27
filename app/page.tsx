import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../public/Profile.png";
import fb from "../public/icons8-facebook-32.png";
import insta from "../public/icons8-instagram-32.png";
import linkedin from "../public/icons8-linkedin-32.png";
import github from "../public/icons8-github-25.png";
export default function Home() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-center justify-center h-screen bg-[#E6DACE] w-screen lg:w-[40%]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center w-[60%]">
        <div className="flex flex-col justify-between  shadow-2xl rounded-lg">
          <div className="bg-[#f5ebe1] flex flex-col text-center p-16">
            <Image
              src={profilePhoto}
              alt="profile Photo"
              className="rounded-full mx-auto mb-4 bg-white lg:h-48 min-h-48 min-w-48 lg:w-48"
            />

            <h1 className="text-4xl font-bold">Hemant</h1>
            <h1 className="text-4xl font-bold">Negi</h1>
            <span className="h-0.5 w-16 bg-blue-600 my-6 mx-auto"></span>
            <p>MCA Graduate</p>
          </div>
          <div className="bg-white p-5 flex items-center justify-evenly">
            <a href="#" target="blank">
              <Image alt="fb" src={fb} height={25} width={25} />
            </a>
            <a href="https://www.instagram.com/__max.42/" target="blank">
              <Image alt="insta" src={insta} height={25} width={25} />
            </a>
            <a href="https://github.com/HemantNegi42" target="blank">
              <Image alt="github" src={github} height={25} width={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemant-negi-b2623127b/"
              target="blank"
            >
              <Image alt="linkedin" src={linkedin} height={25} width={25} />
            </a>
          </div>
        </div>
        <div className="p-8 lg:ml-8">
          <h1 className="text-9xl font-bold">Hello</h1>
          <p className="text-3xl mt-4">Here's who I am & what I do</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/resume"
              className="bg-[#0050FF] text-white px-8 py-2 rounded-full hover:bg-white border-[#0050FF] border-2 hover:text-black "
            >
              RESUME
            </Link>
            <Link
              href="projects"
              className="border border border-black px-8 py-2 rounded-full hover:bg-[#0050FF] hover:border-[#0050FF] hover:text-white"
            >
              PROJECTS
            </Link>
          </div>
          <p className="text-gray-600 mt-4">
            I am Hemant Negi.Passionate to work.
          </p>
          <p className="text-gray-600 mt-4"></p>
        </div>
      </div>
      <div className="bg-white md:h-screen h-60 lg:w-[60%] "></div>
    </div>
  );
}
