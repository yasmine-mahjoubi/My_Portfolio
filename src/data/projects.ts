import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "PFE Project",
    href: "/projects",
    tags: ["Laravel", "React", "Tailwindcss", "Json", "MySQL"],
    image: {
      LIGHT: "/images/projects/tt.png",
      DARK: "/images/projects/tt.png",
    },
  },
  {
    index: 1,
    title: "DataInsight360",
    href: "/projects",
    tags: ["Angular", "Firebase"],
    image: {
      LIGHT: "/images/projects/datainsights.png",
      DARK: "/images/projects/datainsights.png",
    },
  },
  {
    index: 2,
    title: "Glamour Chic",
    href: "/projects",
    tags: ["MongoDb", "Express", "React", "Node.js"],
    image: {
      LIGHT: "/images/projects/glamour-chic.png",
      DARK: "/images/projects/glamour-chic.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "GraphMaster",
    favicon: "/images/projects/logos/graph.png",
    imageUrl: ["/images/projects/graph.png"],
    description:
      "An interactive MERN stack platform for exploring and experimenting with graph algorithms, featuring dynamic visualization of graph structures and algorithm execution.\n",
    sourceCodeHref: "https://github.com/ranim125/projet_graphes.git",
    liveWebsiteHref: "#",
  },
  {
    name: "Education Analytics",
    favicon: "/images/projects/logos/bigdata.png",
    imageUrl: ["/images/projects/bigdata.png"],
    description:
      "A scalable Big Data solution using Python, Apache Spark, and MLlib to process and analyze large datasets, with Power BI dashboards for clear and interactive data visualization.\n",
    liveWebsiteHref: "#",
  },
  {
    name: "DataInsight360",
    favicon: "/images/projects/logos/analysis.png",
    imageUrl: ["/images/projects/datainsights.png"],
    description:
      "A modern Angular application built for data science students, offering a Data Insights platform to import, manage, analyze, and visualize datasets through a clean and modular interface.\n",
    sourceCodeHref:
      "https://github.com/yasmine-mahjoubi/Projet_DataInsight360.git",
    liveWebsiteHref: "#",
  },
  {
    name: "PFE Project / Tunisie Telecom",
    favicon: "/images/projects/logos/tt.ico",
    imageUrl: ["/images/projects/tt.png"],
    description:
      "This project was carried out at the company Tunisie Telecom as part of a\n" +
      " f\n" +
      " inal-year internship where i propose a digital invoice management platform \n" +
      " This application enables efficient handling of invoices between suppliers and\n" +
      " internal departments, allowing tracking of each invoice’s status throughout its\n" +
      " lifecycle.",
    liveWebsiteHref: "#",
  },
  {
    name: "Glamour Chic",
    favicon: "/images/projects/logos/weCare.ico",
    imageUrl: ["/images/projects/glamour-chic.png"],
    description:
      "This is a beauty management project developed with the MERN Stack, where users can book services at beauty centers, view nearby centers based on location, and explore available offers.",
    sourceCodeHref: "https://github.com/yasmine-mahjoubi/Glamour-Chic",
    liveWebsiteHref: "#",
  },
  {
    name: "RideWave",
    favicon: "/images/projects/logos/carpool.png",
    imageUrl: ["/images/projects/ride-wave.jpg"],
    description:
      "This project is a Carpooling Management System developed with new technologies, designed to facilitate ride sharing between users. It allows the creation, management, and booking of rides while offering features for rating drivers and passengers.",
    sourceCodeHref:
      "https://github.com/yasmine-mahjoubi/SpringBoot_Projet-Carpooling.git",
    liveWebsiteHref: "#",
  },
  {
    name: "MaCompta",
    favicon: "/images/projects/logos/ma-compta.png",
    imageUrl: ["/images/projects/ma-compta.png"],
    description:
      "This project involves the creation of an interactive and responsive user interface for MaCompta, an accounting management solution. Developed with Angular during my summer internship, the project aims to provide a smooth and intuitive user experience for accounting professionals.",
    sourceCodeHref: "https://github.com/yasmine-mahjoubi/Projet-Angular_Stage",
    liveWebsiteHref: "https://macompta.com.tn/",
  },
  {
    name: "Simulateur",
    favicon: "/images/projects/logos/analysis.png",
    imageUrl: ["/images/projects/simulateur.png"],
    description:
      "A Python project that simulates random variables and common probability distributions, providing interactive visualization to support statistical understanding and experimentation.\n",
    liveWebsiteHref: "#",
  },
  {
    name: "Santé24",
    favicon: "/images/projects/logos/hopital.png",
    imageUrl: ["/images/projects/hopital.png"],
    description:
      "This project is a simple hospital management system with react js and spring boot.",
    sourceCodeHref: "https://github.com/yasmine-mahjoubi/MyHopital",
    liveWebsiteHref: "#",
  },
  {
    name: "Puzzle Game",
    favicon: "/images/projects/logos/leoni.ico",
    imageUrl: ["/images/projects/puzzle3.png"],
    description:
      "This project is a version of the 8-puzzle game, developed in Python and using artificial intelligence to solve the puzzle. The game employs A* and hill climbing algorithms to find optimized solutions.",
    sourceCodeHref: "https://github.com/yasmine-mahjoubi/Jeu-Puzzle-8",
    liveWebsiteHref: "#",
  },
];
