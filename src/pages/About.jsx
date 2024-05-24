import React from "react";
import "../pages/Resell.css";
import fre18 from "../assets/fre18.webp";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="">
      <div className="mb-4 ">
        <div className="lg:h-[550px] md:h-[500px] w-full  relative">
          <div className="absolute h-full w-full background-blur-banner 2xl:py-[8%] xl:py-[9%]  lg:py-[12%] md:py-[10%] sm:py-[18%] pt-[5%] px-[10%]">
            <h1 className="xl:text-5xl md:text-3xl text-lg font-bold text-center md:mb-4 mb-1 text-white ">
              Your Path to Franchise Investment Success
            </h1>
            <p className="xl:text-xl md:text-lg text-sm text-center text-white">
              Welcome to Invest In Franchise, where we are dedicated to guiding
              you on your journey to franchise investment success.
            </p>
            <p className="xl:text-xl md:text-lg text-sm text-center text-white sm:block hidden">
              In this section, you'll discover how our expertise, experience,
              and personalized approach can help you navigate the complex world
              of franchising and achieve your entrepreneurial goals.
            </p>
            <div className="flex md:gap-12 gap-2 justify-between 2xl:w-[35%] xl:w-[50%] lg:w-[55%] md:w-[73%] w-[98%] m-auto md:mt-16 mt-2 px-4 sm:px-16 md:px-2 xl:px-0">
              <div className="2xl:w-3/4 md:w-4/5 w-3/4">
                <Link to={"/contact"}>
                  <button className="border border-2 border-blue-800 text-white md:text-xl text-sm font-bold md:px-6 px-1 py-1 w-full md:py-3 rounded-xl bg-blue-800 hover:bg-transparent hover:border-white">
                    Consult Now
                  </button>
                </Link>
              </div>

              <div className="2xl:w-3/4 md:w-4/5 w-3/4">
                <Link to={"/forinvestors"}>
                  <button className="border border-2 text-white md:text-xl text-sm font-bold md:px-6 px-1 py-1 md:py-3 w-full rounded-xl hover:bg-blue-800 hover:border-blue-800">
                    Services
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <img
            src={fre18}
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="my-20">
        <div className="container-main">
          <h1 className="xl:text-5xl md:text-3xl text-2xl text-gray-800 font-bold mb-8">
            About Us
          </h1>
          <p className="text-base xl:text-lg text-gray-600 mb-4">
            Invest in Franchise (A unit of Shivay Franchise Investment Solutions
            LLP), Founded in 2023 to provide expertise services to all aspiring
            franchisors, franchisees, Commercial Property Owners, Partners, etc.
          </p>

          <p className="text-base xl:text-lg text-gray-600 mb-4">
            Our core philosophy is to champion the future of both franchise
            owners and the brands they represent. This singular focus has been
            instrumental in forging a unified team, driving a clear mission and
            vision, and ultimately fostering a dedicated community of investors
            and brands.
          </p>
          <p className="text-base xl:text-lg text-gray-600 mb-4">
            Our promotors have over 15 years of experience in franchise
            development and with their expertise they bring significant insights
            for our customers and partners. We deal in different business
            categories like Food & Beverages, Retail, Beauty and Saloon,
            Education, Fashion, Health & Wellness etc. etc. <br />
            <br /> <b>We are happy to be your growth partner..!!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
