"use client";

import { motion } from "motion/react";
import ProjectCard from "./project-card";

interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  thumbnails: Array<string>;
  github_url: string;
  deployment_url: string;
  stage: "Completed" | "Development" | "Beta" | "Archived";
}

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "DocWise",
    description:
      "An intelligent chat application that allows you to have conversations about your PDF documents. Upload a PDF and start asking questions!",
    thumbnails: [
      "cgihtmznyms2vl1ajl0t",
      "b9ctk2uatvdnvtra685m",
      "d7f2kiir8tlqodqcf9tk",
    ],
    github_url: "https://github.com/rishabyadav-dev/DocWise",
    deployment_url: "https://doc-wise.vercel.app",
    stage: "Beta",
  },
  {
    id: 2,
    title: "EchoLine",
    description:
      "Real-time messaging app with WebSocket communication, file uploads, and notification system. Modern full-stack implementation.",
    thumbnails: ["kfznb7ntonqiculc9tli", "bkyhau7b4cbdvyvemkfz"],
    github_url: "https://github.com/rishabyadav-dev/EchoLine",
    deployment_url: "https://chat-app-roan-psi.vercel.app",
    stage: "Beta",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "A robust and intuitive personal finance tracking application designed to help users manage transactions, track budgets.",
    thumbnails: ["e6wuujoi8n8jn1adxnhe", "bhc5t4sfum1jk4t4myf7"],
    github_url: "https://github.com/rishabyadav-dev/personal-finance-tracker",
    deployment_url: "https://personal-finance-tracker-pied.vercel.app",
    stage: "Beta",
  },
  {
    id: 4,
    title: "Wavybox",
    description:
      "A modern, real-time social media platform. Instantly share posts, follow users, and engage with a sleek, responsive interface.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/Wavybox",
    deployment_url: "https://wavy-box.vercel.app/",
    stage: "Development",
  },
  {
    id: 5,
    title: "Notely",
    description:
      "A minimalist, Google Keep-inspired note-taking app. Create, organize, and retrieve notes & to-dos effortlessly with a clean, responsive interface.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/Notely",
    deployment_url: "",
    stage: "Archived",
  },
  {
    id: 6,
    title: "This portfolio ",
    description:
      "A modern, minimalist portfolio showcasing my journey as a full-stack web developer. Built to demonstrate my skills and passion for creating exceptional user experiences.",
    thumbnails: [],
    github_url: "https://github.com/rishabyadav-dev/my-portfolio",
    deployment_url: "",
    stage: "Beta",
  },
];

export default function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full  flex flex-col gap-10 pb-28 items-center h-fit"
    >
      {projects.map((project: ProjectProps) => (
        <div className=" w-full rounded-4xl" key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            thumbnails={project.thumbnails}
            github_url={project.github_url}
            deployment_url={project.deployment_url}
            stage={project.stage}
          />
        </div>
      ))}
    </motion.div>
  );
}
