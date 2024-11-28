// components/NotAProBut.jsx

import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

import { TbSeo, TbBrandPhp } from "react-icons/tb";
import { SiFigma, SiWordpress, SiGutenberg, SiElementor } from "react-icons/si";

export const NotAProBut = () => {
  const iconClass = "text-2xl group-hover:text-3xl transition-all duration-300";

  const tools = [
    {
      title: "Figma",
      icon: <SiFigma className={twMerge(iconClass, "text-yellow-500")} />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "WordPress",
      icon: <SiWordpress className={twMerge(iconClass, "text-blue-600")} />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Elementor",
      icon: <SiElementor className={twMerge(iconClass, "text-pink-700")} />,
      bgColor: "bg-pink-100",
    },
    {
      title: "Gutenberg",
      icon: <SiGutenberg className={twMerge(iconClass, "text-gray-700")} />,
      bgColor: "bg-gray-100",
    },
    {
      title: "SEO",
      icon: <TbSeo className={twMerge(iconClass, "text-green-500")} />,
      bgColor: "bg-green-100",
    },
    {
      title: "PHP",
      icon: <TbBrandPhp className={twMerge(iconClass, "text-blue-600")} />,
      bgColor: "bg-blue-100",
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
      <div className="flex flex-wrap justify-between md:justify-start">
        {tools.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center mr-4 mb-4 text-center"
          >
            <div
              className={twMerge(
                "p-3 flex items-center justify-center rounded-md w-[80px] h-[80px] group",
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
