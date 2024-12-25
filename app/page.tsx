import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../public/Profile.png";

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

            <h1 className="text-4xl font-bold">Hemant Negi</h1>
            <p className="mt-2">MCA Graduate</p>
          </div>
          <div className="bg-white p-5 flex items-center justify-evenly">
            <a href="#" className="text-gray-500">
              <i className="fab fa-facebook">fb</i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-twitter">tw</i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-linkedin">li</i>
            </a>
            <a href="#" className="text-gray-500">
              <i className="fab fa-instagram">in</i>
            </a>
          </div>
        </div>
        <div className="p-8 lg:ml-8">
          <h1 className="text-9xl font-bold">Hello</h1>
          <p className="text-3xl mt-4">Here's who I am & what I do</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/resume"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              RESUME
            </Link>
            <Link
              href="projects"
              className="border border-gray-500 px-4 py-2 rounded"
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
