import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { NotAProBut } from "@/components/NotAProBut";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";
import { IconMail } from "@tabler/icons-react";

export default function Home() {
  return (
    <Container>
      {/* <span className="text-4xl">👋</span> */}
      <Heading className="font-black">
        Hello there! I&apos;m Samar Hayat
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Frontend</Highlight> developer with over{" "}
        <Highlight>1 year</Highlight> of experience crafting smooth, responsive
        interfaces.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Skilled in <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>,
        and <Highlight>JavaScript</Highlight>, I build fast and scalable{" "}
        <Highlight>apps</Highlight> that prioritize user experience.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I love turning <Highlight>ideas</Highlight> into intuitive solutions. My
        work has boosted user engagement by <Highlight>30%</Highlight> and I’ve
        contributed to <Highlight>open-source</Highlight> projects benefiting
        developers worldwide.
      </Paragraph>
      {/* group-hover/button:bg-gray-50/15 group-hover/button:scale-105 hover:scale-105*/}
      <Link
        href={"mailto:samarhayat.dev@gmail.com"}
        // target="__blank"
        className="inline-flex mt-4 items-center gap-1 group/button rounded-full  focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm  focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 origin-left
        group-hover/button:bg-gray-50/15 group-hover/button:scale-105 hover:scale-105
        
        "
      >
        <IconMail />
        Hire Me
      </Link>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
      <NotAProBut />
    </Container>
  );
}
