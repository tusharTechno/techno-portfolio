import Image from "next/image";
import React from "react";
import MacHeader from "./MacHeader";

const StickyCards = ({ data, index }) => {
  return (
    <div
      className={`
      sticky 
      ${data.position}
      ${data.rotate}
      odd:rotate-1 even:-rotate-1
      mx-auto w-full md:w-[45rem] 
      bg-zinc-900 rounded-lg 
      border border-zinc-200/10 
      overflow-hidden
    `}
      style={{ top: `${index + 2 + "0"}px`, zIndex: `${index + 1}` }}
    >
      <MacHeader text={data.title} link={data.link} />
      <div className="grid items-center bg-zinc-900 py-5 px-5">
        <div className="flex items-center gap-2 mb-5 text-sm">
          {data.tech?.map((tec, index) => (
            <p
              key={`tech-${index}`}
              className="py-1 px-3 bg-zinc-100/10 border border-zinc-100/10 rounded-full"
            >
              {tec}
            </p>
          ))}
        </div>
        <Image
          src={data.img}
          width={684}
          height={352}
          className="w-full h-50 md:h-85 object-cover rounded-lg overflow-hidden object-center"
          alt="website-img"
        />

        <p className="mt-5 text-sm md:text-base">{data.description}</p>
      </div>
    </div>
  );
};

export default StickyCards;
