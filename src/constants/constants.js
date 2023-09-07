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

    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
 
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#tech",
      title: "Tech",
    },
    {
      id: "#projects",
      title: "Projects",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Coder",
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
    
  ]
  
 
  
  
  
  const projects = [
    {
      name: "MindCanvas",
      website_url:"https://mindcanvas-nzy8.onrender.com/",
      description:
        "A blogging website that lets the users see the blogs related to various categories\nUsers can see posts related to Movies,Music,Technology,\nWeb-Series etc.",
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
      image: carrent,
      source_code_link: "https://github.com/ADI-ROXX/MindCanvas",
      notdisabled:false,
    },
    {
      name: "WorldWatcher",
      notdisabled:true,
      website_url: "",
      description:
      "Web application that enables users to see the latest news in the world. Users can also search for news according to the keywords that they like.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ADI-ROXX/WorldWatcher",
    },
    {
      name: "Messier Scraper",
      notdisabled:true,
      website_url:"https://www.youtube.com/",

      description:
        "This is a web scraping code that searches the internet for the coordinates of all the Messiers and orders the Messiers according to the best time of the year we can see them in.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies,   projects };