// import Image from "next/image";
// import React from "react";
// import { Heading } from "./Heading";
// import { twMerge } from "tailwind-merge";

// export const TechStack = () => {
//   const stack = [
//     {
//       title: "Next.js",
//       src: "/images/logos/next.png",

//       className: "h-10 w-14",
//     },
//     {
//       title: "AWS",
//       src: "/images/logos/aws.webp",

//       className: "h-10 w-10",
//     },
//     {
//       title: "Figma",
//       src: "/images/logos/figma.png",

//       className: "h-10 w-8",
//     },
//     {
//       title: "Framer Motion",
//       src: "/images/logos/framer.webp",

//       className: "h-10 w-10",
//     },
//     {
//       title: "Node",
//       src: "/images/logos/node.png",

//       className: "h-10 w-12",
//     },
//     {
//       title: "Tailwind",
//       src: "/images/logos/tailwind.png",

//       className: "h-10 w-24",
//     },
//     {
//       title: "Vercel",
//       src: "/images/logos/vercel.png",

//       className: "h-10 w-24",
//     },
//   ];
//   return (
//     <div>
//       <Heading
//         as="h2"
//         className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
//       >
//         Tech Stack
//       </Heading>
//       <div className="flex flex-wrap">
//         {stack.map((item) => (
//           <Image
//             src={item.src}
//             key={item.src}
//             width={`200`}
//             height={`200`}
//             alt={item.title}
//             className={twMerge("object-contain mr-4 mb-4", item.className)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiNextdotjs } from "react-icons/si"; // Importing specific icons

export const TechStack = () => {
  // Common class for all icons
  const iconClass = "text-2xl";

  const stack = [
    {
      title: "HTML",
      icon: <FaHtml5 className={twMerge(iconClass, "text-orange-500")} />, // HTML icon
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className={twMerge(iconClass, "text-blue-600")} />, // CSS icon
    },
    {
      title: "JavaScript",
      icon: <FaJs className={twMerge(iconClass, "text-yellow-400")} />, // JavaScript icon
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className={twMerge(iconClass, "text-blue-500")} />, // TypeScript icon
    },
    {
      title: "React",
      icon: <FaReact className={twMerge(iconClass, "text-blue-400")} />, // React icon
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className={twMerge(iconClass, "text-pink-500")} />, // GraphQL icon
    },
    {
      title: "Git & GitHub",
      icon: <FaGithub className={twMerge(iconClass, "text-gray-800")} />, // GitHub icon
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className={twMerge(iconClass, "text-black")} />, // Next.js icon
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
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center mr-4 mb-4 text-center"
          >
            {item.icon}
            <p className="mt-2 text-sm font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
