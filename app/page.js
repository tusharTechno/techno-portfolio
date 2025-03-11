"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import SectionHeading from "./components/SectionHeading";
import Card from "./components/Card";
import Image from "next/image";
import { motion } from "motion/react";
import MacHeader from "./components/MacHeader";
import HomeCard from "./components/HomeCard";
const CodeEditor = dynamic(() => import("./components/CodeEditor"), {
  ssr: false,
});

const HomePage = () => {

  const devskills = [
    {
      title: "CMS",
      skills: [
        "WordPress",
        "WooCommerce",
        "Squarespace",
        "Shopify",
        "Webflow",
        "Flynax",
        "Wix",
        "Processwire",
      ],
    },
    {
      title: "Front-End Development",
      skills: [
        "ReactJS",
        "NextJS",
        "JavaScript",
        "TypeScript",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript frameworks",
      ],
    },
    {
      title: "Database Excellence",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "API Creation/Implementation",
      skills: ["GraphQL", "RestAPI", "ChatGPT API", "Wized"],
    },
    {
      title: "Back-End Development",
      skills: ["Laravel", "CodeIgniter", "NextJS", "NodeJS"],
    },
    {
      title: "Other Technologies",
      skills: ["Git", "GitHub", "Bitbucket", "AWS", "Azure", "Google Cloud"],
    },
  ];

  return (
    <main className="w-full">
      <section className="hero bg-zinc-800 w-full py-10 ">
        <div className="flex flex-col md:flex-row items-center w-[90%] gap-10 mx-auto">
          <div className="w-full md:w-1/2 relative">
            <span className="animate-bounce bg-purple-300/20 capitalize py-1 ml-10 mb-3 px-2 rounded-sm inline-block text-sm border-[1px] border-purple-500/20 text-purple-500">
              Database
            </span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.87, 0, 0.13, 1],
                staggerChildren: 0.5,
              }}
              className="text-3xl md:text-6xl font-bold"
            >
              Hello!,
              <br />
              <span className="text-gradient"> I’m Pankaj</span>
            </motion.h1>
            <p className="text-sm md:text-base mt-5">
              Your go-to Full-Stack Developer with over a decade of hands-on
              experience building powerful, innovative, and high-performing web
              applications. My passion lies in turning complex challenges into
              seamless digital experiences, and I thrive on crafting solutions
              that meet and exceed client expectations.
            </p>
            <span className="capitalize animate-bounce-fast duration-200 bg-green-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-green-500/20 text-green-500">
              Web Developer
            </span>
            <span className="capitalize animate-bounce-slow duration-200 absolute right-0 bottom-5 bg-blue-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-blue-500/20 text-blue-500">
              innovation
            </span>
            <span className="capitalize animate-bounce-fast duration-250 absolute right-0 top-20 bg-yellow-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-yellow-500/20 text-yellow-500">
              clean code
            </span>
          </div>
          <div className="w-full md:w-1/2 bg-zinc-900 rounded-lg overflow-hidden">
            <MacHeader text="index" />
            <div className="h-[28rem] grid items-center">
              <CodeEditor />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-15 md:mt-24">
        <SectionHeading text="Technical" colorText="Expertise" />
        <div className="grid md:grid-cols-3 gap-5 w-[90%] mx-auto mt-5">
          {devskills.map((data, index) => (
            <Card key={data.title} data={data} />
          ))}
        </div>
      </section>

      <section className="mt-5 md:mt-28">
        <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-1">
            <SectionHeading
              align="text-left"
              text="Driven by Innovation, Defined"
              colorText="by Excellence"
            />
            <p className="text-sm md:text-base mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-96">
            <Image
              src="/images/about.svg"
              width={800}
              height={300}
              alt="about-img"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-15 md:mt-28 bg-zinc-800 py-10">
        <SectionHeading text="What We’ve" colorText="Delivered" />
        <HomeCard />
      </section>

      <section className="w-full mt-15 md:mt-24">
        <div className="flex flex-col-reverse md:flex-row gap-y-8 items-center w-[90%] mx-auto">
          <div className="w-full md:w-1/2 bg-zinc-900 rounded-lg border-[1px] border-zinc-200/10 overflow-hidden">
            <MacHeader text="Contact" />
            <div className="grid items-center bg-zinc-900 py-5 px-5 md:px-15">
              <form className="w-full grid gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full min-h-20 max-h-30 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                ></textarea>
                <button className="bg-blue-500 py-2 font-semibold rounded-lg mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid place-items-center">
            <div className="w-fit">
              <SectionHeading
                align="text-left"
                text="Get in"
                colorText="Touch"
              />
              <div className="flex items-stretch gap-2 mt-8">
                <span className="grid w-12 place-items-center bg-blue-500/20 shrink-0 rounded-lg text-blue-500">
                  <i className="ri-mail-send-line text-xl"></i>
                </span>
                <p className="text-sm md:text-base font-regular leading-[1.1]">
                  <span className="block font-semibold text-lg">Email</span>
                  rohit@gmail.com
                </p>
              </div>

              <div className="flex items-stretch gap-2 mt-8">
                <span className="grid w-12 place-items-center bg-yellow-500/20 rounded-lg shrink-0 text-yellow-500">
                  <i className="ri-map-pin-line text-xl"></i>
                </span>
                <p className="text-sm md:text-base font-regular leading-[1.1]">
                  <span className="block font-semibold text-lg">Location</span>
                  XYZ Tech Solutions 12, MG Road - 560095 India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
