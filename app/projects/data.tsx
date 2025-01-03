interface ProjectData {
  title: string;
  description: string;
  link: string;
  image: string;
  role: string;
  languageUsed: string;
}

export const data: ProjectData[] = [
  {
    title: "Weather Master",
    description: `The Weather Master project is a comprehensive application designed
            to provide real-time weather updates, forecasts, and environmental
            insights. It utilizes APIs like OpenWeatherMap to fetch accurate
            data and presents it through an intuitive and visually appealing
            interface. The project includes features such as location-based
            weather tracking, multi-day forecasts, and weather condition alerts.`,
    link: "https://classy-crisp-440ebb.netlify.app/",
    image: "/Weather.png",
    role: "Website showing Weather",
    languageUsed: "React, Node.js, and Tailwind CSS",
  },
  {
    title: "FoodBites",
    description: `FoodBites is a dynamic MERN stack application designed to simplify
            food ordering and restaurant management. It offers features like
            menu browsing, user authentication, and seamless cart management for
            customers. For administrators, it provides tools to manage orders,
            menus, and user interactions efficiently. FoodBites delivers a fast
            and user-friendly experience, combining responsive design with
            robust backend functionality to enhance the overall dining
            experience.`,
    link: "https://foodbites42.netlify.app/",
    image: "/foodbites.png",
    role: "A food ordering website",
    languageUsed: "MERN Stack",
  },
];
