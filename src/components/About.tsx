"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import { Highlight } from "./Highlight";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Samar Hayat, a passionate{" "}
          <Highlight>Frontend Developer</Highlight> with over{" "}
          <Highlight>1+ year of experience</Highlight> creating intuitive user
          interfaces.
        </Paragraph>
        <Paragraph className=" mt-4">
          My expertise lies in building{" "}
          <Highlight>responsive, high-performance web applications</Highlight>{" "}
          using <Highlight>React.js, Next.js, and TypeScript</Highlight>. I
          thrive on delivering seamless user experiences through clean and
          efficient code.
        </Paragraph>

        <Paragraph className=" mt-4">
          During my journey, I&apos;ve had the opportunity to lead the frontend
          development of a major e-commerce site, boosting user engagement by{" "}
          <Highlight>30%</Highlight>, and contributed to a popular JavaScript
          library that impacts developers globally.
        </Paragraph>

        <Paragraph className=" mt-4">
          I am constantly exploring new technologies and trends to improve my
          skill set. I love contributing to open-source projects and writing
          tech blogs to share my knowledge with the community.
        </Paragraph>

        <Paragraph className=" mt-4">
          Outside of coding, I enjoy hiking and staying up-to-date with the
          latest developments in UI/UX design, ensuring that the projects I work
          on not only perform well but also look great.
        </Paragraph>

        <Paragraph className=" mt-4">
          Thank you for stopping by, and I look forward to connecting with
          fellow developers and professionals.
        </Paragraph>
      </div>
    </div>
  );
}
