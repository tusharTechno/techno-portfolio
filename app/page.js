"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./components/SectionHeading";
import Image from "next/image";
import { motion } from "motion/react";
import MacHeader from "./components/MacHeader";
import HomeCard from "./components/HomeCard";
import Cards from "./components/Cards/Cards";
import StatsSection from "./components/StatsSection";
const CodeEditor = dynamic(() => import("./components/CodeEditor"), {
  ssr: false,
});

const HomePage = () => {
  const formRef = useRef(null);

  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full">
      <section className="hero bg-zinc-800 w-full py-10 ">
        <div className="flex flex-col md:flex-row items-center w-[90%] gap-10 mx-auto">
          <div className="w-full md:w-1/2 relative">
            <span className="animate-bounce bg-purple-300/20 capitalize py-1 ml-10 mb-3 px-2 rounded-sm inline-block text-sm border-[1px] border-purple-500/20 text-purple-500">
              Performance optimization
            </span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.87, 0, 0.13, 1],
                staggerChildren: 0.5,
              }}
              className="text-4xl md:text-6xl font-bold"
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
              Security Awareness
            </span>
            <span className="capitalize animate-bounce-slow duration-200 absolute right-0 bottom-5 bg-blue-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-blue-500/20 text-blue-500">
              Strong UI/UX sense
            </span>
            <span className="capitalize animate-bounce-fast duration-250 absolute right-0 top-20 bg-yellow-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-yellow-500/20 text-yellow-500">
              Otimized Code
            </span>
            <span className="capitalize animate-bounce duration-250 absolute left-40 md:left-1/2 -bottom-8 md:-bottom-10 bg-indigo-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-indigo-500/20 text-indigo-500">
              Scalability
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
        <Cards />
      </section>

      <StatsSection />

      <section className="mt-5 md:mt-28">
        <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-1">
            <SectionHeading
              align="text-left"
              text="Crafting Digital "
              colorText="Excellence"
            />
            <p className="text-sm md:text-base mt-3">
              Bringing ideas to life with cutting-edge web solutions that blend
              innovation, performance, and scalability. Every project is
              meticulously designed to meet unique business needs, ensuring
              seamless user experiences, robust security, and future-ready
              technology.
            </p>
            <p className="text-sm md:text-base mt-3">
              With expertise in modern development practices, I deliver
              tailor-made digital solutions across various industries—whether
              it’s dynamic online platforms or enterprise-grade applications. My
              focus remains on maximizing performance, maintaining security, and
              pushing the boundaries of excellence to create solutions that
              truly make an impact.
            </p>
            <p className="text-sm md:text-base mt-3">
              Would you like me to fine-tune it further or add a more
              personalized touch?
            </p>
            <button
              onClick={handleScroll}
              className="bg-indigo-500 cursor-pointer px-5 py-2 font-semibold rounded-lg mt-4"
            >
              Contact Me
            </button>
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
        <SectionHeading text="Projects I've" colorText="Brought to Life" />
        <HomeCard />
      </section>

      <section className="w-full mt-15 md:mt-24">
        <div className="flex flex-col-reverse md:flex-row gap-y-8 items-center w-[90%] mx-auto">
          <div className="w-full md:w-1/2 bg-zinc-900 rounded-lg border-[1px] border-zinc-200/10 overflow-hidden">
            <MacHeader text="Contact" />
            <div
              ref={formRef}
              className="grid items-center bg-zinc-900 py-5 px-5 md:px-15"
            >
              <form
                className="w-full grid gap-3"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full min-h-20 max-h-30 outline-none rounded-lg py-1 px-2 bg-zinc-800 border-[1px] border-zinc-700"
                ></textarea>
                <button className="bg-indigo-500 cursor-pointer py-2 font-semibold rounded-lg mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid md:place-items-center">
            <div className="w-fit">
              <SectionHeading
                align="text-left"
                text="Get in"
                colorText="Touch"
              />
              {[
                {
                  label: "Email",
                  text: "pankajtechno17@gmail.com",
                  colors: "bg-blue-500/20 text-blue-500",
                  href: "mailto:pankajtechno17@gmail.com",
                  icon: "ri-mail-send-line",
                },
                {
                  label: "Location",
                  text: "Chandigarh, India",
                  colors: "bg-yellow-500/20 text-yellow-500",
                  href: "mailto:pankajtechno17@gmail.com",
                  icon: "ri-map-pin-line",
                },
                {
                  label: "Contact No",
                  text: " +91-9888462990",
                  colors: "bg-green-500/20 text-green-500",
                  href: "tel:+919888462990",
                  icon: "ri-customer-service-2-line",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  target="_blank"
                  href={link.href}
                  className="flex items-stretch gap-2 mt-8"
                >
                  <span
                    className={`grid w-12 place-items-center shrink-0 rounded-lg ${link.colors}`}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </span>
                  <p className="text-sm md:text-base font-regular leading-[1.1]">
                    <span className="block font-semibold text-lg">
                      {link.label}
                    </span>
                    {link.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
