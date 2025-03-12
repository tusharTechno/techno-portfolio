import React from "react";
import PageHeading from "../components/PageHeading";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-10">
      <PageHeading text="The Story Behind" colorText="the Code" />
      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Full-Stack Development Knowledge
        </h3>
        <p className="text-sm md:text-base mt-3">
          Having some 10 years of tailor-made exposure in Designing Dynamic and
          Lively Websites, Full Stack Development has carved a long, deep expert
          and a celebrated niche by it. It is complete for client-side and
          server-side development technologies: React, NextJS, Laravel,
          CodeIgniter, and NodeJS. He merrily mashes the digital lifestyle along
          with high proficiency in UI designing with Tailwind, Bootstrap, and
          other JavaScript frameworks, then on a server-side solution scales and
          optimizes using high-end databases, tuning performance with MySQL,
          PostgreSQL, MongoDB, and Firebase.
        </p>
      </section>

      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Customized Solution Over Multiple Platforms
        </h3>
        <p className="text-sm md:text-base mt-3">
          With maximum best exposure on CMS platforms with WordPress, Shopify,
          Webflow, and Squarespace, he brings valuable custom web solutions all
          around business needs. His understanding of API development, cloud
          services, and versioning systems such as Git and Bitbucket ensures
          that modern feat is mastered with top-notch performance so that every
          project endeavors to implement these factors. Custom eCommerce
          platforms, SaaS solutions, or subscription-based services have been
          developed using standards by Pankaj to ensure user experience
          optimization and the highest specification.
        </p>
      </section>
      <section className="w-[90%] mx-auto mt-10">
        <h3 className="text-lg md:text-2xl font-bold mt-5">
          Devoted to Novation and Excellence
        </h3>
        <p className="text-sm md:text-base mt-3">
          He has quite different project experiences, be it real estate portals
          or fintech applications, AI software to e-marketplaces, and he becomes
          really electrified when it comes to solving difficult problems through
          innovations. This with a good eye for details, great problem-solving
          ability knowledge about recent web technologies gives him the
          advantage to convert the most difficult requirements into seamless
          digital experiences. And that is precisely why he sees himself well
          ahead of the modern trends, crossing traditional expectations, and
          making a great name for himself in the tech realm as an innovative and
          trustworthy developer.
        </p>
      </section>
    </main>
  );
};

export default page;
