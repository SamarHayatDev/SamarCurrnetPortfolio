import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Samar Hayat
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate <Highlight>Frontend Developer</Highlight> with
        over <Highlight>1+ year of experience</Highlight> creating intuitive
        user interfaces.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I specialize in <Highlight>React.js, Next.js, and JavaScript</Highlight>
        , focusing on building{" "}
        <Highlight>high-performance web applications</Highlight> and enhancing
        user experiences.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I thrive on <Highlight>translating complex requirements</Highlight> into
        smooth, user-friendly solutions. I&apos;ve worked on projects that
        increased user engagement by <Highlight>30%</Highlight> and contributed
        to open-source projects that impact developers globally.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}