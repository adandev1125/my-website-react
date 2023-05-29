import {
  angular,
  backend,
  codeigniter,
  creator,
  go,
  graphql,
  javascript,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  oracle,
  php,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio8,
  reactjs,
  shadoworks,
  springboot,
  tailwind,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Game Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "go",
    icon: go,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "CodeIgniter",
    icon: codeigniter,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "Shadoworks",
    icon: shadoworks,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Jan 2023",
    points: [
      "Worked with a team of developers to build web and mobile apps using React, Angular, Node.js and Golang.",
      "Managed the front end part of a Ethereum-based dApp using React/Redux + Web3.",
      "Designed and implemented several microservices for an e-commerce platform.",
      "Implemented the pixel-perfect and highly responsive layout of Figma design using React / Angular / TailwindCSS / TypeScript.",
      "Built backends for e-commerce and educational web apps utilizing Nest.js and Golang that need complicated business workflows.",
      "Implemented the pixel-perfect and highly responsive layout using React / TailwindCSS / TypeScript.",
      "Built serverless workflow for web and mobile apps with AWS and S3.",
      "Proactively solved problems in front end and back end business logics.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Wepie Startup",
    icon: wepie,
    iconBg: "#383E56",
    date: "Apr 2018 - Aug 2019",
    points: [
      "Developed an e-commerce and an investment platform using Laravel, React.js, and MySQL.",
      "Implemented security measures such as 2FA and SSL encryption to protect user data.",
      "Worked with cross-functional teams to integrate the platform with external systems such as trading platforms and banking systems.",
      "Consulted regularly with customers on project status and technical details.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company_name: "Wepie Startup",
    icon: wepie,
    iconBg: "#383E56",
    date: "Sep 2017 - Feb 2018",
    points: [
      "Created an e-commerce web site using technologies like React and Nest.js.",
      "Integrated third-party APIs such as payment gateways and shipment tracking systems into the platform.",
      "Conducted performance optimizations to improve page load times and overall user experience."
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Wepie Startup",
    icon: wepie,
    iconBg: "#383E56",
    date: "Oct 2016 - Aug 2017",
    points: [
      "Brought a pixel-perfect and user-friendly front ends with React, MaterialUI and AntD and optimized websites for search engine optimization.",
      "Implemented customer needs with productive code quality and proactive attitude.",
      "Collaborated with team members to analyze, design, build and test the software product.",
      "Provided unit tests, integrated tests and end-to-end tests with Enzyme, Jest and Selenium."
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
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: portfolio2,
    link: "https://lebronjamesinnovationcenter.nike.com",
  },
  {
    tags: [
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3,
    link: "https://imaginaryones.com",
  },
  {
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "mvc-framework",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio4,
    link: "https://github.com/adandev1125/go-mvc",
  },
  {
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio5,
    link: "https://github.com/adandev1125/next-ecommerce2",
  },
  {
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio6,
    link: "https://github.com/adandev1125/tip-calc",
  },
  {
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio8,
    link: "https://github.com/adandev1125/threejs_cars_gallery",
  },
];

const myEmail = 'adanyonai@outlook.com'

export { services, technologies, experiences, testimonials, projects, myEmail };
