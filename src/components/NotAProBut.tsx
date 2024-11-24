import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { TbSeo } from "react-icons/tb";
import { SiFigma, SiWordpress, SiGutenberg, SiElementor } from "react-icons/si"; // Importing specific icons

export const NotAProBut = () => {
  const iconClass = "text-2xl";

  const tools = [
    {
      title: "Figma",
      icon: <SiFigma className={twMerge(iconClass, "text-yellow-500")} />, // Figma color
    },
    {
      title: "WordPress",
      icon: <SiWordpress className={twMerge(iconClass, "text-blue-600")} />, // WordPress color
    },
    {
      title: "Elementor",
      icon: <SiElementor className={twMerge(iconClass, "text-pink-700")} />, // Elementor color
    },
    {
      title: "Gutenberg",
      icon: <SiGutenberg className={twMerge(iconClass, "text-gray-700")} />, // Gutenberg color
    },
    {
      title: "SEO",
      icon: <TbSeo className={twMerge(iconClass, "text-green-500")} />, // SEO color
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        I&apos;m Not a Pro, But I Can Work With...
      </Heading>
      <div className="flex flex-wrap">
        {tools.map((item) => (
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
