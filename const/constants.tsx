import { FooterMenuTypes, FooterSocialTypes } from "./types";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

const FooterMenu: FooterMenuTypes = [
  {
    id: 1,
    link: "About",
    path: "/random",
  },
  {
    id: 2,
    link: "Careers",
    path: "/random",
  },
  {
    id: 3,
    link: "History",
    path: "/random",
  },
  {
    id: 4,
    link: "Services",
    path: "/random",
  },
  {
    id: 5,
    link: "Projects",
    path: "/random",
  },
  {
    id: 6,
    link: "Blog",
    path: "/random",
  },
];

const FooterSocials: FooterSocialTypes = [
  {
    id: 1,
    name: "Facebook",
    path: "https://www.facebook.com/",
    icon: <FaFacebook size={24} />,
  },
  {
    id: 2,
    name: "Instagram",
    path: "https://www.instagram.com/",
    icon: <FaInstagram size={24} />,
  },
  {
    id: 3,
    name: "Twitter",
    path: "https://twitter.com/shahbaazx24",
    icon: <BsTwitterX size={24} />,
  },
  {
    id: 4,
    name: "Github",
    path: "https://github.com/ShahbaazX786",
    icon: <FaGithub size={24} />,
  },
  {
    id: 5,
    name: "Dev.to",
    path: "https://dev.to/shahbaazx786",
    icon: <FaDev size={24} />,
  },
];

export default FooterMenu;
export { FooterSocials };
