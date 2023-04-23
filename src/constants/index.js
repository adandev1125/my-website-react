import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  portfolio1,
  portfolio2,
  portfolio3,
  reactjs,
  redux,
  shadoworks,
  tailwind,
  threejs,
  typescript,
  web,
  wepie
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
    title: "Web Game Creator",
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
    title: "Full Stack Engineer - React Native (Remote)",
    company_name: "Shadoworks",
    icon: shadoworks,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Jan 2023",
    points: [
      "Developed and managed a large - scale mobile app using React Native.",
      "Developed an extensive admin panel using Next.js.",
      "Developed and implemented a new technique that leveraged React hooks and memos.",
      "Designed and developed multiple Android native modules and React Native components.",
      "Designed and implemented a state-of-the-art Node.js backend for instant messaging."
    ],
  },
  {
    title: "Full Stack Engineer - Web Games (Remote)",
    company_name: "Shadoworks",
    icon: shadoworks,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Jan 2021",
    points: [
      "Utilized Phaser 3 and Pixi.js to design and develop 6 engaging web - based multiplayer games for an online gaming company.",
      "Established a real - time multiplayer game backend utilizing Node.js and Socket.IO.",
      "Created a custom, user - friendly game lobby and leaderboard utilizing Bootstrap and Angular, and updated it with React.",
      "Conducted targeted training for 5+ web developers, imparting expertise in Phaser 3 and Pixi.js"
    ],
  },
  {
    title: "Front End Developer - React (Remote)",
    company_name: "Wepie Startup",
    icon: wepie,
    iconBg: "#383E56",
    date: "Feb 2017 - Aug 2019",
    points: [
      "Developed and maintained a company's web application using React, Redux, and other front-end technologies.",
      "Transformed design mockups into responsive user interfaces.",
      "Improved code quality and maintainability by implementing unit testing using Jest and Enzyme.",
      "Provided comprehensive tests for all React components and implemented continuous integration and deployment."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    link: "https://www.hse.ru/en",
  },
  {
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: portfolio2,
    link: "https://lebronjamesinnovationcenter.nike.com",
  },
  {
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3,
    link: "https://imaginaryones.com",
  },
];

const myEmail = 'adanyonai@outlook.com'

export { services, technologies, experiences, testimonials, projects, myEmail };
