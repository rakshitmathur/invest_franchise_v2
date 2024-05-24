import React, { useEffect, useState } from "react";
import ButtonGrad from "./ButtonGrad";
import { FaFacebook, FaGithub, FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo1.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitNewsLetter = (e) => {
    e.preventDefault();
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const mailtoLink = `mailto:consultant@investinfranchise.in?&body=Email signed to your news-letter: ${formData.email}`;
    window.location.href = mailtoLink;

    setFormData({
      email: "",
    });
    // Clear errors
    setErrors({});
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="footer-up">
        <div className="bg-black py-12 lg:px-8 px-0">
          <div className="flex md:flex-row flex-col items-center justify-between gap-4 container-main">
            <div className="left-foot text-white ">
              <h3 className="xl:text-xl lg:text-lg mb-8">
                Share your email address to get latest update from the industry
              </h3>
              <h3 className="text-xl xl:text-3xl mb-4">Newsletter Signup</h3>
              <h1>
                <form action="" onSubmit={submitNewsLetter}>
                  <div className="relative xl:w-3/2 lg:w-1/2 md:w-3/5 w-full h-12 rounded-3xl">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your mail..."
                      className="border h-full w-full border-2 border-blue-200 text-black rounded-3xl pl-4"
                    />
                    <span className="absolute right-2 top-[6px] text-white font-bold  ">
                      <ButtonGrad text="Signup" wid="100%" high={35 + "px"} />
                    </span>
                  </div>
                </form>
              </h1>
            </div>
            <div className="right-foot text-white ">
              <h3 className="xl:text-xl lg:text-lg mb-8">
                Stay tuned & get updated
              </h3>
              <h3 className="text-xl xl:text-3xl mb-4 ">
                Follow Invest in Franchise
              </h3>
              <ul className="example-2 flex gap-3 ">
                <li className="icon-content">
                  <a
                    id="facebook"
                    className="h-10 w-10 xl:h-12 xl:w-12"
                    href="https://dribbble.com/"
                  >
                    <div className="filled"></div>
                    <FaFacebook />
                  </a>
                  <div className="tooltip">Facebook</div>
                </li>
                <li className="icon-content">
                  <a
                    id="insta"
                    className="h-10 w-10 xl:h-12 xl:w-12"
                    href="https://dribbble.com/"
                  >
                    <div className="filled"></div>
                    <AiFillInstagram />
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>

                <li className="icon-content">
                  <a
                    id="youtube"
                    className="h-10 w-10 xl:h-12 xl:w-12"
                    href="https://dribbble.com/"
                  >
                    <div className="filled"></div>
                    <TbBrandYoutubeFilled />
                  </a>
                  <div className="tooltip">Youtube</div>
                </li>
                <li className="icon-content">
                  <a
                    id="link"
                    className="h-10 w-10 xl:h-12 xl:w-12"
                    href="https://www.linkedin.com/company/invest-in-franchise-a-unit-of-shivay-franchise-investment-consulting-llp/?viewAsMember=true"
                  >
                    <div className="filled"></div>
                    <FaLinkedin />
                  </a>
                  <div className="tooltip">Linkedin</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down py-16 overflow-hidden">
        <div className="about-footer container-main ">
          <div className="w-[98%] m-auto" data-aos="fade-up-left">
            <h3 className="xl:text-3xl lg:text-2xl text-xl text font-bold text-gray-800 mb-8">
              About{" "}
              <span className="text-decor-foot text-3xl font-bold blue-light-text">
                <span className="text-6xl">I</span>
                NVEST IN FRANCHISE
              </span>
            </h3>
            <p className="text-base xl:text-lg text-gray-600 mb-4">
              Invest in Franchise (A unit of Shivay Franchise Investment
              Solutions LLP), Founded in 2023 to provide expertise services to
              all aspiring franchisors, franchisees, Commercial Property Owners,
              Partners, etc.
            </p>

            <p className="text-base xl:text-lg text-gray-600 mb-4">
              Our core philosophy is to champion the future of both franchise
              owners and the brands they represent. This singular focus has been
              instrumental in forging a unified team, driving a clear mission
              and vision, and ultimately fostering a dedicated community of
              investors and brands.
            </p>
            <p className="text-base xl:text-lg text-gray-600 mb-4">
              Our promotors have over 15 years of experience in franchise
              development and with their expertise they bring significant
              insights for our customers and partners. We deal in different
              business categories like Food & Beverages, Retail, Beauty and
              Saloon, Education, Fashion, Health & Wellness etc. <br />
              <br /> We are happy to be your growth partner..!!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pb-8 pt-16">
        <div className="block-footer container-main mb-8">
          <div className="flex lg:flex-row flex-col justify-between xl:gap-6 lg:gap-8 gap-4">
            <div className="text-white xl:w-2/5">
              <div className="logo-foot rounded-xl mb-6 lg:mb-4 ml-8 xl:h-32 lg:h-24 md:h-40 h-24 py-2 cursor-pointer">
                <span>
                  <img
                    src={logo}
                    alt="logo_img"
                    className="h-full rounded-xl"
                  />
                </span>
              </div>
              <div className="flex gap-4 mb-4 lg:text-lg text-base">
                <span className="flex items-center justify-center">
                  <FaLocationDot />
                </span>
                <span>
                  Shivay Franchise Investment Solutions LLP, A-352, Vaishali
                  Nagar, Jaipur - 302021 Rajasthan, India
                </span>
              </div>
              <div className="flex gap-4 mb-2 lg:text-lg text-base">
                <span className="flex items-center justify-center">
                  <FaPhone />
                </span>
                <span>Phone- +91 8852926842</span>
              </div>
              <div className="flex gap-4 mb-2 lg:text-lg text-base">
                <span className="flex items-center justify-center">
                  <MdEmail />
                </span>
                <span>consultant@investinfranchise.in</span>
              </div>
            </div>
            <div className="xl:w-2/5">
              <h3 className="text-white lg:text-2xl text-xl mb-1 mt-8 lg:mt-10">
                Explore
              </h3>
              <hr className="lg:mb-12 mb-4 w-32" />
              <div className="flex xl:gap-24 lg:gap-24 md:gap-48 gap-24">
                <ul className="flex flex-col gap-4">
                  <Link to={"/"}>
                    <li className="">
                      <span className="text-white md:text-xl text-lg hover:underline">
                        Home
                      </span>
                    </li>
                  </Link>

                  <Link to={"/forinvestors"}>
                    <li>
                      <span className="text-white md:text-xl text-lg hover:underline">
                        Services
                      </span>
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li>
                      <span className="text-white md:text-xl text-lg hover:underline">
                        About Us
                      </span>
                    </li>
                  </Link>

                  <Link to={"/contact"}>
                    <li>
                      <span className="text-white md:text-xl text-lg hover:underline">
                        Contact Us
                      </span>
                    </li>
                  </Link>
                </ul>
                <ul className="flex flex-col gap-4">
                  <Link to={"/blogs"}>
                    <li>
                      <span className="text-white md:text-xl text-lg hover:underline">
                        Blogs
                      </span>
                    </li>
                  </Link>

                  <Link to={"/events"}>
                    <li>
                      <span className="text-white md:text-xl text-lg hover:underline">
                        Events & Exhibition
                      </span>
                    </li>
                  </Link>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Privacy Policy
                    </span>
                  </li>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Terms & Conditions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-1/5">
              <h3 className="text-white md:text-2xl text-xl mb-1 lg:mt-8 mt-8">
                Our Franchises Services
              </h3>
              <hr className="lg:mb-12 mb-4  w-60" />
              <ul className="flex flex-col gap-4">
                <Link to={"/forinvestors"}>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Franchise Investment
                    </span>
                  </li>
                </Link>
                <Link to={"/forbrands"}>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Franchise Expansion
                    </span>
                  </li>
                </Link>
                <Link to={"/resell"}>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Franchise Re-sale
                    </span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <span className="text-white md:text-xl text-lg hover:underline">
                      Real Estate Services
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <hr className="mt-16 w-full" />
          <div className="below-one bg-black h-12 ">
            <div className="container-main  pt-8 text-white h-full xl:text-lg text-sm flex items-center justify-center">
              Copyright @2024 | Invest In Franchise | All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
