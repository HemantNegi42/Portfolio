import Image from "next/image";
import { data } from "./data";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Projects</h1>

      <p className="lg:w-[50%] text-light mx-4">
        Here are all my projects that showcase my journey and expertise as a
        developer. Each one reflects my dedication to learning and implementing
        cutting-edge technologies. Feel free to explore and see the ideas
        I&apos;ve brought to life.
      </p>

      {data.map((project, index) => (
        <div
          key={index}
          className="lg:w-[50%] mx-4 bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row"
        >
          <div className="px-10 py-10  lg:w-[60%] flex flex-col">
            <div>
              <h1 className="text-[#0050FF] text-xl font-bold">
                {project.title}
              </h1>
              <p className="text-md font-semibold ">{project.role}</p>
              <p className="text-sm font-extralight">{project.languageUsed}</p>
            </div>
            <p className="mt-4 lg:my-10 font-light">{project.description}</p>
          </div>
          <a
            className="lg:w-1/2 rounded-lg"
            href={project.link}
            target="_blank"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="h-full w-full"
              height={25}
              width={25}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
