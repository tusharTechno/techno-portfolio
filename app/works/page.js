"use client";
import React, { useRef, useState, useEffect } from "react";
import PageHeading from "../components/PageHeading";
import workData from "./content/works.json";
import MacHeader from "../components/MacHeader";

const ProjectMenu = () => {
  const menuRef = useRef(null);
  const sectionsRef = useRef({});
  const menuItemsRef = useRef({});
  const [activeTech, setActiveTech] = useState("");
  const offsetTop = 100;

  const technologies = workData;

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToSection = (tech) => {
    if (sectionsRef.current[tech]) {
      const element = sectionsRef.current[tech];
      const yOffset =
        element.getBoundingClientRect().top + window.scrollY - offsetTop;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      let minOffset = Infinity;
  
      technologies.forEach((tech) => {
        const element = sectionsRef.current[tech.workheading];
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = Math.abs(rect.top - offsetTop);
  
          // Only consider sections that are at least 50% visible
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            if (offset < minOffset) {
              minOffset = offset;
              currentActive = tech.workheading;
            }
          }
        }
      });
  
      setActiveTech(currentActive);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  useEffect(() => {
    if (menuItemsRef.current[activeTech]) {
      const activeElement = menuItemsRef.current[activeTech];
  
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: activeTech === technologies[0].workheading ? "start" : "center",
      });
    }
  }, [activeTech]);
  

  return (
    <div className="w-full mt-20">
      <PageHeading text="Showcasing Our" colorText="Excellence" />

      <div className="sticky z-30 top-0 w-full mt-20 h-13 flex bg-zinc-800 mb-5">
        <button
          onClick={scrollLeft}
          className="md:hidden w-10 cursor-pointer h-full shrink-0 bg-zinc-700 px-2"
        >
          <i className="ri-arrow-left-line text-white"></i>
        </button>

        <div
          ref={menuRef}
          className="project-menu overflow-x-scroll whitespace-nowrap z-20 w-full flex items-center md:justify-center px-5 gap-5 md:gap-8 scrollbar-hide"
        >
          {technologies.map((tech, index) => (
            <p
              key={index}
              ref={(el) => (menuItemsRef.current[tech.workheading] = el)}
              className={`cursor-pointer text-sm px-4 py-2 shrink-0 rounded-md duration-200 ${
                activeTech === tech.workheading
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-700 text-white"
              }`}
              onClick={() => scrollToSection(tech.workheading)}
            >
              {tech.workheading}
            </p>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="md:hidden w-10 cursor-pointer h-full shrink-0 bg-zinc-700 p-2"
        >
          <i className="ri-arrow-right-line text-white"></i>
        </button>
      </div>

      <section className="w-full">
        {technologies.map((tech, index) => (
          <div
            key={tech.workheading + index}
            ref={(el) => (sectionsRef.current[tech.workheading] = el)}
            className={`px-3 ${`z-[${
              index + 1
            }]`} md:px-8 pt-8 border-t-[1px] rounded-tl-3xl rounded-tr-3xl ${
              index === 0 ? "translate-y-0 pb-10" : "-translate-y-5 pb-10"
            }`}
          >
            <h2 className="text-left text-2xl font-bold text-white">
              {tech.workheading}
            </h2>
            <div className="gap-5 grid md:grid-cols-2 mt-5">
              {tech.projects.map((project, index) => (
                <div key={project.projectname} className="group relative w-full bg-zinc-900 border-[1px] border-zinc-800 rounded-lg overflow-hidden">
                  <MacHeader text={project.projectname} link={project.projecturl}/>
                  <div className="h-[15rem] md:h-[20rem] grid items-center">
                    <img
                      src={project.projectimage}
                      alt={tech}
                      className="w-full h-full object-cover"
                    />
                    <div className="opacity-0 duration-200 flex items-end px-5 py-5 group-hover:opacity-100 absolute left-0 top-0 w-full h-full bg-linear-[var(--card-gradient)] z-[2]">
                      <p className="text-sm md:text-base">{project.projectdescription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectMenu;
