"use client";
import React, { useRef, useState, useEffect } from "react";
import PageHeading from "../components/PageHeading";

const ProjectMenu = () => {
  const menuRef = useRef(null);
  const sectionsRef = useRef({});
  const [activeTech, setActiveTech] = useState("");
  const offsetTop = 100;

  const technologies = ["Core PHP", "React", "Node.js", "Python", "Laravel"];

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
        const element = sectionsRef.current[tech];
        if (element) {
          const offset = Math.abs(
            element.getBoundingClientRect().top - offsetTop
          );
          if (offset < minOffset) {
            minOffset = offset;
            currentActive = tech;
          }
        }
      });

      setActiveTech(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mt-20">
      <PageHeading text="Showcasing Our" colorText="Excellence" />

      <div className="sticky z-30 top-0 w-full mt-20 h-13 flex bg-zinc-800 mb-5">
        <button
          onClick={scrollLeft}
          className="w-10 cursor-pointer h-full shrink-0 bg-zinc-700 px-2"
        >
          <i className="ri-arrow-left-line text-white"></i>
        </button>

        <div
          ref={menuRef}
          className="project-menu overflow-x-scroll whitespace-nowrap py-2 z-20 w-full flex items-center px-5 gap-5 scrollbar-hide"
        >
          {technologies.map((tech, index) => (
            <p
              key={index}
              className={`cursor-pointer text-sm px-4 py-2 shrink-0 rounded-md ${
                activeTech === tech
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-700 text-white"
              }`}
              onClick={() => scrollToSection(tech)}
            >
              {tech}
            </p>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="w-10 cursor-pointer h-full shrink-0 bg-zinc-700 p-2"
        >
          <i className="ri-arrow-right-line text-white"></i>
        </button>
      </div>

      <section className="w-full">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            ref={(el) => (sectionsRef.current[tech] = el)}
            className={`px-3 ${`z-[${
              index + 1
            }]`} md:px-8 pt-8 border-t-[1px] rounded-tl-3xl rounded-tr-3xl ${
              index === 0 ? "translate-y-0 pb-10" : "-translate-y-5 pb-10"
            }`}
          >
            <h2 className="text-left text-2xl font-bold text-white">{tech}</h2>
            <div className="gap-5 grid md:grid-cols-2 mt-5">
              <div className="w-full bg-zinc-900 border-[1px] border-zinc-800 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-5 py-2 bg-zinc-950">
                  <span className="size-2 rounded-full inline-block bg-red-600"></span>
                  <span className="size-2 rounded-full inline-block bg-yellow-600"></span>
                  <span className="size-2 rounded-full inline-block bg-green-600"></span>
                  <p className="text-base text-zinc-300 ml-5">
                    {tech.toLowerCase()}.js
                  </p>
                </div>
                <div className="h-[15rem] md:h-[20rem] grid items-center">
                  <img
                    src="/images/website-image.webp"
                    alt={tech}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full bg-zinc-900 border-[1px] border-zinc-800 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-5 py-2 bg-zinc-950">
                  <span className="size-2 rounded-full inline-block bg-red-600"></span>
                  <span className="size-2 rounded-full inline-block bg-yellow-600"></span>
                  <span className="size-2 rounded-full inline-block bg-green-600"></span>
                  <p className="text-base text-zinc-300 ml-5">
                    {tech.toLowerCase()}.js
                  </p>
                </div>
                <div className="h-[15rem] md:h-[20rem] grid items-center">
                  <img
                    src="/images/website-image.webp"
                    alt={tech}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectMenu;
