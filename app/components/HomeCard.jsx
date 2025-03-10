import React from "react";
import StickyCards from "./StickyCards";

const HomeCard = () => {
  const data = [
    {
      title: "Bankrate",
      link: "https://www.bankrate.com/",
      img: "/images/websites/Bankrate.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["NextJS"],
    },
    {
      title: "Dextall",
      link: "https://www.dextall.com/",
      img: "/images/websites/Dextall.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["react", "angular", "vue"],
    },
    {
      title: "Estatemate",
      link: "https://www.estatemate.co.za/",
      img: "/images/websites/estatemate.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["ReactJS"],
    },
    {
      title: "Dollar-Shave-Club",
      link: "https://us.dollarshaveclub.com/",
      img: "/images/websites/Events.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["Shopify"],
    },
    {
      title: "Hiring-Hub",
      link: "https://www.hiring-hub.com/",
      img: "/images/websites/Hiring-Hub.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["WordPress", "PHP", "Woocommerce"],
    },
    {
      title: "King-Realty-Group",
      link: "https://king-realtygroup.com/",
      img: "/images/websites/King.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["react", "angular", "vue"],
    },
    {
      title: "Patient",
      link: "https://www.patient10x.com/",
      img: "/images/websites/Patient.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["Webflow"],
    },
    {
      title: "Provideofactory",
      link: "https://provideofactory.com/",
      img: "/images/websites/Provideofactory.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["react", "angular", "vue"],
    },
    {
      title: "Rapid Clean",
      link: "https://rapidclean.com.au/",
      img: "/images/websites/Rapid.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["Woocommerce", "WordPress", "PHP"],
    },
    {
      title: "Storyblocks",
      link: "https://www.storyblocks.com/",
      img: "/images/websites/Storyblocks.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["NextJs"],
    },
    {
      title: "Unibuddy",
      link: "https://unibuddy.com/",
      img: "/images/websites/Unibuddy.png",
      description: ` When you land on a sample web page or open an email template and see
                content beginning with lorem ipsum, the page creator placed that
                apparent gibberish there on purpose.`,
      tech: ["ReactJS"],
    },
  ];

  return (
    <div className="mt-5 w-[90%]  mx-auto grid gap-10">
      {data.map((data, index) => (
        <StickyCards data={data} index={index} key={`work${index}`} />
      ))}
    </div>
  );
};

export default HomeCard;
