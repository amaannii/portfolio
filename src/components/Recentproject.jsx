import { useState } from "react";
import img1 from "../assets/images/portfolia.PNG";
import img2 from "../assets/images/prodcrud.PNG";
import img3 from "../assets/images/prisma.PNG";
import img4 from "../assets/images/todo.PNG";
import img5 from "../assets/images/crud.PNG";
import img6 from "../assets/images/calculator.PNG";
import img7 from "../assets/images/cocs.PNG";
import img8 from "../assets/images/ui-des.PNG";
import img9 from "../assets/images/facebook.jpeg";
import img10 from "../assets/images/travels.PNG";


export default function RecentProjects() {
  const [shownCount, setShownCount] = useState(2);

  const projects = [
    {
      img: img1,
      title: "PORTFOLIO",
      category: "WEB DEVELOPMENT",
      desc: "Introducing a professionally developed Portfolio website designed to showcase my skills and projects. Featuring a sleek, modern aesthetic design with intuitive navigation.",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      img: img2,
      title: "PRODUCT MANAGEMENT",
      category: "WEB DEVELOPMENT",
      desc: "A Product Management CRUD app that lets users easily add, view, update, and delete products through a clean interface.",
      link: "https://github.com/amaannii/prisma_clone.git",
    },
    {
      img: img3,
      title: "PRODUCT CRUD",
      category: "WEB DEVELOPMENT",
      desc: "Developed a Product CRUD application with a custom-designed UI, using React, Node.js, Express, and MongoDB. Implemented full Create, Read, Update, Delete functionality while ensuring a responsive, user-friendly interface and seamless interaction between frontend and backend",
      link: "https://github.com/amaannii/Product-Crud.git",
    },
    {
      img: img4,
      title: "TODO",
      category: "WEB DEVELOPMENT",
      desc: "Built a React To-Do App with task management features, responsive UI, and efficient state handling for seamless functionality",
      link: "https://github.com/amaannii/todo.git",
    },
    {
      img: img5,
      title: "CRUD APPLICATION",
      category: "WEB DEVELOPMENT",
      desc: "Created a full-featured CRUD system with React frontend and Node.js/Express backend, integrating MongoDB for data storage and implementing modular components and efficient state handling",
      link: "https://github.com/amaannii/crud.git",
    },
    {
      img: img6,
      title: "CALCULATOR",
      category: "WEB DEVELOPMENT",
      desc: "Built a React Calculator app with modular components, responsive design, and efficient state handling for basic arithmetic operations",
      link: "https://github.com/amaannii/calculator.git",
    },
    {
      img: img7,
      title: "ACER LAPTOP CLONE",
      category: "WEB DEVELOPMENT",
      desc: "Created a fully functional Acer Laptop clone with custom UI, implementing product catalogs, interactive pages, and responsive design using the MERN stack",
      link: "https://github.com/amaannii/acer.git",
    },
    {
      img: img8,
      title: "TABLE UI",
      category: "WEB DEVELOPMENT",
      desc: "Built a front-end Admin Dashboard UI using HTML and CSS, featuring a responsive layout and organized interface elements",
     
    },
    {
      img: img10,
      title: "TRAVELS",
      category: "WEB DEVELOPMENT",
      desc: "Designed and developed a Travels and Tourism website with React, providing intuitive navigation, dynamic package displays, and a visually appealing interface for travelers",
      link: "https://github.com/amaannii/Travels.git",
    },

    {
      img: img9,
      title: "FACEBOOK CLONE",
      category: "WEB DEVELOPMENT",
      desc: "Created a full-stack Facebook clone using MERN stack, including post creation, user interactions, and real-time data handling with efficient component-based architecture",
      
    },
  ];

  const showMore = () => setShownCount((prev) => prev + 2);
  const showLess = () => setShownCount(2);

  return (
    <div className="w-full bg-[#1E1E1E]  flex flex-col py-30 items-center justify-center h-auto ">
      {/* Section Header */}
      <div className="flex justify-center w-full mb-12 px-4 ">
        <div className="bg-[#D9D9D9] rounded-2xl flex justify-center items-center px-6 py-4 w-full sm:w-[70%] md:w-[55%] max-w-4xl">
          <h3 className="text-[#1E1E1E] font-extrabold text-4xl sm:text-5xl text-center tracking-[-2px]">
            RECENT PROJECTS
          </h3>
        </div>
      </div>

      {/* Dynamic Projects */}
      <div className="flex flex-col gap-8 w-full items-center px-4">
        {projects.slice(0, shownCount).map((p, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row w-full md:w-[70%] bg-[#323030] rounded-2xl overflow-hidden"
          >
            <div className="md:w-2/3 w-full h-64 md:h-auto">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={p.img}
                alt={p.title}
              />
            </div>

            <div className="md:w-1/3 w-full flex flex-col justify-center items-center p-6">
              <h2 className="text-[#E9E3DC] font-extrabold text-2xl text-center  tracking-[-1px]">
                {p.title}
              </h2>
              <h3 className="text-[#7c776b] font-extrabold text-center">
                {p.category}
              </h3>
              <p className="text-[#E9E3DC] mt-4 text-center ">{p.desc}</p>
              <h2 className="text-[#E9E3DC] font-extrabold text-2xl text-center tracking-[-1px]">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                <img className="h-[30px] w-[30px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nO2YXUoDMRSFUx/qzxK1+xAVahUVcQH60u5G6QYGek4UCoU+CiI+WChEQqdlCLVmpnfGKPeDvOaeL3MzyYwxiqIoyl/CObcDoAPgOGJ0nHMtkxI+FEkXO0aj0ZFI4el0ekDyEsALgHlE8RmA620FSPZEwgMYlizsx3s4l28Jv6okb4sDwB2At1oE/MpXCO+fwFXsviA5qO0J+LYpTHiSZVnbCOEW4ftB6FdpgVXPNxC+T/JCuoVWBUSS53sBwEMQfpBL9ZIW2BTeLOqlK/BT+KQFfHiS95vCJyvw3YZ1QfjwsBM5ibcVKBO+eNhZaw9F7kLbCMS2Ta1UFUgifFWBsm2TnEB+Yfv98EIC0eEB3JD8WHcVb7qFWv4tUvZNQnLm6wD4rBy4ibtQo7WoAvFQBdagAiWgCvxHAdT0UR9ird1d1vE1jRTBb5XTOiSyLGuTPCvUsWKTB785GhkAumICk8lkn+RTgwKP4/F4T0xgKQHgHMBz5M/dsis+z+fuiodXFEVRFJMoX5xarTmlIRypAAAAAElFTkSuQmCC" alt="external-link"/>
                </a>
              </h2>
            </div>
          </div>
        ))}

        {/* See More Button */}

        <div className="w-full flex justify-center mt-8 px-4">
          <div className="bg-[#282727] border border-white/10 rounded-lg flex justify-center items-center px-6 py-4 w-full md:w-[70%] max-w-4xl">
            {shownCount < projects.length ? (
              <button
                onClick={showMore}
                className="text-[#E9E3DC] font-extrabold text-xl text-center tracking-[-1px]"
              >
                SEE MORE +
              </button>
            ) : (
              <button
                onClick={showLess}
                className="text-[#E9E3DC] font-extrabold text-xl text-center tracking-[-1px]"
              >
                SHOW LESS -
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
