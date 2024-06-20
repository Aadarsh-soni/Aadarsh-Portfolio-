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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  habit,
  java,
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
    title: "UI/UX Designer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "SIH Finalist 2023",
    company_name: "Smart India Hackathon",
    icon: starbucks,
    iconBg: "#383E56",
    date: "19 dec 2023 - 21 dec 2023",
    points: [
      "Ps: devlope a AI Based Learning App",
      "TechStack: java,springboot,mysql,",
      "Implemennted and Devloped full App",
      "Have a great Experience and Learn many things",
    ],
  },
  {
    title: "Android & UI/UX Developer",
    company_name: "Bridge Healthcare.pvt.Ltd",
    icon: tesla,
    iconBg: "#383E56",
    date: "May 2024 - current",
    points: [
      "Developing Website and App UI/UX in Figma",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI based Trainging Platform",
    description:
      "Web-based platform that allows users to search, browse,Buy AI courses where AI will guid you to Learn New Technologies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Aadarsh-soni/e-Krishak-Website",
  },
  {
    name: "E-Buspass",
    description:
      "It is an app which will manage buspass of students made this as a college project with java and firebase.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Aadarsh-soni/E-busspass",
  },
  {
    name: "Tech Learner App",
    description:
      "It is an app which will going to train new employ in the it company. it is a project which was made during SIH 2023 by our team",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Aadarsh-soni/Ai-based-IT-Training-System",
  },
  {
    name: "Habit Tracker App",
    description:
      "It is an app which stores habits of user and track that and store that in database. it is a project that I have made during practicing React Native",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
    ],
    image: habit,
    source_code_link: "https://github.com/Aadarsh-soni/Habit_tracker",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
