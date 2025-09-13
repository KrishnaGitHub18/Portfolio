"use client";

import React from "react";
import Image from "next/image";
import foodway from "../../../public/Images/foodway.png";
import quizapp from "../../../public/Images/Group 2.png";
import codeQuest from "../../../public/Images/CodeQuest.png";
import mojito from "../../../public/Images/mojito.png";
import estatein from "../../../public/Images/estatein.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface PageSectionProps {
  ProjectsRef: React.RefObject<HTMLDivElement>;
}

const projectData = [
  {
    title: "CodeQuest",
    desc: "Collaborative coding app with real-time editor and WebRTC voice chat.",
    img: codeQuest,
    github: "https://github.com/KrishnaGitHub18/codequest",
    live: "https://codequest-rose.vercel.app/",
  },
  {
    title: "FoodWay",
    desc: "A modern online food ordering platform with a sleek UI.",
    img: foodway,
    github: "https://github.com/KrishnaGitHub18/Food-Site---Frontend",
    live: "https://food-way.vercel.app/",
  },
  {
    title: "Mojito Restro",
    desc: "Animated restaurant landing page powered by GSAP animations.",
    img: mojito,
    github: "https://github.com/KrishnaGitHub18/Mojito---Animated-Landing-Page",
    live: "https://mojito-gsap-page.vercel.app/",
  },
  {
    title: "EStatein",
    desc: "A responsive real estate website for browsing and listing properties.",
    img: estatein,
    github: "https://github.com/KrishnaGitHub18/Estatein",
    live: "https://estatein-six.vercel.app/",
  },
  {
    title: "Quiz App",
    desc: "Flashcard-based learning app with quizzes to test knowledge.",
    img: quizapp,
    github: "https://github.com/KrishnaGitHub18/FlashCards-frontend-",
    live: "https://flash-cards-frontend-taupe.vercel.app/",
  },
];

const Projects: React.FC<PageSectionProps> = ({ ProjectsRef }) => {
  return (
    <div
      className="flex flex-col justify-center items-center pt-[100px] w-full px-6 mb-[100px] sm:mb-0"
      ref={ProjectsRef}
    >
      <div className="text-4xl font-semibold mb-12 text-center">
        My Projects
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projectData.map((proj, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden shadow-lg bg-[#181818] hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.title}
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-t-2xl opacity-50 hover:opacity-300 transition-opacity duration-300"
              />

              <div className="absolute inset-0 flex justify-center items-center gap-4 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500">
                <Link
                  href={proj.github}
                  target="_blank"
                  className="h-12 w-12 border-2 rounded-full flex justify-center items-center border-gray-400 hover:border-white"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-300 text-2xl group-hover:text-white"
                  />
                </Link>
                <Link
                  href={proj.live}
                  target="_blank"
                  className="h-12 w-12 border-2 rounded-full flex justify-center items-center border-gray-400 hover:border-white"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-gray-300 text-2xl group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
            <div className="p-4 text-center">
              <h5 className="text-lg sm:text-xl font-semibold">{proj.title}</h5>
              <p className="text-gray-400 text-sm mt-2">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
