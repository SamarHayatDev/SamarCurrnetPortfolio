// import { Paragraph } from "@/components/Paragraph";
// import { Highlight } from "./Highlight";
// import ImageGrid from "./ImageGrid";

// export default function About() {
//   const images = [
//     "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   ];

//   return (
//     <div>
//       {/* Using ImageGrid Component */}
//       <ImageGrid images={images} />

//       <div className="max-w-4xl">
//         <Paragraph className=" mt-4">
//           Hey there, I&apos;m Samar Hayat, a passionate{" "}
//           <Highlight>Frontend Developer</Highlight> with over{" "}
//           <Highlight>1+ year of experience</Highlight> creating intuitive user
//           interfaces.
//         </Paragraph>
//         {/* Other paragraphs */}
//       </div>
//     </div>
//   );
// }

import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "./Highlight";
import ImageGrid from "./ImageGrid";
import MeOne from "public/images/me/MeOne.png";
import MeTwo from "public/images/me/MeTwo.png";
import MeThree from "public/images/me/MeThree.png";

export default function About() {
  const images = [MeOne.src, MeTwo.src, MeThree.src];

  return (
    <div>
      {/* Using ImageGrid Component */}
      <ImageGrid images={images} />

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hi, I&apos;m Samar Hayat — a <Highlight>Frontend Developer</Highlight>{" "}
          with a knack for creating seamless, dynamic web experiences. With{" "}
          <Highlight>over a year of hands-on experience</Highlight>, I&apos;ve
          been transforming ideas into digital solutions that captivate and
          engage.
        </Paragraph>
        <Paragraph className="mt-4">
          My expertise lies in{" "}
          <Highlight>React, Next.js, and JavaScript</Highlight>, and I&apos;m
          all about building{" "}
          <Highlight>responsive, user-focused applications</Highlight>. I take
          pride in writing clean, efficient code that not only meets business
          goals but also makes users feel right at home.
        </Paragraph>
        <Paragraph className="mt-4">
          In my role at <Highlight>Xecutors</Highlight>, I&apos;ve had the
          pleasure of leading projects that prioritize high performance and
          usability. One of my proudest moments was boosting user engagement by{" "}
          <Highlight>30%</Highlight> for a major e-commerce platform by
          implementing smart, user-centered solutions.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond work, I&apos;m a strong advocate for open-source contributions
          and love to share my knowledge through tech blogs. I&apos;m passionate
          about continuous growth — whether it&apos;s mastering the latest{" "}
          <Highlight>UI/UX trends</Highlight> or hiking to recharge and find
          inspiration in nature.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m always open to new challenges, collaborations, or even a chat
          about the latest in web development. Let&apos;s connect — reach out
          via <Highlight>Email</Highlight> or <Highlight>LinkedIn</Highlight>,
          and let&apos;s create something amazing together!
        </Paragraph>
      </div>
    </div>
  );
}
