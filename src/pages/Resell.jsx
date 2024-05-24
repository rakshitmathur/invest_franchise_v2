import React from "react";
import "./Resell.css";
import fre18 from "../assets/fre16.webp";

import ResellCard from "../components/ResellCard";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdCrisisAlert } from "react-icons/md";
import { GiMultiDirections } from "react-icons/gi";

const icons = [
  {
    icon: <MdOutlinePointOfSale />,
  },
  {
    icon: <MdCrisisAlert />,
  },
  {
    icon: <GiMultiDirections />,
  },
];

const Resell = () => {
  return (
    <div>
      <div className="mb-20">
        <div className="lg:h-[750px] md:h-[700px] h-full w-full  relative">
          {/* <div className=" h-[700px] absolute h-full w-full background-blur-banner"></div> */}

          <div
            className="absolute md:w-1/2 sm:w-2/3 w-5/6  h-3/4 border border-black top-8 md:left-[23%] sm:left-20 left-8 glass-morph1 lg:pt-32 lg:px-20 md:px-12 px-10 md:pt-12 sm:pt-24 pt-6"
            data-aos="fade-up-right"
          >
            <h1 className="xl:text-5xl lg:text-3xl text-2xl font-bold text-center mb-4">
              Welcome to Our Franchise Re-sale Opportunities
            </h1>
            <p className="xl:text-xl lg:text-lg text-base text-center md:block hidden">
              At Invest In Franchise, we're excited to unveil profitable
              franchise resale opportunities tailored for aspiring entrepreneurs
              like you. Franchise resale offers a proven business model with the
              potential for significant returns, supported by established brands
              and a pre-existing customer base. Whether you're an experienced
              investor or embarking on your first entrepreneurial endeavor, our
              franchise resale options provide a pathway to success in the
              dynamic world of franchising.
            </p>
          </div>
          <img
            src={fre18}
            alt="banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="  my-16">
        <div className="container-main">
          <h1 className="xl:text-5xl lg:text-3xl text-2xl font-bold text-center mb-4">
            Your Path to Success: <br /> Comprehensive Support Services
          </h1>
          <p className="xl:text-xl lg:text-lg text-base text-center mb-16">
            Empowering your journey towards franchise ownership, we provide an
            array of essential support services tailored to your needs. With our
            Resale Assistance, Selection Guidance, and Professional Advisory, we
            equip you with the tools and expertise necessary to navigate the
            franchising landscape seamlessly.
          </p>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-12 ">
            <ResellCard
              title="Resale Assistance"
              desc="We also help you sell/transfer operational franchises to other potential buyers who are interested in buying and running businesses"
              icon={icons[0].icon}
            />
            <ResellCard
              title="Selection Guidance"
              desc="We help you select the right options available in the market for you."
              icon={icons[1].icon}
            />

            <ResellCard
              title="Professional Guidance"
              desc="We provide all our professional guidance and assist in due diligence
            and deal finalization."
              icon={icons[2].icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resell;
