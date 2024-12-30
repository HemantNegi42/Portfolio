import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Projects</h1>

      <div className="w-[50%]">
        <p>
          Here are all my projects that showcase my journey and expertise as a
          developer. Each one reflects my dedication to learning and
          implementing cutting-edge technologies. Feel free to explore and see
          the ideas I’ve brought to life!
        </p>
        <div className="bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row">
          <div className="px-10 py-10  w-[60%] flex flex-col">
            <div>
              <h1 className="text-[#0050FF] text-xl font-bold">
                Weather Master
              </h1>
              <p className="text-md font-semibold ">Role Title</p>
              <p className="text-sm font-extralight">
                React, Node.js, and Tailwind CSS
              </p>
            </div>
            <p className="my-10 font-light">
              The Weather Master project is a comprehensive application designed
              to provide real-time weather updates, forecasts, and environmental
              insights. It utilizes APIs like OpenWeatherMap to fetch accurate
              data and presents it through an intuitive and visually appealing
              interface. The project includes features such as location-based
              weather tracking, multi-day forecasts, and weather condition
              alerts.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-lg">
            <Image
              alt="project"
              src={"/Profile.png"}
              className="h-full w-full"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row">
          <div className="px-10 py-10 w-[60%] flex flex-col">
            <div>
              <h1 className="text-[#0050FF] text-xl font-bold">FoodBites</h1>
              <p className="text-md font-semibold ">A food ordering website</p>
              <p className="text-sm font-extralight">MERN Stack</p>
            </div>
            <p className="my-10 font-light">
              FoodBites is a dynamic MERN stack application designed to simplify
              food ordering and restaurant management. It offers features like
              menu browsing, user authentication, and seamless cart management
              for customers. For administrators, it provides tools to manage
              orders, menus, and user interactions efficiently. FoodBites
              delivers a fast and user-friendly experience, combining responsive
              design with robust backend functionality to enhance the overall
              dining experience.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-lg">
            <Image
              alt="project"
              src={"/Profile.png"}
              className="h-full w-full"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
