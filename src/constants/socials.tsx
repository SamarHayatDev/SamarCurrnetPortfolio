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
    href: "https://linkedin.com/in/samarhayatdev",
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
    href: "https://wa.me/923495129992?text=Hi%20there!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20more.%20Looking%20forward%20to%20connecting!",
    label: "WhatsApp",
    icon: TbBrandWhatsapp,
  },
  {
    href: "",
    label: "@samarhayat.dev",
    icon: TbBrandDiscord,
  },
];
