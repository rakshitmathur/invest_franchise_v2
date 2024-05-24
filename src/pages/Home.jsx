import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { CarouselHero } from "../components/CarouselHero";
import ButtonGrad from "../components/ButtonGrad";

import Aos from "aos";
import { RiEqualizerFill } from "react-icons/ri";
import logo1 from "../assets/logo1.webp";

import "aos/dist/aos.css";

import { MdOutlineHdrStrong } from "react-icons/md";

import { Link } from "react-router-dom";
import { FaHands } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdBrandingWatermark } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";
import { TbHomeStats } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

import { RiTeamFill } from "react-icons/ri";
import { VscDebugCoverage } from "react-icons/vsc";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { RiMiniProgramFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { Label, Modal, TextInput } from "flowbite-react";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const whyus = useRef(null);
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validate required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      // Send form data to backend for email processing
      const mailtoLink = `mailto:consultant@investinfranchise.in?subject=${formData.interestedIn}&body=Name: ${formData.name}%0APhone : ${formData.phone}%0AEmail: ${formData.email}%0AInterestedIn: ${formData.interestedIn}%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      // console.log("Form data:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestedIn: "",
        industries: "",
        message: "",
      });
      // Clear errors
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  const dataMid = [
    {
      ques: "On-time deal closing",
      ans: "Close high-quality deals under 30 days with the assistance of our franchise professionals with combined experience of more than 25 years.",
    },
    {
      ques: "Pan India coverage",
      ans: "Own a franchise at your location of choice and start benefiting from the investments today. Make the most of the ever growing consumer demand of purchasing branded products.",
    },
    {
      ques: "Reach across several industries",
      ans: "Planning to acquire a successful franchise? We offer over 50+ national and international brands across the country.",
    },
  ];

  return (
    <div className="relative w-[100%]">
      <div className=" h-[80%]  z-10 ">
        <div className="left-hero h-full relative w-[100%]">
          <div className="absolute flex items-center md:top-[60%] top-[45%] z-10 w-full ">
            <button
              className=" md:px-10 px-4 md:py-4 py-1 border border-2 border-blue-800 md:w-1/5 w-[140px] m-auto rounded-full cursor-pointer hover:drop-shadow-xl hover:shadow-black text-black font-bold xl:text-lg text-base"
              onClick={() => setOpenModal(true)}
            >
              Consult Now
            </button>
          </div>

          <Modal
            show={openModal}
            size="xl"
            onClose={onCloseModal}
            popup
            className=""
          >
            <Modal.Header />
            <Modal.Body>
              <form action="" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <h3 className="text-xl  text-gray-900 dark:text-white text-center font-bold">
                    Looking to Invest in Franchise? <br />
                    <span className=" mt-1">Consult Us!</span>
                  </h3>
                  <div>
                    <div className="mb-1 block">
                      <Label
                        htmlFor="name"
                        value="Name"
                        className="text-sm font-semibold"
                      />{" "}
                      <span className="text-red-600">*</span>
                    </div>
                    <TextInput
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <div className="mb-1 block">
                      <Label
                        htmlFor="phone"
                        value="Phone"
                        className="text-sm font-semibold"
                      />{" "}
                      <span className="text-red-600">*</span>
                    </div>
                    <TextInput
                      id="phone"
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <div className="mb-1 block">
                      <Label
                        htmlFor="email"
                        value="Email"
                        className="text-sm font-semibold"
                      />{" "}
                      <span className="text-red-600">*</span>
                    </div>
                    <TextInput
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <div className="mb-1 block">
                      <label
                        htmlFor="interested"
                        className="text-sm font-semibold"
                      >
                        Interested In <span className="text-red-600">*</span>
                      </label>
                    </div>
                    <select
                      className="  rounded-md border border-1 border-gray-300 p-1 md:p-2 w-full   transition ease-in-out duration-150"
                      id="interested"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                    >
                      <option value="Investing in a Frenchise">
                        Franchise Investment (Investors)
                      </option>
                      <option value="Expand your Franchise">
                        Franchise Expansion (Brands){" "}
                      </option>
                      <option value="Sell or Buy Business">
                        Business Re-sale ( Investors / Brands){" "}
                      </option>
                      <option value="Lease out of property">
                        Real Estate Services (Property Owners / Property
                        Seekers){" "}
                      </option>
                    </select>
                    {errors.interestedIn && (
                      <p className="text-red-600">{errors.interestedIn}</p>
                    )}
                  </div>

                  <div className="mb-1 block">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-800 "
                    >
                      Remark (Optional)
                    </label>

                    <div className=" mb-2">
                      <textarea
                        name="message"
                        id="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Your Message..."
                        className="w-full border border-1 border-gray-300"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-8">
                    <ButtonGrad text="Submit" wid="100%" high={2.8 + "em"} />
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>

          <div
            id=""
            className="absolute md:top-[82%] top-[70%] w-full flex items-center justify-center text-black font-bold md:text-5xl text-3xl z-10 cursor-pointer text-black arrow-icon"
            onClick={() => scrollToSection(whyus)}
          >
            <MdOutlineKeyboardDoubleArrowDown className="svg" />
          </div>

          <CarouselHero />
        </div>
      </div>

      <div className=" ">
        <div className="container-main pb-24  pt-16 " ref={whyus}>
          <div className="flex  lg:flex-row flex-col gap-12 justify-center  items-center">
            <div className="">
              <h2 className="text-center  xl:text-5xl text-3xl font-bold mb-4">
                Why Choose Us
              </h2>
              <p className="text-center text-gray-800 xl:text-2xl text-xl lg:mb-48 mb-4">
                We offer our brands and investors a tried-and-true road to
                entrepreneurship with reduced risk and better success rates. Our
                USP are:-
              </p>

              {/* Desktop view */}
              <div className=" mb-32 h-[420px] w-[500px]  mt-12 flex flex-col gap-4 relative pt-12 hidden lg:block m-auto">
                <div className="absolute top-[-170px] left-[28%] w-1/2 h-1/4 border border-1 px-8 py-4 bg-white shadow-lg border-radius-block2">
                  <h1 className="font-bold text-gray-800 text-center">
                    Standard Operating Procedure
                  </h1>
                </div>
                <div className=" h-1/3 w-full flex justify-between relative">
                  <div className="absolute h-3/4 top-[-15px] left-[-179px] w-1/2 border border-1 px-8 py-4 bg-white shadow-lg border-radius-block">
                    <h1 className="font-bold text-gray-800 text-center">
                      Experienced and Professional Team
                    </h1>
                  </div>
                  <div className="border border-1 shadow-2xl border-blue-800 z-10 w-[120px] bg-white h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text -mt-7 ml-12">
                    <RiTeamFill />
                  </div>
                  <div className="border border-1 shadow-2xl border-blue-800 z-10 w-[120px] bg-white h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text -mt-20 ">
                    <VscServerProcess />
                  </div>
                  <div className="border border-1 shadow-2xl border-blue-800 z-10 w-[120px] bg-white h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text -mt-7 mr-12">
                    <MdContactSupport />
                  </div>
                  <div className="absolute right-[-179px] px-8 py-4 top-[-15px] w-1/2 h-3/4 border border-1 pl-12 bg-white shadow-lg border-radius-block1">
                    <h1 className="font-bold text-gray-800 text-center">
                      Strong Support Systems{" "}
                    </h1>
                  </div>
                </div>
                <div className=" h-1/3 w-full flex justify-between relative ">
                  <div className="absolute left-[-244px] top-[14px] h-3/4 px-8 py-8 w-1/2 border border-1 bg-white shadow-lg border-radius-block">
                    <h1 className="font-bold text-gray-800 text-center">
                      Multicity Coverage{" "}
                    </h1>
                  </div>
                  <div className="-ml-4 border border-1 shadow-2xl border-blue-800 z-10 w-[120px] bg-white h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text ">
                    <VscDebugCoverage />
                  </div>

                  <div className="border border-4 shadow-2xl border-blue-800 z-10 w-[200px] h-[200px] rounded-full relative -mt-12 ">
                    <div className=" m-auto  mt-14  w-full px-6">
                      <img src={logo1} alt="logo" className="h-full w-full " />
                    </div>
                    <div className="absolute h-1 w-11 blue-bg top-[52%] left-[-46px] text-4xl text-gray-500 ">
                      {/* <BsArrowLeft /> */}
                    </div>
                    <div className="absolute h-1 w-11 blue-bg top-[52%] right-[-46px] text-4xl text-gray-500 ">
                      {/* <BsArrowRight /> */}
                    </div>
                    <div className="absolute h-10 w-1 blue-bg  top-[100%] left-[48%] text-4xl text-gray-500 ">
                      {/* <BsArrowDown /> */}
                    </div>
                    <div className="absolute h-10 w-1 blue-bg  top-[-40px] left-[48%] text-4xl text-gray-500 ">
                      {/* <BsArrowUp /> */}
                    </div>
                    <div className="absolute h-1 w-8 blue-bg skew-y-45 top-[6%] left-[-10px] text-4xl text-gray-500 ">
                      {/* <BsArrowUpLeft /> */}
                    </div>
                    <div className="absolute h-1 w-9 blue-bg skew-y-135 top-[93%] left-[-10px] text-4xl text-gray-500 ">
                      {/* <BsArrowDownLeft /> */}
                    </div>
                    <div className="absolute h-1 w-9 blue-bg skew-y-45 top-[93%] right-[-10px] text-4xl text-gray-500 ">
                      {/* <BsArrowDownRight /> */}
                    </div>
                    <div className="absolute h-1 w-8 blue-bg skew-y-135 top-[6%] right-[-10px] text-4xl text-gray-500 ">
                      {/* <BsArrowUpRight /> */}
                    </div>
                  </div>

                  <div className="-mr-4 border border-1 shadow-2xl border-blue-800 z-10 w-[120px] bg-white h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text ">
                    <GiArchiveResearch />
                  </div>
                  <div className="absolute right-[-240px] px-8 py-4 top-[14px] w-1/2 h-3/4 border border-1 pl-12 bg-white shadow-lg border-radius-block1">
                    <h1 className="font-bold text-gray-800 text-center">
                      Research-Based Recommendations
                    </h1>
                  </div>
                </div>

                <div className=" h-1/3 w-full flex justify-between relative">
                  <div className="absolute left-[-180px] top-[24px] w-1/2 px-8 py-4 h-3/4 border border-1 bg-white shadow-lg border-radius-block">
                    <h1 className="font-bold text-gray-800 text-center">
                      A Wider Range of Brands
                    </h1>
                  </div>
                  <div className="border ml-10 mt-4  border-1 shadow-2xl border-blue-800 bg-white w-[120px] h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text z-10">
                    <FaArrowUpShortWide />
                  </div>
                  <div className="border  border-1 shadow-2xl border-blue-800 bg-white w-[120px] h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text z-10 mt-16">
                    <RiMiniProgramFill />
                  </div>
                  <div className="border mr-10 mt-4 border-1 shadow-2xl border-blue-800 bg-white w-[120px] h-[120px] rounded-full flex items-center justify-center xl:text-5xl md:text-3xl text-2xl blue-light-text z-10">
                    <MdManageAccounts />
                  </div>
                  <div className="absolute right-[-180px] px-8 py-4 top-[25px] w-1/2 h-3/4 border border-1 pl-12 bg-white shadow-lg border-radius-block1">
                    <h1 className="font-bold text-gray-800 text-center">
                      Dedicated Key Account Managers
                    </h1>
                  </div>
                </div>
                <div className="absolute left-[26%] top-[116%] h-1/4 px-8 py-4 w-1/2 border border-1 bg-white shadow-lg border-radius-block2">
                  <h1 className="font-bold text-gray-800 text-center">
                    Robust Franchise Development Programs
                  </h1>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden block">
              <div className="container-main flex flex-col gap-8">
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <VscServerProcess />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Standard Operating Procedure
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <RiTeamFill />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Experienced and Professional Team
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <VscDebugCoverage />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Multicity Coverage
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <FaArrowUpShortWide />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    A Wider Range of Brands
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <RiMiniProgramFill />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Robust Franchise Development Programs
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <MdManageAccounts />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Dedicated Key Account Managers
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <GiArchiveResearch />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Research-Based Recommendations
                  </h1>
                </div>
                <div className="px-12 py-10 border border-1 shadow-lg w-full m-auto flex flex-col md:gap-8 gap-4">
                  <div className="md:text-3xl text-3xl blue-light-text flex items-center justify-center">
                    {" "}
                    <MdContactSupport />
                  </div>
                  <h1 className=" md:text-xl text-lg font-bold text-gray-700 text-center">
                    Strong Support Systems
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-12 px-2">
        <div className="container-main pb-12 ">
          <div className="" data-aos="fade-up">
            <h3 className="text-white text-center text-gray-800 xl:text-5xl lg:text-3xl text-2xl font-bold mb-2">
              Our Core Values
            </h3>
            <p className="xl:text-2xl lg:text-xl text-lg text-gray-700 text-center mb-12 text-white">
              With these values, we embrace our mission to bring each client the
              best service
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-between xl:gap-16 lg:gap-12 gap-8">
            <div
              className=" flex flex-col items-center px-2 py-2"
              data-aos="zoom-in-up"
            >
              <div className="xl:text-4xl text-3xl mb-4 text-white h-16 w-16 blue-light-bg  flex items-center justify-center rounded-full">
                <MdOutlineHdrStrong />
              </div>
              <h1 className="xl:text-2xl text-xl font-semibold text-white mb-2">
                Courage
              </h1>
              {/* <h3 className="text-center text-lg xl:text-xl font-bold text-gray-800 mb-2 text-white">
                Ethical | Fair | Fearless | Truthful
              </h3> */}
              <p className="text-base lg:text-lg text-center text-gray-700 text-white">
                We encourage individuals to embrace risks to become
                extraordinary
              </p>
            </div>
            <div
              className="flex flex-col items-center px-2 py-2"
              data-aos="zoom-in-up"
            >
              <div className="xl:text-4xl text-3xl mb-4 text-white h-16 w-16 blue-light-bg  flex items-center justify-center rounded-full">
                <RiEqualizerFill />
              </div>
              <h1 className="xl:text-2xl text-xl font-semibold blue-light-text mb-2 text-white">
                Equality
              </h1>
              {/* <h3 className="text-center text-lg xl:text-xl font-bold text-gray-800 mb-2 text-white">
                Honest | Open Communication
              </h3> */}
              <p className="text-base lg:text-lg text-center text-gray-700 text-white">
                We believe in fair dealings and do not discriminate between our
                brands, investors, employees
              </p>
            </div>
            <div
              className="flex flex-col items-center px-2 py-2"
              data-aos="zoom-in-up"
            >
              <div className="xl:text-4xl text-3xl mb-4 text-white h-16 w-16 blue-light-bg  flex items-center justify-center rounded-full">
                <FaHands />
              </div>
              <h1 className="xl:text-2xl text-xl font-semibold blue-light-text mb-2 text-white">
                Respect
              </h1>
              {/* <h3 className="text-center text-lg xl:text-xl font-bold text-gray-800 mb-2 text-white">
                Cohesive | Collaborative | Seamless
              </h3> */}
              <p className="text-base lg:text-lg text-center text-gray-700 text-white">
                We treat all our brands, investors, and employees with dignity
                and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main mt-16 pb-24 full">
        <h1 className="mb-8 text-center xl:text-5xl text-3xl font-bold ">
          Our Services
        </h1>
        <div className="h-[530px] xl:w-3/4 lg:w-5/6 m-auto w-full flex flex-col gap-[2px]">
          <div className=" h-1/2 flex flex-row gap-[2px]">
            <Link
              to={"/forinvestors"}
              className="border border-gray-100 border-1 hover:cursor-pointer h-full w-1/2 border1-radius-top-1 flex justify-between  hover:scale-95 z-4  hover-block group shadow-2xl"
            >
              <div className="w-2/3  xl:my-[10%] lg:my-[8%] sm:my-[10%] my-[2%] md:pl-4 my-auto md:my-0 pl-2 ">
                <h1 className=" xl:text-2xl font-bold md:text-xl text-lg ">
                  Franchise Investment{" "}
                </h1>
                {/* <p className="text-center text-sm md:text-base text-gray-800">
                  As your growth partner, we are committed to aspiring
                  entrepreneurs and ready to assist in selecting the right
                  franchise for them
                </p> */}
              </div>
              <div className="h-full w-1/3  flex items-end relative">
                <div className="xl:h-1/2 h-2/5 w-full   text-white md:text-4xl text-3xl shadow-xl blue-light-bg border-radius-top-1 z-10 flex justify-center items-center pl-6 pt-4">
                  <GiReceiveMoney />
                </div>
              </div>{" "}
            </Link>
            <Link
              to={"/forbrands"}
              className="border border-gray-100 border-1 hover:cursor-pointer h-full w-1/2 border1-radius-top-2 flex justify-between  hover:scale-95 z-4  hover-block group shadow-2xl"
            >
              <div className="h-full w-1/3  flex items-end relative">
                <div className="xl:h-1/2 h-2/5  w-full   text-white md:text-4xl text-3xl shadow-xl blue-light-bg border-radius-top-2 z-10 flex justify-center items-center pr-6 pt-4">
                  <MdBrandingWatermark />
                </div>
              </div>
              <div className="w-2/3 xl:my-[10%] lg:my-[8%] sm:my-[10%] my-[10%] md:pr-2 my-auto md:my-0 pr-2 overflow-hidden">
                <h1 className=" xl:text-2xl font-bold md:text-xl text-lg ">
                  Franchise Expansion
                </h1>
                {/* <p className="text-center text-sm md:text-base text-gray-800">
                  For your brands, we provide end-to-end solutions based on
                  their needs. Our services include Marketing, FDP, Appointment
                  of Partners, etc.{" "}
                </p> */}
              </div>
            </Link>
          </div>
          <div className=" h-1/2 flex flex-row gap-[2px]">
            <Link
              to={"/resell"}
              className="border border-gray-100 border-1 hover:cursor-pointer h-full w-1/2 border1-radius-bottom-1 flex justify-between  hover:scale-95 z-4  hover-block group shadow-2xl"
            >
              <div className="w-2/3 xl:my-[10%] lg:my-[22%] sm:my-[16%] my-[10%] md:pl-4 my-auto md:my-0 pl-2 overflow-hidden">
                <h1 className=" xl:text-2xl font-bold md:text-xl text-lg   ">
                  Business Re-Sale{" "}
                </h1>
                {/* <p className="text-center text-sm md:text-base text-gray-800">
                  We also help you sell/transfer operational franchises to other
                  potential buyers who are interested in buying and running
                  businesses.{" "}
                </p> */}
              </div>
              <div className="h-full w-1/3  relative">
                <div className="xl:h-1/2 h-2/5 w-full   text-white md:text-4xl text-3xl shadow-xl blue-light-bg border-radius-bottom-1 z-10 flex justify-center items-center pl-6 pb-4">
                  <SiHomeassistant />
                </div>
              </div>
            </Link>
            <Link
              className="border border-gray-100 border-1 hover:cursor-pointer h-full w-1/2 border1-radius-bottom-2 flex justify-between  hover:scale-95 z-4  hover-block group shadow-2xl"
              to={"/realestate"}
            >
              <div className="h-full w-1/3  relative">
                <div className="xl:h-1/2 h-2/5 w-full   text-white md:text-4xl text-3xl shadow-xl blue-light-bg border-radius-bottom-2 z-10 flex justify-center items-center pr-6 pb-4">
                  <TbHomeStats />
                </div>
              </div>
              <div className="w-2/3 xl:my-[10%] lg:my-[22%] sm:my-[22%] my-[10%]  md:pr-4 my-auto md:my-0 pr-2 overflow-hidden">
                <h1 className=" xl:text-2xl font-bold md:text-xl text-lg ">
                  Real Estate Services{" "}
                </h1>
                {/* <p className="text-center text-sm md:text-base text-gray-800">
                  We deal in commercial property and provide numerous services
                  under our real estate vertical. Our services.
                </p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
