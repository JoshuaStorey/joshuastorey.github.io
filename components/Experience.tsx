import Card from "../components/Card";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  type project = {
    id: number;
    name: string;
    description: string;
    skills: string[];
    github: string;
  };
  const projects: project[] = [
    {
      id: 1,
      name: "Hiking Mobile Application",
      description:
        "Swift application built to track hiking data. \n Application allowed users to find nearby hiking trails.",
      skills: ["Swift", "CoreData"],
      github: "https://github.com/JoshuaStorey/HikingSwiftApp",
    },
    {
      id: 2,
      name: "Apex Map Tracker Web Application",
      description:
        "React Web Application built to track the video game 'Apex Legends' gamemode rotation. \n Application pulled data from a public API and displayed the current gamemodes and time remaining until next.",
      skills: ["React", "Javascript", "HTML", "CSS"],
      github: "https://github.com/JoshuaStorey/ApexMapTracker",
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "Web application built using Nextjs, Typescript and TailwindCSS to display information about myself!",
      skills: ["Nextjs", "Typescript"],
      github: "https://github.com/JoshuaStorey/joshuastorey.github.io",
    },
  ];
  return (
    <div ref={ref} className="bg-cool-blue-color ">
      <h1 className="text-5xl font-bold p-4 text-center text-main-color">
        Projects
      </h1>
      <p className="text-center p-4">
        <a
          href="https://github.com/JoshuaStorey"
          className="text-xl font-bold p-4 text-center text-main-color"
        >
          Click here to view all my projects
        </a>
      </p>
      <div
        className="bg-main-color w-24 h-2 mx-auto
          rounded-md mb-4"
      ></div>
      <div className="p-6 mx-auto">
        <motion.div animate={animation}>
          <div className="flex flex-col items-center justify-between md:flex-row md:space-x-2 space-y-6 mx-auto p-6">
            <Card projects={projects}></Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
