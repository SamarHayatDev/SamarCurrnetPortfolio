// components/TechStack.jsx

import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandGit } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

export const TechStack = () => {
  const iconClass = "text-2xl group-hover:text-3xl transition-all duration-300";

  const stack = [
    {
      title: "HTML",
      icon: <FaHtml5 className={twMerge(iconClass, "text-orange-500")} />,
      bgColor: "bg-orange-100",
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className={twMerge(iconClass, "text-blue-600")} />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss className={twMerge(iconClass, "text-sky-500")} />,
      bgColor: "bg-sky-100",
    },
    {
      title: "JavaScript",
      icon: <FaJs className={twMerge(iconClass, "text-yellow-400")} />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className={twMerge(iconClass, "text-blue-500")} />,
      bgColor: "bg-blue-100",
    },
    {
      title: "React",
      icon: <FaReact className={twMerge(iconClass, "text-blue-400")} />,
      bgColor: "bg-blue-100",
    },
    {
      title: "MUI",
      icon: <SiMui className={twMerge(iconClass, "text-sky-400")} />,
      bgColor: "bg-sky-100",
    },
    {
      title: "Shadcn",
      icon: <SiShadcnui className={twMerge(iconClass, "text-black")} />,
      bgColor: "bg-gray-100",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className={twMerge(iconClass, "text-pink-500")} />,
      bgColor: "bg-pink-100",
    },
    {
      title: "Git",
      icon: <TbBrandGit className={twMerge(iconClass, "text-orange-500")} />,
      bgColor: "bg-orange-100",
    },
    {
      title: "GitHub",
      icon: <FaGithub className={twMerge(iconClass, "text-gray-800")} />,
      bgColor: "bg-gray-200",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className={twMerge(iconClass, "text-black")} />,
      bgColor: "bg-gray-100",
    },
    {
      title: "Postman",
      icon: <SiPostman className={twMerge(iconClass, "text-orange-600")} />,
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div
        // className="flex flex-wrap justify-between md:justify-start"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4"
      >
        {stack.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center text-center"
          >
            <div
              className={twMerge(
                "p-3 flex items-center justify-center rounded-md w-[60px] h-[60px] md:w-[80px] md:h-[80px] group",
                item.bgColor
              )}
            >
              <div>{item.icon}</div>
            </div>
            <p className="mt-2 text-sm font-semibold w-full text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
