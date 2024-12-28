import Image from "next/image";
import profile from "../../public/Profile.png";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Projects</h1>

      <div className="w-[50%]">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          voluptatem libero a, aliquam non voluptatum commodi quas sequi
          praesentium quibusdam fugiat odit harum nulla molestiae doloribus quod
          similique ad facilis.
        </p>
        <div className="bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row">
          <div className="px-10 py-20 w-[60%] flex flex-col">
            <div>
              <h1 className="text-[#0050FF] text-xl font-bold">Project1</h1>
              <p className="text-md font-semibold ">Role Title</p>
              <p className="text-sm font-extralight">TechStack</p>
            </div>
            <p className="my-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              voluptas a itaque ab voluptatum unde architecto quas optio quod
              maiores. Illum modi sapiente fugiat similique consectetur laborum
              doloremque velit mollitia!
            </p>
          </div>
          <div className="lg:w-1/2 rounded-lg">
            <Image alt="project" src={profile} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
