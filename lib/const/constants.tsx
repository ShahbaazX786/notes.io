import {
  FaDev,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { FooterMenuTypes, FooterSocialTypes } from "./types";

import { BsTwitterX } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

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

const Notes = [
  {
    id: 1,
    title: "Project Plan",
    description: "List tech-related tasks to complete this month.",
  },
  {
    id: 2,
    title: "Recipe Ideas",
    description: "Plan the steps for renovating the living room.",
  },
  {
    id: 3,
    title: "House Chores",
    description: "Buy milk, eggs, bread, and fruits for the week.",
  },
  {
    id: 4,
    title: "Home Renovation",
    description: "Schedule vet appointments and list pet care routines.",
  },
  {
    id: 5,
    title: "Study Schedule",
    description: "Detail the travel itinerary for the upcoming trip to Europe.",
  },
  {
    id: 6,
    title: "Workout Routine",
    description: "Write down thoughts and reflections for the day.",
  },
  {
    id: 7,
    title: "Tech To-Dos",
    description:
      "Brainstorm gift ideas for upcoming birthdays and anniversaries.",
  },
  {
    id: 8,
    title: "Event Planning",
    description: "Plan a trip to the mountains or beach for the holidays.",
  },
  {
    id: 9,
    title: "Pet Care",
    description: "Organize the tasks and vendors for the upcoming event.",
  },
  {
    id: 10,
    title: "Holiday Ideas",
    description: "List the movies to watch this month.",
  },
  {
    id: 11,
    title: "Budget Plan",
    description: "Note down tips for growing vegetables and flowers.",
  },
  {
    id: 12,
    title: "Meeting Notes",
    description: "Organize and schedule household chores for the family.",
  },
  {
    id: 13,
    title: "Travel Itinerary",
    description: "Discuss project milestones and assign tasks for next week.",
  },
  {
    id: 14,
    title: "Business Strategy",
    description:
      "Create a weekly workout schedule focusing on cardio and strength.",
  },
  {
    id: 15,
    title: "Daily Journal",
    description: "Set up a study schedule to prepare for the exams.",
  },
  {
    id: 16,
    title: "Book Summary",
    description: "Outline the phases and deliverables for the new project.",
  },
  {
    id: 17,
    title: "Gift Ideas",
    description: "Summarize the key points from the latest book read.",
  },
  {
    id: 18,
    title: "Gardening Tips",
    description: "Experiment with new dinner recipes this weekend.",
  },
  {
    id: 19,
    title: "Grocery List",
    description:
      "Develop strategies for the business growth over the next quarter.",
  },
  {
    id: 20,
    title: "Movie Watchlist",
    description: "Draft a budget plan to save money for the new car.",
  },
];

const Testimonials = [
  {
    name: "Sleem Shadie",
    avatar: "SL",
    title: "Music Director",
    src: "https://i.pravatar.cc/150?img=33",
    description:
      "Though AI has advanced leaps and bounds recently with tools like these. But it still can't replace Real Artists.",
  },
  {
    name: "Nolan ",
    avatar: "NC",
    title: "Backend Engineer",
    src: "https://i.pravatar.cc/150?img=12",
    description:
      "As a Backend Engineer myself, I am amazed by the code generation tool.",
  },
  {
    name: "Angela Woods",
    avatar: "AW",
    title: "UI/UX Designer",
    src: "https://i.pravatar.cc/150?img=5",
    description:
      "This has been a goto for me to get inspiration and new Ideas.",
  },
  {
    name: "Chad",
    avatar: "RT",
    title: "Full Stack Developer",
    src: "https://i.pravatar.cc/150?img=54",
    description: "Best use of AI all in one place 10/10. would recommend!.",
  },
];

// Globe constants.
const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const globeColors = ["#06b6d4", "#3b82f6", "#6366f1"];
const globeSampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: globeColors[Math.floor(Math.random() * (globeColors.length - 1))],
  },
];

export const linksu = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <MdDashboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <FaUser className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IoSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IoIosLogOut className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];

export const searcBarPlaceholders = [
  "You already know how search works",
  "Search for completed notes",
  "Search for pending notes",
  "search for any date",
  "search for important tags",
];

export default FooterMenu;

export {
  FooterSocials,
  globeColors,
  globeConfig,
  globeSampleArcs,
  Notes,
  Testimonials,
};
