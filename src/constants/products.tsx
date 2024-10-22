import gogencyImage1 from "public/images/sidefolio-aceternity-2.png";
import gogencyThumbnail from "public/images/sidefolio-aceternity-2.png";
import gogencyImage2 from "public/images/sidefolio-aceternity-2.png";

export const products = [
  {
    href: "https://gogency.com",
    title: "Gogency",
    description:
      "An automated traveling portal where agencies can automate tasks like ticket invoice generation, email messaging, HR system management, and social media integration. Create modern websites with a single click.",
    thumbnail: gogencyThumbnail,
    images: [gogencyImage1, gogencyImage2],
    stack: ["Nextjs", "Tailwindcss", "Node.js"],
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
