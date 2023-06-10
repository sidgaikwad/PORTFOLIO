import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  movies,
  netflix,
  threejs,
  Twitter,
  Pratham,
  Shreya,
  Rishikesh,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit", 
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sidd proved me wrong.",
    name: "Pratham Kumbhar",
    designation: "Founder",
    company: "Mach Tech Pvt Ltd",
    image: Pratham,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sidd does.",
    name: "Shreya Kurry",
    designation: "Co-Founder",
    company: "Mach Tech Pvt Ltd",
    image: Shreya,
  },
  {
    testimonial:
      "After Sidd optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rishikesh Adhe",
    designation: "Founder",
    company: "Adhe Medications",
    image: Rishikesh,
  },
];

const projects = [
  {
    name: "MoviesFlix",
    description:
      "Web-based platform that allows users to search, book, and manage Movies from various providers, such as pvr and imax of various cities, user can check the description and genre of the movie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Movie-API",
        color: "green-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/sidgaikwad/moviesFlix",
  },
  {
    name: "Netflix Clone",
    description:
      "Web application that enables users to watch movies and TV shows, and provides a personalized experience by recommending content based on their viewing history users can create an account, login and logout",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "mongoAtlas",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/sidgaikwad/netflix-clone",
  },
  {
    name: "Twitter Clone",
    description:
      "Twitter clone is a instance of the real twitter app, Here users can create an account, post tweets, like tweets, retweet/reply the tweets, users can customize their profile and also users can follow each other users .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "MongoAtlas",
        color: "pink-text-gradient",
      },
    ],
    image: Twitter,
    source_code_link: "https://github.com/sidgaikwad/Twitter-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
