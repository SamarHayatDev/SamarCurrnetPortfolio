import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";

export const socials = [
  // GitHub link
  {
    href: "https://github.com/samarhayatdev",
    label: "GitHub",
    icon: TbBrandGithub,
  },
  // LinkedIn link
  {
    href: "https://linkedin.com/in/samardev",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
  // Email link
  {
    href: "mailto:samarhayat.dev@gmail.com",
    label: "Email",
    icon: IconMail,
  },
  {
    href: "https://wa.me/923495129992   ",
    label: "WhatsApp",
    icon: TbBrandWhatsapp,
  },
  {
    href: "https://discordapp.com/users/752720923534295160",
    label: "Discord",
    icon: TbBrandDiscord,
  },
];
