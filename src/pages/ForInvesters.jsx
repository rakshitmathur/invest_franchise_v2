import React, { useEffect } from "react";
import FranchiseCard from "../components/FranchiseCard";
import Aos from "aos";
import "aos/dist/aos.css";

import car18 from "../assets/car11.webp";
import "./Invest.css";

import { PiHandPointingFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { TbSettingsSearch } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";

import { FaNetworkWired } from "react-icons/fa6";

const ForInvesters = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const dataItems = [
    {
      title: "One Point Contact  ",
      desc: "We provide a dedicated Key Account Manager for the best services.",
      icon: <PiHandPointingFill />,
    },

    {
      title: "Concalls / Meetings ",
      desc: "Our Key Account Manager will arrange calls and meetings with potential Brands at your convenience. ",
      icon: <BsPeopleFill />,
    },
    {
      title: "Due Diligence ",
      desc: "We assist in all due diligence while selecting any brand of your choice.",
      icon: <TbSettingsSearch />,
    },
    {
      title: "Deal Negotiations ",
      desc: " We facilitate all possible negotiations between you and the brand.",
      icon: <FaHandshake />,
    },
    {
      title: "Entry to Events ",
      desc: " Our Investors may visit events organized by our organization. ",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Network Opportunities ",
      desc: " With our huge network you can select right brand with right mindset. ",
      icon: <FaNetworkWired />,
    },
  ];

  return (
    <>
      <div className=" h-[100%]">
        <div className="banner mb-20 2xl:h-[850px] xl:h-[750px] md:h-[850px] h-full border border-4 relative overflow-hidden">
          <div className="absolute lg:h-1/2 md:h-2/3 h-full lg:w-full md:w-5/6  py-0 lg:top-40 lg:left-20 md:left-4 md:top-40">
            <div
              className="md:w-1/2 w-full h-full md:p-12 px-4 py-2 glass-morph overflow-y-hidden"
              data-aos="fade-up-right"
            >
              <h3 className=" xl:text-6xl md:text-3xl text-lg font-bold">
                Expert Guidance for Franchise Investment Success
              </h3>
              <p className=" xl:text-xl md:text-base text-sm lg:text-lg pl-4 md:pt-8 ">
                Describe your consultation services for individuals interested
                in investing in franchises. Highlight your team's expertise in
                analyzing investment opportunities, conducting market research,
                and providing strategic guidance.
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full md:w-1/2 lg:w-2/5   right-list-banner  md:block hidden"></div>
          <img src={car18} alt="banner" className="h-full w-full" />
        </div>

        <div className="container-main pb-24">
          <div className="" data-aos="fade-up">
            <h1 className="xl:text-5xl text-gray-900 text-2xl text-center mb-4 font-bold">
              Franchise Investment (Investors)
            </h1>
            <p className="xl:text-xl md:text-lg text-base text-center text-gray-600 mb-16 ">
              As your growth partner, we are committed to aspiring entrepreneurs
              and ready to assist in selecting the right franchise for them, Our
              doorstep services for our investors include:-{" "}
            </p>
          </div>
          <div className="grid xl:grid-cols-3 xl:gap-12 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mx-auto w-full ">
            {dataItems.map(({ icon, title, desc, index }) => {
              return (
                <FranchiseCard
                  icon={icon}
                  title={title}
                  desc={desc}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForInvesters;
