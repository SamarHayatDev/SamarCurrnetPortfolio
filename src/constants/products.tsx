import gogencyImage1 from "public/images/Gogency.png";
import gogencyThumbnail from "public/images/Gogency.png";
import gogencyImage2 from "public/images/Gogency.png";
import Xecutors from "public/images/Xecutors/thumbnail.png";
import Xecutorstwo from "public/images/Xecutors/thumbnailtwo.png";

export const products = [
  {
    href: "https://www.xecutors.com",
    title: "Xecutors",
    description:
      "A software house offering cutting-edge design and development services, tailored solutions, and a seamless client experience. From web and mobile applications to emerging technologies like AI and AR, Xecutors redefines excellence.",
    thumbnail: Xecutors,
    images: [Xecutors, Xecutorstwo],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "xecutors",
    content: (
      <div>
        <p>
          Xecutors is a full-scale software house specializing in exceptional
          design and development services. With a strong focus on quality, the
          team delivers tailored solutions for clients, ranging from custom
          software to advanced web and mobile applications.
        </p>
        <p>
          Key features include transparent pricing models, an in-house expert
          team, and services in emerging technologies such as Artificial
          Intelligence (AI), Internet of Things (IoT), and Augmented Reality
          (AR). Xecutors also emphasizes streamlined processes and
          confidentiality assurance to help businesses thrive.
        </p>
        <p>
          I had the opportunity to contribute to some parts of this website,
          adding my expertise to enhance its functionality and design. While not
          fully created by me, my work played a significant role in refining
          certain aspects.
        </p>
        <p>
          Whether you're a startup or scaling enterprise, Xecutors ensures that
          your digital vision is executed flawlessly, providing unmatched
          support and innovative solutions.
        </p>
      </div>
    ),
  },
  {
    href: "https://gogency.com",
    title: "Gogency",
    description:
      "An automated traveling portal where agencies can automate tasks like ticket invoice generation, email messaging, HR system management, and social media integration. Create modern websites with a single click.",
    thumbnail: gogencyThumbnail,
    images: [gogencyImage1, gogencyImage2],
    stack: ["Nextjs", "Tailwindcss", "MUI"],
    slug: "gogency",
    content: (
      <div>
        <p>
          Gogency is an innovative platform designed for travel agencies to
          automate their day-to-day operations. It offers features such as
          automatic ticket invoice generation, email auto-messaging, and a fully
          automated HR system.
        </p>
        <p>
          Additionally, Gogency provides the ability to create modern,
          fully-functional websites in just one click. It also integrates social
          media management tools directly from the platform, allowing users to
          manage social media posts and updates seamlessly.
        </p>
        <p>
          The platform streamlines multiple processes for travel agencies,
          making it easier to manage tasks and improve overall efficiency. With
          Gogency, agencies can focus more on their business while the platform
          handles the operational workload.
        </p>
      </div>
    ),
  },
];
