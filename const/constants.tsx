import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FooterMenuTypes, FooterSocialTypes } from "./types";

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


export const Notes = [
  {
    "id": 1,
    "title": "Project Plan",
    "description": "List tech-related tasks to complete this month."
  },
  {
    "id": 2,
    "title": "Recipe Ideas",
    "description": "Plan the steps for renovating the living room."
  },
  {
    "id": 3,
    "title": "House Chores",
    "description": "Buy milk, eggs, bread, and fruits for the week."
  },
  {
    "id": 4,
    "title": "Home Renovation",
    "description": "Schedule vet appointments and list pet care routines."
  },
  {
    "id": 5,
    "title": "Study Schedule",
    "description": "Detail the travel itinerary for the upcoming trip to Europe."
  },
  {
    "id": 6,
    "title": "Workout Routine",
    "description": "Write down thoughts and reflections for the day."
  },
  {
    "id": 7,
    "title": "Tech To-Dos",
    "description": "Brainstorm gift ideas for upcoming birthdays and anniversaries."
  },
  {
    "id": 8,
    "title": "Event Planning",
    "description": "Plan a trip to the mountains or beach for the holidays."
  },
  {
    "id": 9,
    "title": "Pet Care",
    "description": "Organize the tasks and vendors for the upcoming event."
  },
  {
    "id": 10,
    "title": "Holiday Ideas",
    "description": "List the movies to watch this month."
  },
  {
    "id": 11,
    "title": "Budget Plan",
    "description": "Note down tips for growing vegetables and flowers."
  },
  {
    "id": 12,
    "title": "Meeting Notes",
    "description": "Organize and schedule household chores for the family."
  },
  {
    "id": 13,
    "title": "Travel Itinerary",
    "description": "Discuss project milestones and assign tasks for next week."
  },
  {
    "id": 14,
    "title": "Business Strategy",
    "description": "Create a weekly workout schedule focusing on cardio and strength."
  },
  {
    "id": 15,
    "title": "Daily Journal",
    "description": "Set up a study schedule to prepare for the exams."
  },
  {
    "id": 16,
    "title": "Book Summary",
    "description": "Outline the phases and deliverables for the new project."
  },
  {
    "id": 17,
    "title": "Gift Ideas",
    "description": "Summarize the key points from the latest book read."
  },
  {
    "id": 18,
    "title": "Gardening Tips",
    "description": "Experiment with new dinner recipes this weekend."
  },
  {
    "id": 19,
    "title": "Grocery List",
    "description": "Develop strategies for the business growth over the next quarter."
  },
  {
    "id": 20,
    "title": "Movie Watchlist",
    "description": "Draft a budget plan to save money for the new car."
  }
];