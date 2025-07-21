import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import PythonSvg from "@/public/icons/python.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import SpringSvg from "@/public/icons/Spring_Boot.svg";
import CSvg from "@/public/icons/C.svg";
import JavaSvg from "@/public/icons/java.svg";
import PHPSvg from "@/public/icons/PHP.svg";
import LaravelSvg from "@/public/icons/Laravel.svg";
import NodeSvg from "@/public/icons/node-js.svg";
import BootstrapSvg from "@/public/icons/Bootstrap.svg";
import FigmaSvg from "@/public/icons/Figma-logo.svg";
import SSISSvg from "@/public/icons/database-sql-svgrepo-com.svg";
import BISvg from "@/public/icons/power-bi-icon.svg";
import ExcelSvg from "@/public/icons/microsoft-excel-icon.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import MysqlSvg from "@/public/icons/mysql.svg";
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AngularSvg from "@/public/icons/angular.svg";
import LinuxSvg from "@/public/icons/linux.svg";
import GitHubSvg from "@/public/icons/github.svg";
import PremierSvg from "@/public/icons/Premiere_Pro.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming languages, Frameworks and Libraries",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "SpringBoot",
        icon: SpringSvg,
      },
      {
        name: "C Programming Language",
        icon: CSvg,
      },
      {
        name: "PHP",
        icon: PHPSvg,
      },
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
      {
        name: "Node js",
        icon: NodeSvg,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
    ],
  },
  {
    sectionName: "Business Intelligence and Data",
    skills: [
      {
        name: "SQL",
        icon: SSISSvg,
      },
      {
        name: "Power BI",
        icon: BISvg,
      },
      {
        name: "Excel",
        icon: ExcelSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GitHubSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Linux",
        icon: LinuxSvg,
      },
    ],
  },
  {
    sectionName: "Design",
    skills: [
      {
        name: "Figma",
        icon: FigmaSvg,
      },
    ],
  },
  {
    sectionName: "Video Editing Tools",
    skills: [
      {
        name: "Adobe Premiere Pro",
        icon: PremierSvg,
      },
    ],
  },
];
