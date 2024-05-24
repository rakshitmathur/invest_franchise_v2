import React from "react";
import est from "../assets/estate4.webp";
import RealCard from "../components/RealCard";
import { MdOutlineCarRental } from "react-icons/md";
import { TbHomeStats } from "react-icons/tb";

import { TbHomeMinus } from "react-icons/tb";

const RealState = () => {
  const cardItems = [
    {
      icon: <TbHomeMinus />,
      title: "Leasing / Rental Services",
      desc: "We provide leasing or rental services for commercial properties based on requirements of our brands and investors for their business. ",
    },
    {
      icon: <MdOutlineCarRental />,
      title: "Selling of Commercial Property",
      desc: "Wes facilitate the selling of commercial real estate assets, such as office buildings, retail spaces, industrial properties, and land parcels, to businesses and investors",
    },
    {
      icon: <TbHomeStats />,
      title: "Buying of Commercial Property",
      desc: "We facilitate the purchase of commercial real estate assets, such as office buildings, retail spaces, industrial properties, and land parcels, for businesses and investors",
    },
  ];
  return (
    <div className="">
      <div className="md:mb-24 mb-16 relative">
        <div className=" md:h-[500px] h-full w-full">
          <img src={est} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute h-full w-full top-0 left-0 bg-black/75">
          <h1 className="xl:text-4xl md:text-2xl text-xl text-center font-bold m-auto text-white sm:mt-24 mt-8">
            Real Estate Services for <br /> Property Owners and Seekers
          </h1>
          <p className="xl:text-lg text-base text-white m-auto mt-4  sm:w-2/3 w-5/6 text-center">
            Welcome to our comprehensive real estate services page, catering to
            both property owners and seekers alike.{" "}
          </p>
          <p className="xl:text-lg text-base text-white m-auto mt-0  sm:w-1/2 w-5/6 text-center sm:block hidden">
            Whether you're looking to buy, sell, rent, or invest in commercial
            properties, our franchise offers a tailored solution to meet your
            needs.
          </p>
        </div>
      </div>

      <div className="container-main mb-24 mt-8">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-bold text-center md:mb-8 mb-4">
          Real Estate Services
        </h1>
        <p className="md:text-lg text-base text-gray-600 md:mb-16 mb-8 text-center">
          We deal in commercial property and provide numerous services under our
          real estate vertical. Our services include:-
        </p>
        <div className="grid xl:grid-cols-3 xl:gap-12 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mx-auto w-full ">
          {cardItems.map(({ icon, title, desc, index }) => {
            return (
              <RealCard icon={icon} title={title} desc={desc} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealState;
